import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { formatDate, statusLabel } from "@/lib/format";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-lg">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title}`}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
      />

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg)]">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {project.status && (
          <span className="absolute left-3 top-3 z-20 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur">
            {statusLabel(project.status)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-3 text-xs text-[var(--fg-muted)]">
          <span>{formatDate(project.date)}</span>
          <span className="truncate">
            {project.tags.slice(0, 3).join(" · ")}
          </span>
        </div>
        <h3 className="font-serif text-xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--fg-muted)] line-clamp-3">
          {project.summary}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
            View project
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

          {project.links && project.links.length > 0 && (
            <span className="relative z-20 flex items-center gap-1.5">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} — ${l.label}`}
                  className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-[11px] font-medium text-[var(--fg-muted)] transition hover:border-[var(--fg)] hover:text-[var(--fg)]"
                >
                  <LinkIcon label={l.label} />
                  {l.label}
                </a>
              ))}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function LinkIcon({ label }: { label: string }) {
  const lower = label.toLowerCase();
  if (
    lower.includes("source") ||
    lower.includes("github") ||
    lower.includes("repo") ||
    lower.includes("code")
  ) {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5z" />
      </svg>
    );
  }
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}
