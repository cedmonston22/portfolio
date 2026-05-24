"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/data/experience";

export default function Experience(): React.ReactElement {
  return (
    <section
      id="experience"
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
          Background
        </p>
        <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
          Education &amp; Experience
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* Education column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <h3 className="flex items-center gap-3 text-lg font-semibold text-text-primary">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(0,0,0,0.05)]">
              <svg
                className="h-4 w-4 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                />
              </svg>
            </span>
            Education
          </h3>

          <div className="mt-6 space-y-4">
            {education.map((edu) => (
              <motion.div
                key={edu.school}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    },
                  },
                }}
                className="rounded-xl border border-border-subtle bg-bg-elevated p-5 card-hover"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">
                      {edu.school}
                    </h4>
                    {edu.degree && (
                      <p className="mt-0.5 text-sm text-text-secondary">
                        {edu.degree}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 rounded-md bg-bg-hover px-2.5 py-1 font-mono text-[10px] tracking-wider text-text-muted uppercase">
                    {edu.year}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-text-muted">{edu.location}</p>

                {edu.highlights.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-md border border-border-subtle px-2.5 py-1 text-[11px] text-text-secondary"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <h3 className="flex items-center gap-3 text-lg font-semibold text-text-primary">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[rgba(0,0,0,0.05)]">
              <svg
                className="h-4 w-4 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </span>
            Experience
          </h3>

          <div className="mt-6 space-y-4">
            {experience.map((exp) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    },
                  },
                }}
                className="rounded-xl border border-border-subtle bg-bg-elevated p-5 card-hover"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">
                      {exp.company}
                    </h4>
                    <p className="mt-0.5 text-sm text-text-secondary">
                      {exp.role}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-md bg-bg-hover px-2.5 py-1 font-mono text-[10px] tracking-wider text-text-muted uppercase">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-text-muted">{exp.location}</p>

                <ul className="mt-3 space-y-2">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-text-secondary"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/50" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
