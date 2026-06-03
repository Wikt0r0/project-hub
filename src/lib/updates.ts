import type { Update } from "./types";

export const updates: Update[] = [
  {
    id: "2026-05-28-conference",
    date: "2026-05-28",
    title: "Spoke at a local IoT meetup",
    body:
      "Walked through the Smart Garden build at a small meetup downtown. About 40 people showed up, and a surprising number wanted to talk about waterproofing connectors over snacks.",
    tags: ["talks", "iot"],
    photos: [
      {
        src: "/images/updates/2026-05-28/01.svg",
        alt: "Slide on a projector at a meetup",
        caption: "Title slide warming up the projector.",
      },
    ],
  },
  {
    id: "2026-04-02-trip-japan",
    date: "2026-04-02",
    title: "Two weeks in Japan",
    body:
      "Tokyo → Hakone → Kyoto → Osaka. Highlights: a tiny coffee shop in Yanaka, the cedar forests around Hakone, and getting lost in Nishiki market for two hours.",
    tags: ["travel"],
    photos: [
      {
        src: "/images/updates/2026-04-02/01.svg",
        alt: "Torii gate in a forest",
      },
      {
        src: "/images/updates/2026-04-02/02.svg",
        alt: "Bowl of ramen on a wooden counter",
      },
    ],
  },
  {
    id: "2026-02-14-side-project",
    date: "2026-02-14",
    title: "Trip Mosaic shipped to friends",
    body:
      "Quiet launch of Trip Mosaic to a handful of friends. Three of them already used it for their own albums, which is exactly the validation I was hoping for.",
    tags: ["projects"],
  },
  {
    id: "2025-12-31-year-in-review",
    date: "2025-12-31",
    title: "Year in review",
    body:
      "Shipped four projects, visited six countries, and finally learned to make sourdough that doesn't disappoint. Onwards.",
    tags: ["life"],
    photos: [
      {
        src: "/images/updates/2025-12-31/01.svg",
        alt: "Loaf of sourdough bread on a wooden board",
        caption: "Loaf #47 — the first one I was actually proud of.",
      },
    ],
  },
];
