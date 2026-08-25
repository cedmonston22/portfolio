import Link from "next/link";

export default function NotFound(): React.ReactElement {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold text-text-primary md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn-primary mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}
