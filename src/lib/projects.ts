import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "metalmorphosis",
    title: "MetalMorphosis",
    summary:
      "A six-week Green School ISU class on metals: forging, magnetism, electricity, and a final regenerative build — a working metal detector — documented week by week on a static site.",
    cover: {
      src: "/images/projects/metalmorphosis/cover.jpg",
      alt: "Metal-detector prototype on a workshop bench",
    },
    tags: ["School", "Hardware", "HTML/CSS", "Documentation"],
    date: "2025-12-18",
    status: "completed",
    links: [
      { label: "Source", url: "https://github.com/wiktorolborski/MetalMorphosis" },
    ],
    goal:
      "Document an ISU class about metals end-to-end — from theory (force, pressure, density) all the way to the final regenerative build — so the process and reasoning are visible, not just the result.",
    plan: [
      "Week 1 — Force & pressure, mechanical properties, simple machines.",
      "Week 2 — Metals: density, conductivity, magnetism; hands-on element tests.",
      "Weeks 3–4 — Casting, alloys, electricity and electromagnetism.",
      "Weeks 5–6 — Design and build a regenerative metal detector from discarded parts.",
      "Ship a static site with weekly progress, photos, and the final write-up.",
    ],
    results:
      "Working metal detector built from salvaged components, plus a full multi-week site documenting how each piece of theory fed into the build. Held up as a model for how to write up project-based learning at the school.",
    photos: [
      {
        src: "/images/projects/metalmorphosis/diagram.jpg",
        alt: "Diagram of the metal detector circuit",
        caption: "Initial circuit & build diagram.",
      },
      {
        src: "/images/projects/metalmorphosis/w1_1.jpg",
        alt: "Week 1 hands-on activity",
        caption: "Week 1 — testing mechanical properties.",
      },
      {
        src: "/images/projects/metalmorphosis/week2.jpg",
        alt: "Week 2 metal testing",
        caption: "Week 2 — density tests by water displacement.",
      },
      {
        src: "/images/projects/metalmorphosis/week3.jpg",
        alt: "Week 3 workshop",
        caption: "Week 3 — casting & alloys.",
      },
      {
        src: "/images/projects/metalmorphosis/week4.jpg",
        alt: "Week 4 electricity practical",
        caption: "Week 4 — electricity & electromagnetism.",
      },
      {
        src: "/images/projects/metalmorphosis/week5.jpg",
        alt: "Week 5 build progress",
        caption: "Week 5 — assembling the detector.",
      },
      {
        src: "/images/projects/metalmorphosis/week6.jpg",
        alt: "Week 6 finished detector",
        caption: "Week 6 — final regenerative build.",
      },
    ],
  },
  {
    slug: "makerbloom",
    title: "Maker Bloom 3D",
    summary:
      "A clean, fast catalog for my 3D-printed designs — every print gets a page with photos, filament, and notes on what worked and what didn't.",
    cover: {
      src: "/images/projects/makerbloom/cover.png",
      alt: "Maker Bloom 3D hero illustration",
    },
    tags: ["3D Printing", "React", "TypeScript", "Vite"],
    date: "2026-03-20",
    status: "in-progress",
    links: [
      { label: "Source", url: "https://github.com/wiktorolborski/makerbloom" },
    ],
    goal:
      "Stop losing track of which print used which filament, layer height, and tweaks. Make my own catalog so each print has a permanent home and I can link friends to a single design.",
    plan: [
      "React + TypeScript + Vite for a small, fast SPA.",
      "Catalog seeded from a typed data file (no CMS, no DB).",
      "Per-print pages with photos, filament, layer height, and notes.",
      "Featured flag + categories to surface my favorites.",
    ],
    results:
      "Live catalog with the first batch of prints (drawer inserts, lamp mount, knob set). The typed data model made it trivial to add new entries from my phone after a print finishes.",
    photos: [
      {
        src: "/images/projects/makerbloom/logo.png",
        alt: "Maker Bloom 3D logo",
        caption: "Brand mark.",
      },
      {
        src: "/images/projects/makerbloom/cover.png",
        alt: "Hero image",
        caption: "Hero on the landing page.",
      },
    ],
  },
  {
    slug: "quiet-net",
    title: "Quiet Net",
    summary:
      "An awareness site about noise pollution: what causes it, why it's bad for you, and what we can actually do about it.",
    cover: {
      src: "/images/projects/quiet-net/cover.png",
      alt: "Quiet Net logo",
    },
    tags: ["Awareness", "React", "TypeScript", "CRA"],
    date: "2025-09-10",
    status: "completed",
    links: [
      { label: "Source", url: "https://github.com/wiktorolborski/website-poc" },
    ],
    goal:
      "Turn a class research project on noise pollution into something the public could actually read — short, visual, and easy to navigate on a phone.",
    plan: [
      "React + TypeScript scaffold via CRA.",
      "Four content sections: About, Noise Sources, Health Effects, Noise Reduction.",
      "Side menu navigation that works on mobile.",
      "Deploy as a static site to Netlify.",
    ],
    results:
      "Shipped to Netlify and shown in class. The clearest takeaway was how few people knew about non-auditory effects of chronic noise — that page got the most time on it by far.",
    photos: [
      {
        src: "/images/projects/quiet-net/icon.svg",
        alt: "Quiet Net icon",
        caption: "Favicon and identity mark.",
      },
      {
        src: "/images/projects/quiet-net/cover.png",
        alt: "Quiet Net cover",
        caption: "Landing page hero.",
      },
    ],
  },
  {
    slug: "save-the-soil",
    title: "Save The Soil",
    summary:
      "A short, snappy awareness site about soil health — what NPK actually means, why soil is alive, and what you can do to keep it that way.",
    cover: {
      src: "/images/projects/save-the-soil/cover.svg",
      alt: "Save The Soil cover",
    },
    tags: ["Awareness", "React", "Vite", "Tailwind"],
    date: "2026-01-22",
    status: "completed",
    links: [
      { label: "Source", url: "https://github.com/wiktorolborski/save-the-soil" },
    ],
    goal:
      "Make the case for soil health in a few minutes of reading. No giant essays — just punchy sections you can click through.",
    plan: [
      "React + Vite + Tailwind for a fast iteration loop.",
      "Six bite-sized pages: facts, NPK, soil-alive, soil-die, soil-not-dirt, help.",
      "A simple menu page that ties them together.",
      "Bright, uppercase typography to make it feel like a campaign.",
    ],
    results:
      "Live single-page app with six readable sub-pages. The 'soil is not dirt' page became the one I send to people first — it reframes the whole conversation.",
    photos: [
      {
        src: "/images/projects/save-the-soil/01.svg",
        alt: "Landing page",
        caption: "Landing — bold uppercase wordmark.",
      },
      {
        src: "/images/projects/save-the-soil/02.svg",
        alt: "NPK section",
        caption: "NPK explainer.",
      },
      {
        src: "/images/projects/save-the-soil/03.svg",
        alt: "Soil is alive section",
        caption: "Why soil is alive.",
      },
    ],
  },
  {
    slug: "roblox-farm",
    title: "Roblox Farm",
    summary:
      "A farming game for Roblox — Rojo-synced Luau project with a proper toolchain (Selene, StyLua, Wally) instead of editing inside Studio.",
    cover: {
      src: "/images/projects/roblox-farm/cover.svg",
      alt: "Roblox Farm cover",
    },
    tags: ["Game", "Roblox", "Lua", "Tooling"],
    date: "2026-04-18",
    status: "in-progress",
    links: [
      { label: "Source", url: "https://github.com/wiktorolborski/roblox-farm" },
    ],
    goal:
      "Build a Roblox game the way I build any other software — version-controlled, linted, formatted, with dependencies managed in a manifest — not by drag-and-dropping inside Studio.",
    plan: [
      "Foreman to install the dev tools (Rojo, Selene, StyLua) reproducibly.",
      "Rojo to sync source files between VS Code and Roblox Studio.",
      "Wally for package management (when needed).",
      "Start small: a tilled-soil grid, a few crops, and a basic day cycle.",
    ],
    results:
      "Project scaffolded and synced cleanly to Studio. The toolchain alone has made iteration feel night-and-day better than editing in Studio.",
    photos: [
      {
        src: "/images/projects/roblox-farm/01.svg",
        alt: "World layout placeholder",
        caption: "Early world layout sketch.",
      },
      {
        src: "/images/projects/roblox-farm/02.svg",
        alt: "Rojo and Studio integration",
        caption: "Rojo syncing to Roblox Studio.",
      },
    ],
  },
  {
    slug: "tntrest",
    title: "TNT Rest",
    summary:
      "A tiny Express server I keep running locally as a sandbox for static page experiments — fashion trends, creative design, explore pages.",
    cover: {
      src: "/images/projects/tntrest/cover.svg",
      alt: "TNT Rest cover",
    },
    tags: ["Express", "Node.js", "Web", "Sandbox"],
    date: "2025-10-05",
    status: "in-progress",
    links: [
      { label: "Source", url: "https://github.com/wiktorolborski/tntrest" },
    ],
    goal:
      "Have a permanent local URL where I can prototype static pages without spinning up a new repo each time. Boringly reliable, always on.",
    plan: [
      "Express serves /public as static files.",
      "A landing index that links to whatever experiment is current.",
      "Drop new HTML pages into /public to add them — no build step.",
      "Use port 3000 so the URL never changes.",
    ],
    results:
      "Three live experiments right now (Explore, Creative Design, Fashion Trends). It's become my default 'paste any HTML here and look at it' tool.",
    photos: [
      {
        src: "/images/projects/tntrest/01.svg",
        alt: "Explore page",
        caption: "Explore — gradient hero layout test.",
      },
      {
        src: "/images/projects/tntrest/02.svg",
        alt: "Creative design page",
        caption: "Creative design experiment.",
      },
      {
        src: "/images/projects/tntrest/03.svg",
        alt: "Fashion trends page",
        caption: "Fashion trends mock.",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function allProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
