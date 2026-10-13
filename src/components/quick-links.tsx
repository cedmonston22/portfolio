import Link from "next/link";
import FacetCard from "./facet-card";

const LINKS = [
  { href: "/#experience", title: "Experience", blurb: "Where I've worked and what I know" },
  { href: "/projects", title: "Projects", blurb: "Things I've built and shipped" },
  { href: "/resume", title: "Resume", blurb: "Everything on one page" },
];

export default function QuickLinks(): React.ReactElement {
  return (
    <nav aria-label="Explore" className="grid gap-6 sm:grid-cols-3">
      {LINKS.map((link) => (
        <FacetCard key={link.href} isInteractive className="[--facet-cut:14px] [--facet-offset:6px]">
          <Link href={link.href} className="group flex h-full flex-col gap-1 px-5 py-4 outline-none">
            <span className="flex items-center justify-between text-base font-semibold text-text-primary transition-colors group-hover:text-gold group-focus-visible:text-gold group-focus-visible:underline">
              {link.title}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
            <span className="text-sm text-text-muted">{link.blurb}</span>
          </Link>
        </FacetCard>
      ))}
    </nav>
  );
}
