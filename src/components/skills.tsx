"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function Skills(): React.ReactElement {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-32"
    >
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
          Skills
        </p>
        <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
          Technologies I Work With
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
              },
            }}
            className="rounded-xl border border-border-subtle bg-bg-elevated p-5 transition-all duration-300 hover:border-gold/15 hover:bg-bg-surface"
          >
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase">
              {category.name}
            </h3>
            <ul className="mt-4 flex flex-col gap-1">
              {category.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li
                    key={skill.name}
                    className="group/skill flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm text-text-secondary transition-all duration-200 hover:bg-bg-hover hover:text-text-primary"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/skill:scale-110"
                      style={{ color: skill.color }}
                    />
                    {skill.name}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
