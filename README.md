# My Project HUB

A personal catalog for every project you ship, with a built-in "About me" section
for short life updates with photos. Static, serverless, and easy to host
anywhere — Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3, or your own
static host.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and
**Tailwind CSS v4**. Fuzzy search powered by [Fuse.js](https://fusejs.io).

## Features

- Searchable project catalog (titles, summaries, goals, tags, life updates)
- Project pages with cover, goal / plan / results sections and a photo gallery
  with lightbox + keyboard nav
- "About me" page with a vertical timeline of short updates and photos
- Light / dark mode with system preference fallback
- Fully responsive (mobile-first), accessible, and fast
- 100% static export — no servers, no database, no API keys

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build the static site for deployment:

```bash
npm run build
```

The output lands in `out/` and can be deployed to any static host.

## Adding your own content

Everything lives in plain TypeScript files, so adding content is just editing a
file — no CMS, no database, no auth.

### Add a project

Edit `src/lib/projects.ts` and add a new entry to the `projects` array:

```ts
{
  slug: "my-new-project",
  title: "My New Project",
  summary: "One-sentence pitch.",
  cover: { src: "/images/projects/my-new-project/cover.jpg", alt: "Cover" },
  tags: ["TypeScript", "Hardware"],
  date: "2026-06-01",
  status: "in-progress",
  links: [{ label: "Source", url: "https://github.com/..." }],
  goal: "What I'm trying to achieve and why.",
  plan: ["Step 1", "Step 2", "Step 3"],
  results: "What actually happened.",
  photos: [
    { src: "/images/projects/my-new-project/01.jpg", alt: "Photo 1", caption: "Caption" },
    { src: "/images/projects/my-new-project/02.jpg", alt: "Photo 2" },
  ],
},
```

Drop the matching images into `public/images/projects/my-new-project/`.

### Add a life update

Edit `src/lib/updates.ts`:

```ts
{
  id: "2026-06-10-something",
  date: "2026-06-10",
  title: "Something happened",
  body: "A short paragraph about it.",
  tags: ["life"],
  photos: [{ src: "/images/updates/2026-06-10/01.jpg", alt: "A photo" }],
},
```

### Update your profile

Edit `src/lib/profile.ts` (name, tagline, bio, email, social links, avatar).

### Replace placeholder images

The site ships with generated SVG placeholders so it looks good out of the box.
Just overwrite the files in `public/images/` with your real photos (keep the
same filenames, or update the paths in the data files).

## Deploying

### Vercel / Netlify / Cloudflare Pages

Push to GitHub, connect the repo, and they auto-detect Next.js. No configuration
needed.

### GitHub Pages, S3, any static host

Run `npm run build` and serve the `out/` directory. The site is fully static.

## Project structure

```
src/
  app/
    layout.tsx                # site shell, theme bootstrap, fonts
    page.tsx                  # home: hero + search + project grid
    about/page.tsx            # about + life updates timeline
    projects/[slug]/page.tsx  # project detail page
    not-found.tsx             # 404
  components/
    Header.tsx, Footer.tsx, NavLink.tsx
    ThemeToggle.tsx, ThemeScript.tsx
    ProjectCard.tsx, ProjectGallery.tsx
    UpdateCard.tsx
    SearchableCatalog.tsx     # client-side fuzzy search
  lib/
    types.ts                  # Project / Update / Photo types
    projects.ts               # your projects (edit this)
    updates.ts                # your life updates (edit this)
    profile.ts                # your profile (edit this)
    search.ts, format.ts
public/images/                # all photos & placeholders
scripts/generate-placeholders.mjs  # regenerate SVG placeholders
```

## Keyboard shortcuts

- `⌘ / Ctrl + K` — focus the search bar
- `Esc` — clear search / close gallery lightbox
- `← / →` — navigate photos in the lightbox
