"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiDevpost } from "react-icons/si";
import type { Project } from "@/data/projects";

const linkClass =
  "inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-elevated px-3 py-1.5 text-xs font-medium text-text-secondary transition-all hover:border-border-hover hover:text-gold";

const ExternalIcon = (
  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

const AppIcon = (
  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
    />
  </svg>
);

const GitHubIcon = (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function ProjectRow({
  project,
  priority,
}: {
  project: Project;
  priority: boolean;
}): React.ReactElement {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={`border-t border-border-subtle pt-10 ${
        project.image
          ? "grid gap-6 md:grid-cols-[300px_1fr] md:gap-10 lg:grid-cols-[360px_1fr]"
          : ""
      }`}
    >
      {/* Screenshot — omitted entirely when absent, so the row reads as
          intentional rather than as a broken image slot. */}
      {project.image && (
        <div className="surface-card relative aspect-[16/10] overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated md:self-start">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 360px"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2ZjZjhlZSIvPjwvc3ZnPg=="
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="min-w-0">
        <h3 className="text-2xl font-bold tracking-tight text-text-primary">
          {project.title}
        </h3>

        <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-text-muted uppercase">
          {project.meta.join(" · ")}
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex max-w-2xl gap-3 text-sm leading-relaxed text-text-secondary"
            >
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
              />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-bg-hover px-2 py-0.5 font-mono text-[10px] tracking-wider text-text-secondary uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {ExternalIcon}
              Website
            </a>
          )}
          {project.appUrl && (
            <a href={project.appUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {AppIcon}
              {project.appUrl.includes("testflight") ? "TestFlight" : "App Store"}
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {GitHubIcon}
              GitHub
            </a>
          )}
          {project.devpostUrl && (
            <a href={project.devpostUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <SiDevpost className="h-3.5 w-3.5" />
              Devpost
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
