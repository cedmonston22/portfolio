"use client";

import { useEffect, useRef } from "react";

const ACCENT_RGB = "224, 180, 76";
const SIDE = 34;
const ROW_H = SIDE * 0.866;
const HOVER_RADIUS = 110;
const BASE_ALPHA = 0.045;
const HOVER_ALPHA = 0.45;
const PULSE_ALPHA = 0.16;

type Triangle = {
  points: [number, number][];
  cx: number;
  cy: number;
};

function buildTriangles(width: number, height: number): Triangle[] {
  const triangles: Triangle[] = [];
  const rows = Math.ceil(height / ROW_H) + 1;
  const cols = Math.ceil(width / SIDE) + 1;
  for (let r = -1; r < rows; r += 1) {
    for (let c = -1; c < cols; c += 1) {
      const ox = c * SIDE + (r % 2 ? SIDE / 2 : 0);
      const oy = r * ROW_H;
      const shapes: [number, number][][] = [
        [[ox, oy], [ox + SIDE, oy], [ox + SIDE / 2, oy + ROW_H]],
        [[ox + SIDE, oy], [ox + SIDE / 2, oy + ROW_H], [ox + SIDE * 1.5, oy + ROW_H]],
      ];
      for (const points of shapes) {
        triangles.push({
          points,
          cx: (points[0][0] + points[1][0] + points[2][0]) / 3,
          cy: (points[0][1] + points[1][1] + points[2][1]) / 3,
        });
      }
    }
  }
  return triangles;
}

export default function WireframeBackground(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    const base = document.createElement("canvas");
    const baseCtx = base.getContext("2d");
    let triangles: Triangle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const tracePath = (target: CanvasRenderingContext2D, tri: Triangle): void => {
      const [a, b, c] = tri.points;
      target.moveTo(a[0], a[1]);
      target.lineTo(b[0], b[1]);
      target.lineTo(c[0], c[1]);
      target.closePath();
    };

    const drawBase = (dpr: number): void => {
      if (!baseCtx) return;
      base.width = width * dpr;
      base.height = height * dpr;
      baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      baseCtx.lineWidth = 1;
      baseCtx.strokeStyle = `rgba(${ACCENT_RGB}, ${BASE_ALPHA})`;
      baseCtx.beginPath();
      for (const tri of triangles) tracePath(baseCtx, tri);
      baseCtx.stroke();
    };

    const draw = (time: number): void => {
      if (!base.width || !base.height) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(base, 0, 0);
      const dpr = canvas.width / width;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineWidth = 1;
      for (const tri of triangles) {
        const dx = tri.cx - mouse.x;
        const dy = tri.cy - mouse.y;
        const near =
          Math.abs(dx) < HOVER_RADIUS && Math.abs(dy) < HOVER_RADIUS
            ? Math.max(0, 1 - Math.hypot(dx, dy) / HOVER_RADIUS)
            : 0;
        const wave = reducedMotion ? 0 : Math.sin(tri.cx / 70 + tri.cy / 85 - time / 1100);
        const pulse = wave > 0.6 ? wave ** 8 * PULSE_ALPHA : 0;
        const extra = near * HOVER_ALPHA + pulse;
        if (extra < 0.004) continue;
        ctx.beginPath();
        tracePath(ctx, tri);
        ctx.strokeStyle = `rgba(${ACCENT_RGB}, ${extra})`;
        ctx.stroke();
        if (near > 0.3) {
          ctx.fillStyle = `rgba(${ACCENT_RGB}, ${near * 0.08})`;
          ctx.fill();
        }
      }
    };

    const loop = (time: number): void => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const start = (): void => {
      cancelAnimationFrame(frame);
      if (reducedMotion || document.hidden) {
        draw(0);
        return;
      }
      frame = requestAnimationFrame(loop);
    };

    const resize = (): void => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      triangles = buildTriangles(width, height);
      drawBase(dpr);
      draw(performance.now());
    };

    const onPointerMove = (e: PointerEvent): void => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (reducedMotion) draw(0);
    };

    const onPointerLeave = (): void => {
      mouse.x = -9999;
      mouse.y = -9999;
      if (reducedMotion) draw(0);
    };

    resize();
    start();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", start);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", start);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
