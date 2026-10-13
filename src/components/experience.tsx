"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Experience(): React.ReactElement {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-6 pt-8 pb-20 md:px-8 md:pb-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
          Background
        </p>
        <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
          Experience
        </h2>
      </motion.div>

      <div className="mt-10">
        {experience.map((exp) => (
          <motion.article
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease }}
            className="grid gap-4 border-t border-border-subtle py-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10"
          >
            <div className="font-mono text-xs tracking-wider text-text-muted uppercase">
              <p className="text-text-secondary">{exp.period}</p>
              <p className="mt-1">{exp.location}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-text-primary md:text-3xl">{exp.company}</h3>
              <p className="mt-1 text-sm font-medium text-gold">{exp.role}</p>

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-text-secondary md:text-base">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 bg-gold" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <ul aria-label="Tech stack" className="mt-5 flex flex-wrap gap-2">
                {exp.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-border-subtle px-2.5 py-1 font-mono text-[11px] text-text-secondary lowercase"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
