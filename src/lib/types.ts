export type Photo = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  cover: Photo;
  tags: string[];
  date: string;
  status?: "in-progress" | "completed" | "archived" | "concept";
  links?: { label: string; url: string }[];
  goal: string;
  plan: string[];
  results: string;
  photos: Photo[];
};

export type Update = {
  id: string;
  date: string;
  title: string;
  body: string;
  photos?: Photo[];
  tags?: string[];
};
