"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type CaseStudy = Project["caseStudy"];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

function Section({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="border-t border-border-subtle pt-8"
    >
      <p className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase">
        {label}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-text-primary">{title}</h2>
      <div className="mt-4">{children}</div>
    </motion.div>
  );
}

export default function CaseStudyContent({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}): React.ReactElement {
  return (
    <div className="space-y-12">
      {/* Problem */}
      <Section label="01" title="The Problem">
        <p className="text-base leading-relaxed text-text-secondary">
          {caseStudy.problem}
        </p>
      </Section>

      {/* Approach */}
      <Section label="02" title="The Approach">
        <p className="text-base leading-relaxed text-text-secondary">
          {caseStudy.approach}
        </p>
      </Section>

      {/* Technical Highlights */}
      <Section label="03" title="Technical Highlights">
        <ul className="space-y-3">
          {caseStudy.technicalHighlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-text-secondary">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span className="text-base leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Results */}
      <Section label="04" title="Results">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {caseStudy.results.map((result) => (
            <div
              key={result}
              className="rounded-xl border border-border-subtle bg-bg-elevated p-4"
            >
              <p className="text-sm leading-relaxed text-text-secondary">
                {result}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
