import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "smart-garden",
    title: "Smart Garden Monitor",
    summary:
      "An ESP32-powered greenhouse monitor that tracks soil moisture, light, and temperature and pings me on Telegram when my plants need help.",
    cover: {
      src: "/images/projects/smart-garden/cover.svg",
      alt: "A small greenhouse with sensors inside",
    },
    tags: ["IoT", "ESP32", "Python", "Hardware"],
    date: "2026-04-12",
    status: "completed",
    links: [
      { label: "Source code", url: "https://github.com" },
      { label: "Write-up", url: "https://example.com" },
    ],
    goal:
      "Keep my balcony herbs alive while traveling by getting a single notification when something is off — not a dashboard I'd never look at.",
    plan: [
      "Pick low-power sensors that survive humidity (capacitive soil, BME280, BH1750).",
      "Wire everything to an ESP32 and stream readings to a tiny FastAPI service.",
      "Run rolling averages and only alert when a threshold is breached for >30 minutes.",
      "Ship daily summaries to Telegram instead of yet another mobile app.",
    ],
    results:
      "Six months in, zero dead plants and roughly two alerts per week. The biggest surprise was how much the morning-vs-evening light delta mattered — I moved the basil and it doubled in size.",
    photos: [
      {
        src: "/images/projects/smart-garden/01.svg",
        alt: "Sensors wired to a breadboard",
        caption: "First prototype on the kitchen table.",
      },
      {
        src: "/images/projects/smart-garden/02.svg",
        alt: "Greenhouse with sensors installed",
        caption: "Installed in the balcony greenhouse.",
      },
      {
        src: "/images/projects/smart-garden/03.svg",
        alt: "Telegram alert on a phone",
        caption: "The only UI I actually use.",
      },
    ],
  },
  {
    slug: "trip-mosaic",
    title: "Trip Mosaic",
    summary:
      "A static site generator that turns a folder of holiday photos and a tiny YAML file into a fast, beautiful travel diary.",
    cover: {
      src: "/images/projects/trip-mosaic/cover.svg",
      alt: "Collage of travel photos",
    },
    tags: ["Static site", "TypeScript", "Photography"],
    date: "2026-02-03",
    status: "in-progress",
    goal:
      "Stop losing my travel memories in camera-roll archives. Make publishing a trip feel like drag-and-drop, not deployment.",
    plan: [
      "Define a minimal trip.yaml schema (title, days, captions).",
      "Auto-generate masonry layouts from EXIF orientation + dominant color.",
      "Ship as a CLI that outputs a static site I can host anywhere.",
      "Optional map view that traces the route from photo GPS metadata.",
    ],
    results:
      "Currently published three trips with it. The EXIF-driven dominant color sorting accidentally became my favorite feature — albums feel curated even when they're not.",
    photos: [
      {
        src: "/images/projects/trip-mosaic/01.svg",
        alt: "Map showing a trip route",
        caption: "Auto-generated route map from photo GPS.",
      },
      {
        src: "/images/projects/trip-mosaic/02.svg",
        alt: "Masonry photo grid",
        caption: "Masonry grid sorted by dominant color.",
      },
    ],
  },
  {
    slug: "focus-timer",
    title: "Focus Timer for Deep Work",
    summary:
      "A menu-bar Pomodoro that hides notifications, dims my second monitor, and journals what I worked on — no cloud, no account.",
    cover: {
      src: "/images/projects/focus-timer/cover.svg",
      alt: "Menu bar timer screenshot",
    },
    tags: ["macOS", "Swift", "Productivity"],
    date: "2025-11-19",
    status: "completed",
    links: [{ label: "Download", url: "https://example.com" }],
    goal:
      "Replace a Pomodoro app that kept growing features I didn't want. I just need 25 minutes of quiet and a one-line journal at the end.",
    plan: [
      "Native SwiftUI menu-bar app — no Electron.",
      "Hook into macOS Focus modes instead of building yet another DND system.",
      "Append a one-line note to a plain markdown file at the end of each session.",
    ],
    results:
      "Down to a 1.4 MB app that I open every morning. The markdown log turned into a surprisingly nice weekly reflection ritual.",
    photos: [
      {
        src: "/images/projects/focus-timer/01.svg",
        alt: "Menu bar showing the timer",
        caption: "Lives in the menu bar, out of the way.",
      },
      {
        src: "/images/projects/focus-timer/02.svg",
        alt: "Markdown journal entries",
        caption: "Daily log appended to a single .md file.",
      },
    ],
  },
  {
    slug: "color-of-the-day",
    title: "Color of the Day",
    summary:
      "A daily generative artwork derived from weather, sunrise time, and a seeded noise field — printed and pinned to my wall.",
    cover: {
      src: "/images/projects/color-of-the-day/cover.svg",
      alt: "Generative gradient artwork",
    },
    tags: ["Generative", "Art", "Canvas"],
    date: "2025-08-07",
    status: "in-progress",
    goal:
      "Have a daily creative ritual that doesn't depend on inspiration — just inputs from the world plus a deterministic algorithm.",
    plan: [
      "Pull weather + sunrise time at 6am each day.",
      "Seed a noise field and render a 2000×2000 gradient on canvas.",
      "Auto-post the result to a private feed and pick the best ones for print.",
    ],
    results:
      "About 200 pieces so far. Twelve are on my wall. Rainy mornings always make the best gradients, which I did not expect.",
    photos: [
      {
        src: "/images/projects/color-of-the-day/01.svg",
        alt: "Wall covered in printed gradients",
        caption: "Wall of favorites, printed at home.",
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
