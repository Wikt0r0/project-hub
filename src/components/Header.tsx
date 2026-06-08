import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { NavLink } from "./NavLink";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--bg)_72%,transparent)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-base font-semibold tracking-tight"
        >
          <span
            aria-hidden
            className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--accent)] text-white shadow-sm transition group-hover:rotate-6"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7h16M4 12h10M4 17h16" />
            </svg>
          </span>
          <span>
            My Project <span className="text-[var(--accent)]">HUB</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <NavLink href="/">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
