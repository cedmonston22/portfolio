"use client";

import { motion } from "framer-motion";

interface BuildItem {
  name: string;
  description: string;
  status: "active" | "soon";
  techStack: string[];
}

const items: BuildItem[] = [
  {
    name: "Intake",
    description:
      "AI-powered nutrition and supplement scanner — building out scan history, personalized flagging, and preparing for launch.",
    status: "active",
    techStack: ["React Native", "Supabase", "Gemini AI"],
  },
  {
    name: "Firefly",
    description:
      "Details coming soon.",
    status: "soon",
    techStack: [],
  },
];

export default function CurrentlyBuilding(): React.ReactElement {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20 md:px-8 md:py-32">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 h-[1px] w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
          What&apos;s Next
        </p>
        <h2 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">
          Currently Building
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="mt-10 space-y-4"
      >
        {items.map((item) => (
          <motion.div
            key={item.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.21, 0.47, 0.32, 0.98] as const,
                },
              },
            }}
            className="rounded-xl border border-border-subtle bg-bg-elevated p-5 transition-all hover:border-[rgba(0,0,0,0.14)] hover:bg-bg-surface md:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-semibold text-text-primary">
                    {item.name}
                  </h3>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                      item.status === "active"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-gold/10 text-gold"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        item.status === "active"
                          ? "animate-pulse bg-green-400"
                          : "bg-gold"
                      }`}
                    />
                    {item.status === "active" ? "In Progress" : "Coming Soon"}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-bg-hover px-2.5 py-1 font-mono text-[10px] tracking-wider text-text-muted uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
