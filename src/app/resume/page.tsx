import type { Metadata } from "next";
import FacetCard from "@/components/facet-card";

export const metadata: Metadata = {
  title: "Resume",
  alternates: { canonical: "/resume" },
  openGraph: { title: "Resume | Cole Edmonston", url: "/resume" },
  twitter: { title: "Resume | Cole Edmonston" },
};

const buttonBase =
  "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-colors";

const DownloadIcon = (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

const OpenIcon = (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

function ResumeActions(): React.ReactElement {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`btn-secondary ${buttonBase}`}
      >
        {OpenIcon}
        Open in new tab
      </a>
      <a href="/resume.pdf" download className={`btn-primary ${buttonBase}`}>
        {DownloadIcon}
        Download PDF
      </a>
    </div>
  );
}

export default function ResumePage(): React.ReactElement {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-28 pb-20 md:px-8 md:pt-36">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">Resume</p>
          <h1 className="mt-2 text-4xl font-bold text-text-primary md:text-5xl">Cole Edmonston</h1>
        </div>
        <div className="hidden md:block">
          <ResumeActions />
        </div>
      </div>

      <FacetCard
        className="hidden [--facet-cut:24px] [--facet-offset:10px] md:block"
        contentClassName="p-3"
      >
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0&view=FitH"
          title="Cole Edmonston's resume"
          className="facet-clip block h-[85vh] w-full bg-white [--facet-cut:16px]"
        />
      </FacetCard>

      <FacetCard className="md:hidden" contentClassName="p-6">
        <p className="text-base leading-relaxed text-text-secondary">
          Open the PDF to read it full screen, or download a copy.
        </p>
        <div className="mt-5">
          <ResumeActions />
        </div>
      </FacetCard>
    </section>
  );
}
