import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  alternates: { canonical: "/resume" },
  openGraph: { title: "Resume | Cole Edmonston", url: "/resume" },
  twitter: { title: "Resume | Cole Edmonston" },
};

export default function ResumePage(): React.ReactElement {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-28 pb-20 md:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-text-primary md:text-4xl">Resume</h1>
        <div className="flex gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold md:hidden"
          >
            Open PDF
          </a>
          <a
            href="/resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold"
          >
            Download PDF
          </a>
        </div>
      </div>
      <iframe
        src="/resume.pdf"
        title="Cole Edmonston's resume"
        className="hidden h-[80vh] w-full rounded-lg border border-border-subtle bg-bg-elevated md:block"
      />
    </section>
  );
}
