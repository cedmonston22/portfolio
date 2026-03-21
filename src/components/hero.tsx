"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ParticleGrid from "./particle-grid";

export default function Hero(): React.ReactElement {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Particle grid background */}
      <ParticleGrid />

      {/* Radial glow behind content */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,67,0.05)_0%,_transparent_60%)]" />

      <div className="relative z-10 text-center">
        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto mb-8 h-40 w-40 md:h-52 md:w-52"
        >
          <div className="relative h-full w-full rounded-full border border-gold/30 p-1.5 shadow-lg shadow-gold/10">
            <Image
              src="/headshot.jpg"
              alt="Headshot of Cole Edmonston"
              width={208}
              height={208}
              priority
              className="h-full w-full rounded-full object-cover object-top"
            />
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full border border-gold/20 animate-[pulse-glow_3s_ease-in-out_infinite]" />
          </div>
        </motion.div>

        {/* Tagline with decorative lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-5"
        >
          <span className="hidden h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-dark sm:block" />
          <p className="font-mono text-xs font-normal tracking-[0.2em] text-gold uppercase">
            Software Developer
          </p>
          <span className="hidden h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-dark sm:block" />
        </motion.div>

        {/* Name with gold sheen */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="gold-sheen mt-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl"
        >
          Cole Edmonston
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white md:text-lg"
        >
          Building clean, functional, and thoughtful software.
          <br />
          <span className="text-text-secondary">
            Open to internship and full-time opportunities.
          </span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-gold px-7 py-3 text-sm font-semibold text-bg-primary transition-all hover:brightness-110 hover:shadow-lg hover:shadow-gold/20"
          >
            View My Work
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-border-subtle px-7 py-3 text-sm font-medium text-text-secondary transition-all hover:border-border-hover hover:text-text-primary hover:bg-bg-hover"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-7 py-3 text-sm font-medium text-text-secondary transition-all hover:border-border-hover hover:text-text-primary hover:bg-bg-hover"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
