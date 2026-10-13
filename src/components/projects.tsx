"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

export default function Projects(): React.ReactElement {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl overflow-x-clip px-6 pt-28 pb-20 md:px-8 md:pt-36 md:pb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
          Portfolio
        </p>
        <h1 className="mt-2 text-4xl font-bold text-text-primary md:text-5xl">
          Featured Projects
        </h1>
        <p className="mt-3 max-w-lg text-text-secondary">
          A selection of things I&apos;ve built, and the engineering behind
          them.
        </p>
      </motion.div>

      <div className="mt-14 space-y-14 md:space-y-20">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
