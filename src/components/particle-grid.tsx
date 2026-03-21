"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const PARTICLE_COUNT = 60;
const CONNECTION_DISTANCE = 140;
const PARTICLE_SPEED = 0.3;
const GOLD = { r: 212, g: 168, b: 67 };
const GREY = { r: 80, g: 80, b: 100 };

export default function ParticleGrid(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const initParticles = useCallback((width: number, height: number): void => {
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * PARTICLE_SPEED,
      vy: (Math.random() - 0.5) * PARTICLE_SPEED,
      radius: Math.random() * 1.5 + 0.5,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = (): void => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      if (particlesRef.current.length === 0) {
        initParticles(rect.width, rect.height);
      }
    };

    const handleMouseMove = (e: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = (): void => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = (): void => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${GREY.r}, ${GREY.g}, ${GREY.b}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);
        const isNearMouse = mouseDist < 150;

        const color = isNearMouse ? GOLD : GREY;
        const opacity = isNearMouse
          ? 0.8 * (1 - mouseDist / 150) + 0.2
          : 0.3;
        const radius = isNearMouse
          ? p.radius * (1.5 - (mouseDist / 150) * 0.5)
          : p.radius;

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
        ctx.fill();

        // Gold connections near mouse
        if (isNearMouse) {
          for (const p2 of particles) {
            if (p === p2) continue;
            const d2x = mouse.x - p2.x;
            const d2y = mouse.y - p2.y;
            const mouseDist2 = Math.sqrt(d2x * d2x + d2y * d2y);
            if (mouseDist2 >= 150) continue;

            const pdx = p.x - p2.x;
            const pdy = p.y - p2.y;
            const pDist = Math.sqrt(pdx * pdx + pdy * pdy);

            if (pDist < CONNECTION_DISTANCE) {
              const lineOpacity =
                (1 - pDist / CONNECTION_DISTANCE) *
                0.25 *
                (1 - mouseDist / 150);
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${GOLD.r}, ${GOLD.g}, ${GOLD.b}, ${lineOpacity})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
