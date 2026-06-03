// Generates SVG placeholder images for project covers, gallery shots,
// life update photos, and the about-page avatar. Each SVG is deterministic
// per-name so swapping in real photos later is a simple file replacement.

import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "..", "public", "images");

const palettes = [
  ["#ff6f3c", "#ffb88c", "#fde6d3"],
  ["#3c83ff", "#88b8ff", "#dbe7ff"],
  ["#1fa57a", "#74d4b1", "#d3f0e3"],
  ["#a13cff", "#cf94ff", "#ecd9ff"],
  ["#ff3c83", "#ff94b8", "#ffd3e0"],
  ["#ffb800", "#ffd866", "#fff1c2"],
  ["#0ea5b7", "#6dd3df", "#cdeef3"],
  ["#5a4cff", "#9d92ff", "#dcd6ff"],
];

function hashStr(s) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h >>> 0;
}

function rngFromString(seed) {
  let state = hashStr(seed);
  return () => {
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    state >>>= 0;
    return state / 0xffffffff;
  };
}

function buildGradient(seed, w = 1600, h = 1000, label = "") {
  const rng = rngFromString(seed);
  const palette = palettes[Math.floor(rng() * palettes.length)];
  const angle = Math.floor(rng() * 360);
  const shapes = [];
  const count = 4 + Math.floor(rng() * 4);
  for (let i = 0; i < count; i++) {
    const cx = Math.floor(rng() * w);
    const cy = Math.floor(rng() * h);
    const r = Math.floor(120 + rng() * Math.min(w, h) * 0.55);
    const color = palette[Math.floor(rng() * palette.length)];
    const opacity = (0.18 + rng() * 0.4).toFixed(2);
    shapes.push(
      `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="${opacity}" />`,
    );
  }

  const gradId = `g-${hashStr(seed).toString(36)}`;
  const fontSize = Math.floor(w * 0.035);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="${gradId}" gradientTransform="rotate(${angle})">
      <stop offset="0%" stop-color="${palette[0]}" />
      <stop offset="60%" stop-color="${palette[1]}" />
      <stop offset="100%" stop-color="${palette[2]}" />
    </linearGradient>
    <filter id="blur-${gradId}" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="${Math.floor(w * 0.035)}" />
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#${gradId})" />
  <g filter="url(#blur-${gradId})">${shapes.join("")}</g>
  <rect width="100%" height="100%" fill="black" opacity="0.05" />
  ${
    label
      ? `<text x="${Math.floor(w * 0.04)}" y="${h - Math.floor(h * 0.05)}" font-family="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="${fontSize}" font-weight="600" fill="white" opacity="0.75">${label}</text>`
      : ""
  }
</svg>
`;
}

function buildAvatar(seed) {
  const rng = rngFromString(seed);
  const palette = palettes[Math.floor(rng() * palettes.length)];
  const skin = "#f3c79c";
  const hair = palette[0];
  const bg = palette[1];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" role="img" aria-label="avatar">
  <defs>
    <radialGradient id="bg" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="${palette[2]}" />
      <stop offset="100%" stop-color="${bg}" />
    </radialGradient>
  </defs>
  <rect width="200" height="200" fill="url(#bg)" />
  <circle cx="100" cy="155" r="70" fill="${hair}" />
  <circle cx="100" cy="90" r="42" fill="${skin}" />
  <path d="M58 80 Q100 30 142 80 Q142 60 100 50 Q58 60 58 80 Z" fill="${hair}" />
  <circle cx="86" cy="92" r="3" fill="#23252e" />
  <circle cx="114" cy="92" r="3" fill="#23252e" />
  <path d="M88 108 Q100 116 112 108" stroke="#23252e" stroke-width="2.5" fill="none" stroke-linecap="round" />
</svg>
`;
}

function write(relPath, content) {
  const full = join(publicDir, relPath);
  mkdirSync(dirname(full), { recursive: true });
  if (!existsSync(full)) {
    writeFileSync(full, content, "utf8");
    console.log("wrote", relPath);
  } else {
    console.log("skip ", relPath);
  }
}

const items = [
  ["avatar.svg", "avatar", "avatar"],

  // Save The Soil — green/earth theme placeholders
  ["projects/save-the-soil/cover.svg", "save-the-soil-cover", "Save The Soil"],
  ["projects/save-the-soil/01.svg", "save-the-soil-01", "Landing page"],
  ["projects/save-the-soil/02.svg", "save-the-soil-02", "NPK section"],
  ["projects/save-the-soil/03.svg", "save-the-soil-03", "Soil is alive"],

  // Roblox Farm — game placeholders
  ["projects/roblox-farm/cover.svg", "roblox-farm-cover", "Roblox Farm"],
  ["projects/roblox-farm/01.svg", "roblox-farm-01", "World layout"],
  ["projects/roblox-farm/02.svg", "roblox-farm-02", "Rojo + Studio"],

  // TNT Rest — server / showcase placeholders
  ["projects/tntrest/cover.svg", "tntrest-cover", "TNT Rest"],
  ["projects/tntrest/01.svg", "tntrest-01", "Explore page"],
  ["projects/tntrest/02.svg", "tntrest-02", "Creative design page"],
  ["projects/tntrest/03.svg", "tntrest-03", "Fashion trends page"],

  // Updates
  ["updates/2026-05-28/01.svg", "update-meetup", "IoT meetup"],
  ["updates/2026-04-02/01.svg", "update-japan-1", "Torii gate"],
  ["updates/2026-04-02/02.svg", "update-japan-2", "Bowl of ramen"],
  ["updates/2025-12-31/01.svg", "update-bread", "Sourdough loaf"],
];

for (const [path, seed, label] of items) {
  const svg = path.endsWith("avatar.svg")
    ? buildAvatar(seed)
    : buildGradient(seed, 1600, 1000, label);
  write(path, svg);
}

console.log("done");
