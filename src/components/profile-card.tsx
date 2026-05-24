"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PHOTOS = [
  { src: "/headshot.jpg", alt: "Cole Edmonston", fit: "object-cover object-top" },
  { src: "/baseball-action.jpg", alt: "Cole Edmonston playing baseball", fit: "object-cover object-center" },
];

const CROSSFADE_INTERVAL = 6000;

const ROTATING_WORDS = [
  "Entrepreneurship",
  "Full-Stack Development",
  "Software Engineering",
  "AI Integration",
  "Machine Learning",
];

function RotatingWords(): React.ReactElement {
  // Doubled list so the marquee loops seamlessly (translate by exactly one set).
  return (
    <div className="marquee-fade w-full overflow-hidden text-xl">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {[...ROTATING_WORDS, ...ROTATING_WORDS].map((word, i) => (
          <span
            key={i}
            className="mx-4 inline-flex items-center gap-4 font-medium text-gold"
          >
            {word}
            <span aria-hidden className="text-text-muted/70">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const socialLinks = [
  {
    label: "Email Cole",
    href: "mailto:cgedmonston22@gmail.com",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/cedmonston22",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cole-edmonston/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ProfileCard(): React.ReactElement {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [nameWidth, setNameWidth] = useState<number | undefined>(undefined);

  // Match the marquee width to the rendered width of the name.
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    const update = (): void => setNameWidth(el.offsetWidth);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % PHOTOS.length);
    }, CROSSFADE_INTERVAL);

    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center px-6 py-28 md:py-32"
    >
      <div className="flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-14">
        {/* Photo — cross-fades headshot ↔ baseball, pauses on hover */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full max-w-[360px] shrink-0 overflow-hidden rounded-2xl border border-border-subtle bg-bg-hover shadow-[0_8px_40px_rgba(0,0,0,0.12)] md:w-[360px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {PHOTOS.map((photo, i) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 380px"
              className={`${photo.fit} transition-opacity duration-[3000ms] ease-in-out ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Dots — tap to switch the active photo (padded for a larger touch target) */}
          <div className="absolute bottom-1 left-1/2 z-10 flex -translate-x-1/2">
            {PHOTOS.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                aria-label={`Show ${photo.alt}`}
                aria-current={active === i}
                onClick={() => setActive(i)}
                className="group flex items-center justify-center p-2.5"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.5)] transition-colors ${
                    active === i ? "bg-white" : "bg-white/50 group-hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full min-w-0 md:flex-1"
        >
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
            Computer Science · Cal Poly SLO
          </p>
          <h1
            ref={nameRef}
            className="mt-3 inline-block text-5xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-6xl"
          >
            Cole Edmonston
          </h1>
          <div className="mt-3" style={{ width: nameWidth }}>
            <RotatingWords />
          </div>

          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              Before I was an engineer, I was an athlete. 
              Thirteens years of competitive baseball which led to NCAA D3 offers.
              I didn&apos;t end up playing in college, 
              but those years on the field shaped how I work: 
              show up early, put the reps in, and trust the process.
            </p>
            <p>
              What started as a love for video games became a curiosity about how
              things are built, then Computer Science at Cal Poly and a drive to
              create products people actually use. I&apos;m building full-stack
              apps across web and mobile, and looking for opportunities to grow as a person and a developer.
            </p>
          </div>

          {/* Actions */}
          <div
            id="contact"
            className="mt-8 flex flex-wrap items-center gap-3 scroll-mt-24"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              Resume
            </a>

            <div className="flex items-center gap-1.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-text-secondary transition-colors hover:border-border-hover hover:text-gold"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
