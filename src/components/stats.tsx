"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 750, suffix: "+", label: "Mustang Market Users" },
  { value: 90, suffix: "+", label: "ENVISION Beta Testers" },
  { value: 3, suffix: ".83", label: "GPA at Cal Poly" },
  { value: 4, suffix: "", label: "Projects Shipped" },
];

function useCountUp(
  target: number,
  isVisible: boolean,
  duration: number = 2000
): number {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    function tick(now: number): void {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [isVisible, target, duration]);

  return count;
}

function StatItem({ stat }: { stat: Stat }): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(stat.value, isVisible);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-border-subtle bg-bg-elevated px-4 py-6 text-center transition-all duration-300 hover:border-gold/15 hover:bg-bg-surface"
    >
      <span className="text-4xl font-bold text-gold md:text-5xl">
        {count}
        {stat.suffix}
      </span>
      <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
    </div>
  );
}

export default function Stats(): React.ReactElement {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-32">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
          Impact
        </p>
        <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
          By the Numbers
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </motion.div>
    </section>
  );
}
