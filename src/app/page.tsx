import { projects } from "@/lib/projects";
import { updates } from "@/lib/updates";
import { SearchableCatalog } from "@/components/SearchableCatalog";
import { profile } from "@/lib/profile";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <section className="fade-in flex flex-col gap-4">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elev)] px-3 py-1 text-xs uppercase tracking-wider text-[var(--fg-muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          {profile.name}&rsquo;s catalog
        </span>
        <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          My Project <span className="text-[var(--accent)]">HUB</span>
        </h1>
        <p className="max-w-2xl text-lg text-[var(--fg-muted)] sm:text-xl">
          A catalog of every project I&rsquo;ve shipped, the things I&rsquo;m
          tinkering with right now, and short updates from life in between.
        </p>
        <div className="mt-2 flex items-center gap-6 text-sm text-[var(--fg-muted)]">
          <span>
            <strong className="text-[var(--fg)]">{projects.length}</strong>{" "}
            projects
          </span>
          <span className="h-1 w-1 rounded-full bg-[var(--fg-muted)]" />
          <span>
            <strong className="text-[var(--fg)]">{updates.length}</strong>{" "}
            updates
          </span>
        </div>
      </section>

      <div className="mt-12">
        <SearchableCatalog projects={projects} updates={updates} />
      </div>
    </div>
  );
}
