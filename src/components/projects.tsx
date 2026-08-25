"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectRow from "./project-row";

export default function Projects(): React.ReactElement {
  return (
    <section
      id="projects"
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
          Portfolio
        </p>
        <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-3 max-w-lg text-text-secondary">
          A selection of things I&apos;ve built, and the engineering behind
          them.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="mt-12 space-y-12 md:space-y-16"
      >
        {projects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} priority={i === 0} />
        ))}
      </motion.div>
    </section>
  );
}
