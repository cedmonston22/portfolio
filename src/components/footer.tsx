export default function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-text-muted md:px-8">
        <p className="font-mono text-[10px] tracking-wider uppercase">
          &copy; {new Date().getFullYear()} Cole Edmonston
        </p>
        <a
          href="#hero"
          className="group flex items-center gap-1 font-mono text-[10px] tracking-wider uppercase transition-colors hover:text-gold"
        >
          Back to top
          <svg
            className="h-3 w-3 transition-transform group-hover:-translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
