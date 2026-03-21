"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

export default function Projects(): React.ReactElement {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-32"
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
          Portfolio
        </p>
        <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-3 max-w-lg text-text-secondary">
          A selection of projects I&apos;ve built. Each one taught me something
          new about building great software.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
