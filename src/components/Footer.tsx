import Link from "next/link";
import { profile } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="text-sm text-[var(--fg-muted)]">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js +
          Tailwind. Fully static, fully serverless.
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link
            href="/"
            className="text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
          >
            About
          </Link>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
