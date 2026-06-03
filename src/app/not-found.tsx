import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6">
      <span className="text-xs uppercase tracking-wider text-[var(--fg-muted)]">
        404
      </span>
      <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        Not found
      </h1>
      <p className="text-[var(--fg-muted)]">
        That page is missing from the catalog. It happens.
      </p>
      <Link
        href="/"
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
      >
        Back to Project HUB
      </Link>
    </div>
  );
}
