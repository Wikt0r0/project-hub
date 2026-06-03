import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/profile";
import { updates } from "@/lib/updates";
import { projects } from "@/lib/projects";
import { UpdateCard } from "@/components/UpdateCard";
import { formatDate } from "@/lib/format";

export default function HomePage() {
  const sortedUpdates = [...updates].sort((a, b) =>
    a.date < b.date ? 1 : -1,
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <section className="fade-in flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
        <figure className="relative aspect-square w-36 flex-none overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg-elev)] shadow-sm sm:w-44">
          <Image
            src={profile.hero.src}
            alt={profile.hero.alt}
            fill
            priority
            sizes="(min-width: 640px) 176px, 144px"
            className="object-cover object-[28%_28%]"
          />
        </figure>

        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wider text-[var(--fg-muted)]">
            Hi, I&rsquo;m
          </span>
          <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="text-lg text-[var(--fg-muted)]">{profile.tagline}</p>
          {profile.hero.caption && (
            <p className="text-sm italic text-[var(--fg-muted)]">
              {profile.hero.caption}
            </p>
          )}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-6 sm:p-8">
        <p className="prose-body text-[var(--fg)]">{profile.bio}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <span className="text-[var(--fg-muted)]">
            Based in <strong className="text-[var(--fg)]">{profile.location}</strong>
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="text-[var(--accent)] hover:underline"
          >
            {profile.email}
          </a>
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
      </section>

      <section className="mt-10">
        <Link
          href="/projects"
          className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-lg sm:p-8"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-[var(--accent)]">
              Catalog
            </span>
            <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              Browse my projects
            </h2>
            <p className="text-sm text-[var(--fg-muted)]">
              {projects.length} projects with photos, plans, and what I learned
              along the way.
            </p>
          </div>
          <span className="hidden flex-none items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white sm:inline-flex">
            View catalog
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
          <svg
            className="text-[var(--accent)] sm:hidden"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
      </section>

      <section className="mt-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight">
              Updates
            </h2>
            <p className="mt-1 text-sm text-[var(--fg-muted)]">
              Short notes, photos, and things worth remembering.
            </p>
          </div>
          <span className="text-xs uppercase tracking-wider text-[var(--fg-muted)]">
            {sortedUpdates.length} entries
          </span>
        </div>

        <ol className="relative flex flex-col gap-8 border-l border-[var(--border)] pl-6 sm:pl-8">
          {sortedUpdates.map((u) => (
            <li key={u.id} id={u.id} className="relative scroll-mt-24">
              <span
                aria-hidden
                className="absolute -left-[27px] top-7 inline-flex h-3 w-3 rounded-full border-2 border-[var(--bg)] bg-[var(--accent)] sm:-left-[35px]"
              />
              <span className="absolute -left-[80px] top-7 hidden text-xs uppercase tracking-wider text-[var(--fg-muted)] sm:block">
                {formatDate(u.date).split(",")[0]}
              </span>
              <UpdateCard update={u} />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
