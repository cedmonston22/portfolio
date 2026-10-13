"use client";

import { useEffect } from "react";
import type * as ThreeTypes from "three";
import { DRONE_INTRO_ATTR, DRONE_INTRO_SEEN_KEY, DRONE_INTRO_SKIP_ATTR } from "./drone-intro-gate";

const MODEL_URL = "/drone.glb";
const LOAD_TIMEOUT_MS = 4000;
const CAMERA_FOV = 35;
const CAMERA_Z = 10;
const DRONE_SPAN_RATIO = 0.95;
const TETHER_RATIO = 0.07;
const DRIFT_PX = 44;

const T_RISE = 2.6;
const T_HOLD = T_RISE + 0.45;
const T_RELEASE = T_HOLD + 0.35;
const T_GONE = T_RELEASE + 1.5;
const FADE_MS = 400;

type Point = { x: number; y: number };
type Rect = { left: number; top: number; width: number; height: number };

const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));
const clamp01 = (v: number): number => clamp(v, 0, 1);
const easeInOut = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutBack = (t: number): number => {
  const s = 0.9;
  const u = t - 1;
  return 1 + (s + 1) * u * u * u + s * u * u;
};

function bezier(p0: Point, c: Point, p1: Point, t: number): Point {
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * c.x + t * t * p1.x,
    y: u * u * p0.y + 2 * u * t * c.y + t * t * p1.y,
  };
}

function layoutRect(el: HTMLElement): Rect {
  let left = 0;
  let top = 0;
  let node: HTMLElement | null = el;
  while (node) {
    left += node.offsetLeft;
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return {
    left: left - window.scrollX,
    top: top - window.scrollY,
    width: el.offsetWidth,
    height: el.offsetHeight,
  };
}

function hasWebGL(): boolean {
  try {
    const probe = document.createElement("canvas");
    return !!(probe.getContext("webgl2") ?? probe.getContext("webgl"));
  } catch {
    return false;
  }
}

type DroneIntroProps = {
  cargoRef: React.RefObject<HTMLElement | null>;
};

export default function DroneIntro({ cargoRef }: DroneIntroProps): null {
  useEffect(() => {
    const root = document.documentElement;
    const debug = (message: string): void => {
      if (process.env.NODE_ENV !== "production") console.info(`[drone intro] ${message}`);
    };
    if (root.dataset[DRONE_INTRO_ATTR] !== "pending") {
      debug(`skipped: ${root.dataset[DRONE_INTRO_SKIP_ATTR] ?? "page was not loaded fresh on /"}`);
      return;
    }

    const cargo = cargoRef.current;
    let disposed = false;
    let frame = 0;
    let canvas: HTMLCanvasElement | null = null;
    let cleanupScene: (() => void) | null = null;

    const settleCargo = (animate: boolean): void => {
      if (!cargo) return;
      cargo.style.transition = animate ? "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)" : "";
      cargo.style.transform = "";
      cargo.style.transformOrigin = "";
      if (animate) {
        window.setTimeout(() => {
          cargo.style.transition = "";
        }, 750);
      }
    };

    const finish = (animate: boolean, reason = "finished"): void => {
      if (disposed) return;
      disposed = true;
      debug(reason);
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      delete root.dataset[DRONE_INTRO_ATTR];
      settleCargo(animate);
      const done = canvas;
      if (done) {
        done.style.opacity = "0";
        window.setTimeout(() => {
          cleanupScene?.();
          done.remove();
        }, FADE_MS);
      } else {
        cleanupScene?.();
      }
    };

    const startScrollY = window.scrollY;
    const startWidth = window.innerWidth;
    const startHeight = window.innerHeight;
    const onResize = (): void => {
      if (window.innerWidth !== startWidth || window.innerHeight !== startHeight) finish(true, "cancelled: window resized");
    };
    const onScroll = (): void => {
      if (Math.abs(window.scrollY - startScrollY) > 2) finish(true, "cancelled: page scrolled");
    };

    if (!cargo || !hasWebGL()) {
      finish(true, cargo ? "cancelled: WebGL unavailable" : "cancelled: card not found");
      return;
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const base = layoutRect(cargo);
    if (base.top < 0 || base.top + base.height > vh || base.height === 0) {
      finish(false, `cancelled: card not fully on screen (top ${Math.round(base.top)}, bottom ${Math.round(base.top + base.height)}, window height ${vh})`);
      return;
    }
    const tetherPx = base.height * TETHER_RATIO;
    const startOffset = vh - base.top + base.width * 0.45 + tetherPx + 40;

    cargo.style.transformOrigin = "50% 0";
    cargo.style.transform = `translate3d(0, ${startOffset}px, 0)`;
    root.dataset[DRONE_INTRO_ATTR] = "flying";
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    const loadTimer = window.setTimeout(() => finish(true, `cancelled: model took over ${LOAD_TIMEOUT_MS}ms to load`), LOAD_TIMEOUT_MS);

    void (async () => {
      try {
        const [THREE, { GLTFLoader }, { RoomEnvironment }] = await Promise.all([
          import("three"),
          import("three/addons/loaders/GLTFLoader.js"),
          import("three/addons/environments/RoomEnvironment.js"),
        ]);
        if (disposed) return;
        const gltf = await new GLTFLoader().loadAsync(MODEL_URL);
        if (disposed) return;
        window.clearTimeout(loadTimer);
        startScene(THREE, gltf.scene, RoomEnvironment);
      } catch (error) {
        console.error("Drone intro failed to load", error);
        window.clearTimeout(loadTimer);
        finish(true, "cancelled: failed to load");
      }
    })();

    function startScene(
      THREE: typeof ThreeTypes,
      model: ThreeTypes.Group,
      RoomEnvironment: new () => ThreeTypes.Scene,
    ): void {
      if (!cargo) return;
      const el = document.createElement("canvas");
      el.setAttribute("aria-hidden", "true");
      el.style.cssText = `position:fixed;inset:0;width:100%;height:100%;z-index:60;pointer-events:none;transition:opacity ${FADE_MS}ms ease`;
      document.body.appendChild(el);
      canvas = el;

      const disposables: { dispose: () => void }[] = [];
      const renderer = new THREE.WebGLRenderer({ canvas: el, antialias: true, alpha: true });
      cleanupScene = () => {
        for (const d of disposables) d.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
      };
      try {
        localStorage.setItem(DRONE_INTRO_SEEN_KEY, "1");
      } catch (error) {
        console.error("Could not record that the drone intro played", error);
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(vw, vh, false);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(CAMERA_FOV, vw / vh, 0.1, 100);
      camera.position.set(0, 0, CAMERA_Z);
      const worldPerPx = (2 * CAMERA_Z * Math.tan((CAMERA_FOV * Math.PI) / 360)) / vh;
      const toWorld = (p: Point): Point => ({
        x: (p.x - vw / 2) * worldPerPx,
        y: (vh / 2 - p.y) * worldPerPx,
      });

      const pmrem = new THREE.PMREMGenerator(renderer);
      const room = new RoomEnvironment();
      const envTarget = pmrem.fromScene(room, 0.04);
      scene.environment = envTarget.texture;
      pmrem.dispose();
      room.traverse((o) => {
        const mesh = o as ThreeTypes.Mesh;
        if (!mesh.isMesh) return;
        mesh.geometry.dispose();
        const material = mesh.material;
        if (Array.isArray(material)) material.forEach((m) => m.dispose());
        else material.dispose();
      });
      disposables.push(envTarget);

      scene.add(new THREE.HemisphereLight(0xfff4dc, 0x1a1408, 1.1));
      const key = new THREE.DirectionalLight(0xffffff, 2.4);
      key.position.set(3, 5, 4);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xe0b44c, 2.2);
      rim.position.set(-4, 2, -3);
      scene.add(rim);

      const meshes: ThreeTypes.Mesh[] = [];
      model.traverse((o) => {
        const mesh = o as ThreeTypes.Mesh;
        if (mesh.isMesh) meshes.push(mesh);
      });
      const bounds = new THREE.Box3();
      for (const mesh of meshes) {
        mesh.geometry.computeBoundingBox();
        if (mesh.geometry.boundingBox) bounds.union(mesh.geometry.boundingBox);
      }
      const center = bounds.getCenter(new THREE.Vector3());
      const extent = bounds.getSize(new THREE.Vector3());

      const droneMaterial = new THREE.MeshStandardMaterial({
        color: 0x3b3a3f,
        metalness: 0.6,
        roughness: 0.32,
        envMapIntensity: 1.3,
      });
      disposables.push(droneMaterial);

      const drone = new THREE.Group();
      drone.rotation.order = "YXZ";
      scene.add(drone);
      const rotors: { pivot: ThreeTypes.Group; spin: number }[] = [];

      for (const mesh of meshes) {
        const geometry = mesh.geometry.clone();
        disposables.push(geometry);
        if (!mesh.name.startsWith("Rotor_")) {
          geometry.translate(-center.x, -center.y, -center.z);
          drone.add(new THREE.Mesh(geometry, droneMaterial));
          continue;
        }
        geometry.computeBoundingBox();
        const box = geometry.boundingBox as ThreeTypes.Box3;
        const hub = box.getCenter(new THREE.Vector3());
        const span = box.getSize(new THREE.Vector3());
        geometry.translate(-hub.x, -hub.y, -hub.z);
        const pivot = new THREE.Group();
        pivot.position.copy(hub.sub(center));
        pivot.add(new THREE.Mesh(geometry, droneMaterial));
        const discGeo = new THREE.CircleGeometry((Math.max(span.x, span.z) / 2) * 1.04, 28);
        discGeo.rotateX(-Math.PI / 2);
        const discMat = new THREE.MeshBasicMaterial({
          color: 0xf3eee3,
          transparent: true,
          opacity: 0.1,
          depthWrite: false,
        });
        disposables.push(discGeo, discMat);
        pivot.add(new THREE.Mesh(discGeo, discMat));
        drone.add(pivot);
        rotors.push({
          pivot,
          spin: mesh.name === "Rotor_FL" || mesh.name === "Rotor_BR" ? 1 : -1,
        });
      }

      const tetherMaterial = new THREE.MeshBasicMaterial({
        color: 0xe0b44c,
        transparent: true,
        opacity: 0.85,
      });
      const tetherGeo = new THREE.CylinderGeometry(1, 1, 1, 6);
      disposables.push(tetherMaterial, tetherGeo);
      const tethers = [0, 1].map(() => {
        const m = new THREE.Mesh(tetherGeo, tetherMaterial);
        scene.add(m);
        return m;
      });

      const up = new THREE.Vector3(0, 1, 0);
      const dir = new THREE.Vector3();
      const a = new THREE.Vector3();
      const b = new THREE.Vector3();
      const spanTether = (mesh: ThreeTypes.Mesh, from: Point, to: Point, radius: number): void => {
        a.set(from.x, from.y, 0);
        b.set(to.x, to.y, 0);
        dir.subVectors(b, a);
        const length = dir.length();
        mesh.visible = length > 1e-4;
        if (!mesh.visible) return;
        mesh.position.copy(a).addScaledVector(dir, 0.5);
        mesh.quaternion.setFromUnitVectors(up, dir.normalize());
        mesh.scale.set(radius, length, radius);
      };

      const cardWorldW = base.width * worldPerPx;
      const scale = (cardWorldW * DRONE_SPAN_RATIO) / extent.z;
      const halfHeightPx = ((extent.y / 2) * scale) / worldPerPx;
      const exitTarget: Point = { x: vw + base.width, y: -base.width * 0.6 };

      let startedAt: number | null = null;
      let last = 0;
      let prevX = 0;
      let swing = 0;
      let swingVel = 0;
      let releasedEarly = false;

      const tick = (): void => {
        if (disposed) return;
        frame = requestAnimationFrame(tick);
        const now = performance.now();
        if (startedAt === null) {
          startedAt = now;
          last = now;
        }
        const t = (now - startedAt) / 1000;
        const delta = Math.min((now - last) / 1000, 1 / 30);
        last = now;

        const rise = clamp01(t / T_RISE);
        const lift = t < T_RISE ? easeOutBack(easeInOut(rise) * 0.35 + rise * 0.65) : 1;
        const offsetY = startOffset * (1 - lift);
        const offsetX = t < T_RISE ? -DRIFT_PX * Math.sin(rise * Math.PI) : 0;

        const vx = (offsetX - prevX) / Math.max(delta, 1e-4);
        prevX = offsetX;
        const settle = clamp01((t - T_RISE * 0.8) / (T_RISE * 0.2));
        swingVel += (clamp(-vx * 0.0009, -0.07, 0.07) - swing) * 70 * delta - swingVel * 11 * delta;
        swing += swingVel * delta;
        const angle = swing * (1 - settle);

        cargo.style.transform =
          t < T_HOLD
            ? `translate3d(${offsetX}px, ${offsetY}px, 0) rotate(${angle}rad)`
            : "";
        if (t >= T_HOLD && !releasedEarly) {
          releasedEarly = true;
          cargo.style.transformOrigin = "";
          delete root.dataset[DRONE_INTRO_ATTR];
        }

        const cardTop = base.top + offsetY;
        const cardCenterX = base.left + base.width / 2 + offsetX;
        const anchorPx: Point = { x: cardCenterX, y: cardTop - tetherPx };

        let dronePx: Point;
        if (t < T_RELEASE) {
          const bob = t > T_RISE ? Math.sin(t * 5) * 3 : 0;
          dronePx = { x: anchorPx.x, y: anchorPx.y - halfHeightPx + bob };
        } else {
          const p = clamp01((t - T_RELEASE) / (T_GONE - T_RELEASE));
          const from: Point = { x: anchorPx.x, y: anchorPx.y - halfHeightPx };
          dronePx = bezier(
            from,
            { x: from.x + base.width * 0.3, y: from.y - base.width * 0.4 },
            exitTarget,
            p * p,
          );
        }

        const droneWorld = toWorld(dronePx);
        drone.position.set(droneWorld.x, droneWorld.y, 0);
        drone.scale.setScalar(scale);
        const exiting = t >= T_RELEASE;
        drone.rotation.y = 0.55 + (exiting ? clamp01((t - T_RELEASE) / 0.6) * 0.5 : 0);
        drone.rotation.x = exiting ? 0.22 : 0.08 + (t < T_RISE ? 0.06 : 0);
        drone.rotation.z = clamp(vx * -0.0004, -0.12, 0.12) + Math.sin(t * 1.7) * 0.015;
        for (const rotor of rotors) rotor.pivot.rotation.y += rotor.spin * 55 * delta;

        const retract = clamp01((t - T_HOLD) / (T_RELEASE - T_HOLD));
        tetherMaterial.opacity = 0.85 * (1 - retract);
        const droneBottom: Point = { x: dronePx.x, y: dronePx.y + halfHeightPx };
        const halfSpread = base.width * 0.32;
        for (let i = 0; i < 2; i += 1) {
          const sign = i === 0 ? -1 : 1;
          const cornerPx: Point = {
            x: cardCenterX + sign * halfSpread * Math.cos(angle),
            y: cardTop + sign * halfSpread * Math.sin(angle),
          };
          const fromPx: Point = { x: droneBottom.x + sign * base.width * 0.05, y: droneBottom.y };
          const toPx: Point = {
            x: cornerPx.x + (fromPx.x - cornerPx.x) * retract,
            y: cornerPx.y + (fromPx.y - cornerPx.y) * retract,
          };
          spanTether(tethers[i], toWorld(fromPx), toWorld(toPx), 1.6 * worldPerPx);
          if (retract >= 1) tethers[i].visible = false;
        }

        renderer.render(scene, camera);

        if (t >= T_GONE) finish(false);
      };

      frame = requestAnimationFrame(tick);
    }

    return () => {
      window.clearTimeout(loadTimer);
      if (canvas || disposed || process.env.NODE_ENV === "production") {
        finish(false, "stopped: left the page");
        return;
      }
      disposed = true;
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      cargo.style.transform = "";
      cargo.style.transformOrigin = "";
      root.dataset[DRONE_INTRO_ATTR] = "pending";
    };
  }, [cargoRef]);

  return null;
}
