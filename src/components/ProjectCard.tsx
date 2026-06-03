import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { formatDate, statusLabel } from "@/lib/format";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg)]">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {project.status && (
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur">
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
        <div className="mt-auto flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
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
        </div>
      </div>
    </Link>
  );
}
