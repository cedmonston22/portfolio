import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudyContent from "@/components/case-study-content";
import Footer from "@/components/footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Cole Edmonston`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Cole Edmonston`,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: Props): Promise<React.ReactElement> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-dvh bg-bg-primary">
      {/* Back navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border-subtle bg-bg-primary/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-gold"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 pt-24 pb-20 md:px-8">
        {/* Hero section */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-border-subtle">
          <div className="relative aspect-[16/9]">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODk2IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODk2IiBoZWlnaHQ9IjUwNCIgZmlsbD0iIzE4MTgxZiIvPjwvc3ZnPg=="
              className="object-cover"
            />
          </div>
        </div>

        {/* Demo video */}
        {project.demoVideo && (
          <div className="mb-12">
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-gold uppercase">
              Demo
            </p>
            <div className="overflow-hidden rounded-2xl border border-border-subtle bg-bg-elevated">
              <video
                src={project.demoVideo}
                controls
                playsInline
                preload="metadata"
                className="w-full"
              >
                <track kind="captions" />
              </video>
            </div>
          </div>
        )}

        {/* Title + meta */}
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
            Case Study
          </p>
          <h1 className="mt-3 text-4xl font-bold text-text-primary md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            {project.description}
          </p>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-text-muted">
            <div>
              <span className="text-text-secondary">Role:</span>{" "}
              {project.caseStudy.role}
            </div>
            <div>
              <span className="text-text-secondary">Timeline:</span>{" "}
              {project.caseStudy.timeline}
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-bg-hover px-3 py-1.5 font-mono text-xs tracking-wider text-text-muted uppercase"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          {(project.liveUrl || project.appUrl || project.githubUrl) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-bg-primary transition-all hover:brightness-110"
                >
                  View Live
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              )}
              {project.appUrl && (
                <a
                  href={project.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-5 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-gold/30 hover:text-gold"
                >
                  {project.appUrl.includes("testflight")
                    ? "TestFlight"
                    : "App Store"}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border-subtle px-5 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-gold/30 hover:text-gold"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>

        {/* Case study content — client component for animations */}
        <CaseStudyContent caseStudy={project.caseStudy} />
      </main>
      <Footer />
    </div>
  );
}
