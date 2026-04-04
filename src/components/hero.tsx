"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ParticleGrid from "./particle-grid";

/* ── Character stagger reveal ── */
function AnimatedName({ text }: { text: string }): React.ReactElement {
  const words = text.split(" ");

  return (
    <motion.h1
      aria-label={text}
      className="mt-5 flex flex-wrap justify-center gap-x-4 text-5xl font-bold tracking-tight sm:text-6xl md:gap-x-6 md:text-8xl"
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-flex overflow-hidden">
          {word.split("").map((char, charIdx) => {
            const globalIdx =
              words.slice(0, wordIdx).reduce((a, w) => a + w.length, 0) +
              charIdx;
            return (
              <motion.span
                key={charIdx}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + globalIdx * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block text-text-primary"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </motion.h1>
  );
}

/* ── Typewriter ── */
const typewriterWords = ["software engineering", "AI integration", "entrepreneurship"];
const TYPE_SPEED = 60;
const DELETE_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

function Typewriter(): React.ReactElement {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];

    if (!isDeleting && displayed === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typewriterWords.length);
      const timeout = setTimeout(() => {}, PAUSE_AFTER_DELETE);
      return () => clearTimeout(timeout);
    }

    const speed = isDeleting ? DELETE_SPEED : TYPE_SPEED;
    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? currentWord.slice(0, displayed.length - 1)
          : currentWord.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <span className="text-gold">
      {displayed}
      <span className="ml-[1px] inline-block w-[2px] animate-cursor-blink bg-gold">
        &nbsp;
      </span>
    </span>
  );
}

/* ── Main hero ── */
export default function Hero(): React.ReactElement {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6"
    >
      <ParticleGrid />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,67,0.05)_0%,_transparent_60%)]" />

      <div className="relative z-10 text-center">
        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="mx-auto mb-8 h-40 w-40 md:h-48 md:w-48"
        >
          <div className="relative h-full w-full rounded-full border border-gold/20 p-1.5 shadow-lg shadow-gold/10 ring-1 ring-gold/10 ring-offset-2 ring-offset-bg-primary">
            <Image
              src="/headshot.jpg"
              alt="Headshot of Cole Edmonston"
              width={192}
              height={192}
              priority
              className="h-full w-full rounded-full object-cover object-top"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-mono text-xs tracking-[0.25em] text-gold uppercase"
        >
          CS Student at Cal Poly SLO
        </motion.p>

        {/* Name — character stagger reveal */}
        <AnimatedName text="Cole Edmonston" />

        {/* Underline draw-in */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-4 h-[2px] w-28 origin-left bg-gradient-to-r from-gold-dark via-gold to-gold-dark md:w-36"
        />

        {/* Rotating text bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-text-secondary md:text-xl"
        >
          Passionate about <Typewriter />
          <br />
          <span className="text-base text-text-muted md:text-lg">
            Building polished apps from concept to launch.
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 rounded-lg bg-gold px-9 py-3.5 text-base font-semibold text-bg-primary shadow-md shadow-gold/10 transition-all duration-200 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            View My Work
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
            className="inline-flex items-center gap-2 rounded-lg border border-border-hover px-7 py-3.5 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-gold/30 hover:text-gold hover:bg-bg-hover"
          >
            <svg
              className="h-4 w-4"
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
            className="inline-flex items-center gap-2 rounded-lg border border-border-hover px-7 py-3.5 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-gold/30 hover:text-gold hover:bg-bg-hover"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
