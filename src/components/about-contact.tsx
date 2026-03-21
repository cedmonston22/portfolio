"use client";

import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "cgedmonston22@gmail.com",
    href: "mailto:cgedmonston22@gmail.com",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
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

export default function AboutContact(): React.ReactElement {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-32"
    >
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
          About
        </p>
        <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
          Get to Know Me
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-base leading-relaxed text-text-primary">
            I was an athlete before I was an engineer. Thirteen years of
            baseball, competitive enough to earn NCAA D3 offers. I didn&apos;t
            end up playing in college, but the years on the field shaped how I
            work: show up early, put the reps in, trust the process even when
            progress feels slow.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            What started as a love for video games turned into a genuine
            curiosity about how things are built, which turned into studying
            Computer Science at Cal Poly SLO and a drive to create products
            people actually use.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            I&apos;m currently building full-stack applications across web and
            mobile, handling everything from system design to user experience to
            deployment. I&apos;m drawn to entrepreneurship and the messy,
            rewarding process of turning an idea into something real.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            The more I build, the more I realize how much there is to learn, and
            how much satisfaction I get from creating something. I&apos;m
            looking for internship and full-time opportunities where I can keep
            building, keep learning, and contribute to a team that ships.
          </p>

        </motion.div>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-text-primary">
            Let&apos;s Connect
          </h3>
          <p className="mt-2 text-sm text-text-secondary">
            I&apos;m always open to discussing new opportunities, projects, or
            just having a chat about technology.
          </p>
          <ul className="mt-8 space-y-4">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-4 rounded-xl border border-border-subtle bg-bg-elevated p-4 transition-all hover:border-[rgba(212,168,67,0.2)] hover:bg-bg-surface"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(212,168,67,0.1)] text-gold transition-colors group-hover:bg-[rgba(212,168,67,0.15)]">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary">
                    {link.label}
                  </span>
                  <svg
                    className="ml-auto h-4 w-4 text-text-muted transition-all group-hover:translate-x-1 group-hover:text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
