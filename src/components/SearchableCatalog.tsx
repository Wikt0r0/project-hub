"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Fuse from "fuse.js";
import type { Project, Update } from "@/lib/types";
import { ProjectCard } from "./ProjectCard";
import { buildIndex, type SearchDoc } from "@/lib/search";
import { formatDate } from "@/lib/format";

type Props = {
  projects: Project[];
  updates: Update[];
};

const ALL = "All";

export function SearchableCatalog({ projects, updates }: Props) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string>(ALL);
  const inputRef = useRef<HTMLInputElement>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set).sort()];
  }, [projects]);

  const docs = useMemo(() => buildIndex(projects, updates), [projects, updates]);

  const fuse = useMemo(
    () =>
      new Fuse(docs, {
        keys: [
          { name: "title", weight: 0.45 },
          { name: "summary", weight: 0.2 },
          { name: "body", weight: 0.2 },
          { name: "tags", weight: 0.2 },
          { name: "goal", weight: 0.15 },
          { name: "results", weight: 0.1 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
        includeScore: true,
      }),
    [docs],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
      if (e.key === "Escape" && document.activeElement === inputRef.current) {
        setQuery("");
        inputRef.current?.blur();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const trimmed = query.trim();
  const isSearching = trimmed.length > 0;

  const searchHits = useMemo(() => {
    if (!isSearching) return [] as SearchDoc[];
    return fuse.search(trimmed).map((r) => r.item);
  }, [fuse, trimmed, isSearching]);

  const filteredProjects = useMemo(() => {
    if (isSearching) {
      const slugs = new Set(
        searchHits
          .filter((d): d is Extract<SearchDoc, { kind: "project" }> => d.kind === "project")
          .map((d) => d.slug),
      );
      return projects.filter((p) => slugs.has(p.slug));
    }
    if (activeTag === ALL) return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [isSearching, searchHits, projects, activeTag]);

  const filteredUpdates = useMemo(() => {
    if (!isSearching) return [] as Update[];
    const ids = new Set(
      searchHits
        .filter((d): d is Extract<SearchDoc, { kind: "update" }> => d.kind === "update")
        .map((d) => d.id),
    );
    return updates.filter((u) => ids.has(u.id));
  }, [isSearching, searchHits, updates]);

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-3 sm:p-4 shadow-sm">
        <label className="flex items-center gap-3 rounded-xl bg-[var(--bg)] px-4 py-3">
          <SearchIcon />
          <input
            ref={inputRef}
            type="search"
            placeholder="Search projects, tags…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-base outline-none placeholder:text-[var(--fg-muted)]"
            aria-label="Search"
          />
          <kbd className="hidden rounded-md border border-[var(--border)] px-1.5 py-0.5 text-[11px] text-[var(--fg-muted)] sm:inline-block">
            ⌘K
          </kbd>
        </label>

        {!isSearching && allTags.length > 1 && (
          <div className="mt-3 flex flex-wrap gap-2 px-1">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={[
                  "rounded-full border px-3 py-1 text-xs font-medium transition",
                  t === activeTag
                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                    : "border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--fg)] hover:text-[var(--fg)]",
                ].join(" ")}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>

      {isSearching && (
        <p className="text-sm text-[var(--fg-muted)]">
          {filteredProjects.length + filteredUpdates.length} result
          {filteredProjects.length + filteredUpdates.length === 1 ? "" : "s"} for
          <span className="ml-1 text-[var(--fg)]">&ldquo;{trimmed}&rdquo;</span>
        </p>
      )}

      {filteredProjects.length > 0 && (
        <section className="flex flex-col gap-4">
          {isSearching && (
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--fg-muted)]">
              Projects
            </h2>
          )}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}

      {isSearching && filteredUpdates.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--fg-muted)]">
            Life updates
          </h2>
          <ul className="flex flex-col divide-y divide-[var(--border)] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)]">
            {filteredUpdates.map((u) => (
              <li key={u.id}>
                <Link
                  href={`/#${u.id}`}
                  className="flex items-start gap-4 p-4 transition hover:bg-[var(--bg)]"
                >
                  {u.photos?.[0] ? (
                    <div className="relative h-16 w-16 flex-none overflow-hidden rounded-lg bg-[var(--bg)]">
                      <Image
                        src={u.photos[0].src}
                        alt={u.photos[0].alt}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-16 w-16 flex-none items-center justify-center rounded-lg bg-[var(--bg)] text-[var(--fg-muted)]">
                      <NoteIcon />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="text-xs uppercase tracking-wider text-[var(--fg-muted)]">
                      {formatDate(u.date)}
                    </div>
                    <div className="mt-0.5 font-medium">{u.title}</div>
                    <p className="mt-1 line-clamp-2 text-sm text-[var(--fg-muted)]">
                      {u.body}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {isSearching &&
        filteredProjects.length === 0 &&
        filteredUpdates.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--bg-elev)] p-10 text-center text-[var(--fg-muted)]">
            No matches. Try a different keyword.
          </div>
        )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[var(--fg-muted)]"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

function NoteIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h12l4 4v12H4z" />
      <path d="M16 4v4h4M8 13h8M8 17h6" />
    </svg>
  );
}
