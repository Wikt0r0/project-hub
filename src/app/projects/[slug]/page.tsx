import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { allProjectSlugs, getProject, projects } from "@/lib/projects";
import { formatDate, statusLabel } from "@/lib/format";
import { ProjectStory } from "@/components/ProjectStory";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to catalog
      </Link>

      <header className="mt-6 flex flex-col gap-5 fade-in">
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--fg-muted)]">
          <time dateTime={project.date}>{formatDate(project.date)}</time>
          {project.status && (
            <>
              <span className="h-1 w-1 rounded-full bg-[var(--fg-muted)]" />
              <span>{statusLabel(project.status)}</span>
            </>
          )}
        </div>
        <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="max-w-3xl text-lg text-[var(--fg-muted)]">
          {project.summary}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1 text-xs font-medium text-[var(--fg-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap items-center gap-3">
            {project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
              >
                {l.label}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </header>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-elev)] fade-in">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-x-16">
        <div className="lg:col-span-2 lg:row-span-2">
          <Section title="Plan">
            <ol className="flex flex-col gap-3 text-[var(--fg)]">
              {project.plan.map((step, i) => (
                <li key={i} className="flex gap-3 prose-body">
                  <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--accent)] text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Section>
        </div>

        <Section title="Goal">
          <p className="prose-body text-[var(--fg)]">{project.goal}</p>
        </Section>

        <Section title="Results">
          <p className="prose-body text-[var(--fg)]">{project.results}</p>
        </Section>
      </div>

      {project.photos.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-[var(--fg-muted)]">
            Story
          </h2>
          <ProjectStory photos={project.photos} />
        </section>
      )}

      <nav className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8">
        <Link
          href="/projects"
          className="text-sm text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
        >
          ← All projects
        </Link>
        {next && next.slug !== project.slug && (
          <Link
            href={`/projects/${next.slug}`}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--fg)]"
          >
            <span className="text-[var(--fg-muted)]">Next</span>
            <span>{next.title}</span>
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
          </Link>
        )}
      </nav>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
        {title}
      </h2>
      {children}
    </section>
  );
}
