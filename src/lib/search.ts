import type { Project, Update } from "./types";

export type SearchDoc =
  | {
      kind: "project";
      slug: string;
      title: string;
      summary: string;
      tags: string[];
      goal: string;
      results: string;
      date: string;
      cover: string;
      coverAlt: string;
    }
  | {
      kind: "update";
      id: string;
      title: string;
      body: string;
      tags: string[];
      date: string;
      photo?: string;
      photoAlt?: string;
    };

export function buildIndex(projects: Project[], updates: Update[]): SearchDoc[] {
  const projectDocs: SearchDoc[] = projects.map((p) => ({
    kind: "project",
    slug: p.slug,
    title: p.title,
    summary: p.summary,
    tags: p.tags,
    goal: p.goal,
    results: p.results,
    date: p.date,
    cover: p.cover.src,
    coverAlt: p.cover.alt,
  }));

  const updateDocs: SearchDoc[] = updates.map((u) => ({
    kind: "update",
    id: u.id,
    title: u.title,
    body: u.body,
    tags: u.tags ?? [],
    date: u.date,
    photo: u.photos?.[0]?.src,
    photoAlt: u.photos?.[0]?.alt,
  }));

  return [...projectDocs, ...updateDocs];
}
