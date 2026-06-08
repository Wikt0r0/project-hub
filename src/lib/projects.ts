import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "metalmorphosis",
    title: "MetalMorphosis",
    summary:
      "A Green School ISU class on how metals can be shaped, combined, and transformed — six weeks of theory and hands-on practicals, ending in a regenerative build: a working metal detector made from recycled parts.",
    cover: {
      src: "/images/projects/metalmorphosis/cover.jpg",
      alt: "Metal-detector prototype on a workshop bench",
    },
    tags: ["School", "Hardware", "HTML/CSS", "Documentation"],
    date: "2025-12-18",
    status: "completed",
    links: [
      { label: "Source", url: "https://github.com/Wikt0r0/MetalMorphosis" },
    ],
    goal:
      "How can understanding the science and mathematics of metals help us transform discarded materials into new, regenerative creations for our community?",
    plan: [
      "Week 1 — Force & Pressure, Mechanical Properties, Simple Machines (theory + worksheet, then testing strength, hardness, elasticity, toughness, brittleness, malleability, ductility).",
      "Week 2 — Intro to metals: properties (strength, density, conductivity, magnetism), atoms & elements (Fe, Cu, Zn, Sn, Al), density tests by weighing & water displacement.",
      "Week 3 — Exploring metals at stations: weighing, strength tests, conductivity, magnetism, heat expansion of rod/wire, mini soldering, and ice-to-water heating curves.",
      "Week 4 — Alloys theory: Bronze (Cu+Sn) vs Brass (Cu+Zn) compared by hardness; a fancy experiment involving waste and energy; simple metal soldering.",
      "Week 5 — Welding: safety briefing, teacher demo of arc/spot welding, student practice on scrap, comparing welding vs soldering strength.",
      "Week 6 — Regenerative principles & circular economy: dismantle an old metal item for reusable parts, then Big Maker Day — design and weld scrap metal into a useful object for the community.",
    ],
    results:
      "Final regenerative build: a working metal detector. Components: Arduino UNO microcontroller, a sensing coil of 18 turns at Ø11cm made from Ø1mm copper wire recycled from a broken water filter, a 100nF capacitor for the LC oscillator, 2× 220Ω current-limiting resistors, an LED indicator, a signal-rectifying diode, and a breadboard with jumper wires.",
    photos: [
      {
        src: "/images/projects/metalmorphosis/diagram.jpg",
        alt: "Circuit diagram for the metal detector",
        caption: "Circuit diagram — the metal detector",
        description:
          "The full schematic for the regenerative build. Arduino UNO drives an LC oscillator: a 100nF capacitor in parallel with a hand-wound sensing coil of 18 turns at Ø11cm, using Ø1mm copper wire recycled from a broken water filter. Two 220Ω resistors limit current, a diode rectifies the signal, and an LED gives a visual indicator when metal is detected.",
      },
      {
        src: "/images/projects/metalmorphosis/w1_1.jpg",
        alt: "Week 1 — testing mechanical properties",
        caption: "Week 1 — Force, Pressure & Simple Machines",
        description:
          "Introduction to force and pressure, mechanical properties, and simple machines — theory and worksheets, then hands-on activities testing strength, hardness, elasticity, toughness, brittleness, malleability, and ductility. Built and tested levers, pulleys, inclined planes and wedges, then wrapped up with a quiz, reflection and discussion.",
      },
      {
        src: "/images/projects/metalmorphosis/week2.jpg",
        alt: "Week 2 — density tests by water displacement",
        caption: "Week 2 — Intro to metals",
        description:
          "Properties of metals: strength, density, conductivity, magnetism. Atoms and elements — Fe, Cu, Zn, Sn, Al. Mini practical: testing density by weighing samples and using water displacement with a borrowed measuring cylinder. Finished the week with a scavenger hunt for metals around the school and community, and a reflection on usefulness.",
      },
      {
        src: "/images/projects/metalmorphosis/week3.jpg",
        alt: "Week 3 — exploring metals at stations",
        caption: "Week 3 — Exploring metals",
        description:
          "Measuring boiling and melting points of several metals. Station-based exploration with magnets, multimeters and a solder kit: weighing, strength tests, conductivity checks, magnetism tests, a heat demo with thermal expansion of a rod, and a mini soldering activity. Then graphing temperature vs. time, plotting phase change points with an ice-to-water heating curve. Closed with a case study on the historical uses of metals — tools, coins, art — and a sketch of a community-use alloy object.",
      },
      {
        src: "/images/projects/metalmorphosis/week4.jpg",
        alt: "Week 4 — alloys and soldering",
        caption: "Week 4 — Alloys",
        description:
          "Theory of alloys: why we mix metals. Bronze (Cu+Sn) and Brass (Cu+Zn) compared with pure copper visually and by hardness. A fancy experiment involving waste and energy, a simple metal soldering activity, and another design pass on the community-use alloy object using historical references.",
      },
      {
        src: "/images/projects/metalmorphosis/week5.jpg",
        alt: "Week 5 — welding practice",
        caption: "Week 5 — Welding",
        description:
          "Mini practical: metal welding. Safety briefing first, then a teacher demo of arc and spot welding, then student practice — laying simple beads and lines on scrap. Compared welding vs soldering strength. The rest of the week ran as individual and group project time.",
      },
      {
        src: "/images/projects/metalmorphosis/week6.jpg",
        alt: "Week 6 — Big Maker Day",
        caption: "Week 6 — Regenerative principles & Big Maker Day",
        description:
          "Circular economy and recycling. Mini practical: safe dismantling of an old metal item to identify reusable parts. Then Big Maker Day — welding in action: a group project to design and weld scrap metal into a useful object (tool, art, or school-use item), applying every cutting, bending and welding skill from the term. Documented with sketches and photos, finished with polished weld joints, graphs, results, reflection sheets and a final showcase board.",
      },
    ],
  },
  {
    slug: "quiet-net",
    title: "Quiet Net",
    summary:
      "An awareness site about noise pollution: what causes it, why it's bad for you, and what we can actually do about it. Made when I was 11 for my grade 5 Green School footprints project.",
    cover: {
      src: "/images/projects/quiet-net/cover.png",
      alt: "Quiet Net brand mark",
    },
    tags: ["Awareness", "React", "TypeScript", "CRA"],
    date: "2025-09-10",
    status: "completed",
    links: [
      { label: "Source", url: "https://github.com/Quiet-Net/website-poc" },
    ],
    goal:
      "I got inspired because there was a lot of noise around my house, so I thought I needed to do something about it. That's why I made Quiet Net.",
    plan: [
      "About Quiet Net — short intro from the creator and the tools used to build it (React, HTML/CSS, GitHub, Netlify, Cursor, ChatGPT).",
      "What Makes Noise Pollution — main sources of noise with decibel levels: traffic, air traffic, construction, catering and nightlife, animals.",
      "Why Is It Bad For You — tabbed sections covering physical health, mental health, psychological effects, sleep, productivity, animals and environmental effects.",
      "How to Reduce Noise Pollution — strategies for traffic management, machinery control, urban planning, regulations, and personal responsibility; then concrete actions for home, community, transportation, and work.",
    ],
    results:
      "Shipped as a React + TypeScript site deployed via Netlify. The strongest sections turned out to be the less-obvious ones — psychological effects, sleep disruption, and the WHO estimate that environmental noise costs Europe alone roughly $30.8 billion a year in lost productivity, healthcare and impaired learning.",
    photos: [
      {
        src: "/images/projects/quiet-net/icon.svg",
        alt: "Quiet Net favicon",
        caption: "About Quiet Net",
        description:
          "Hi, I'm Quiet — creator of Quiet Net. I got inspired because there was a lot of noise around my house, so I thought I needed to do something about it. I was 11 years old when I made it. It was for my footprints in grade 5 Green School. I hope you like this. Built with React, HTML/CSS, GitHub, Netlify, Cursor and ChatGPT.",
      },
      {
        src: "/images/projects/quiet-net/cover.png",
        alt: "Quiet Net logo",
        caption: "Why is noise pollution bad for you?",
        description:
          "Chronic exposure to urban noise harms not just hearing but the cardiovascular, gastrointestinal and nervous systems, and causes serious psychological distress. EU studies estimate around 25% of the population suffers a deterioration in quality of life from noise annoyance, and 5–15% suffer sleep disorders. Noise-induced hearing loss is irreversible. Loud workplaces drive up blood pressure, mistakes, accidents and burnout — the WHO put the cost to Europe at $30.8 billion a year.",
      },
    ],
  },
  {
    slug: "save-the-soil",
    title: "Save The Soil",
    summary:
      "A short, snappy awareness site about soil health — what NPK actually means, why soil is alive, what kills it, and what you can do to help save it.",
    cover: {
      src: "/images/projects/save-the-soil/landing.jpg",
      alt: "Save The Soil landing page — bold uppercase wordmark on a soft green background scattered with trees and leaves",
    },
    tags: ["Awareness", "React", "Vite", "Tailwind"],
    date: "2026-01-22",
    status: "completed",
    links: [
      { label: "Source", url: "https://github.com/Wikt0r0/save-the-soil" },
    ],
    goal:
      "Make the case for soil health in a few minutes of reading. No giant essays — just bold, uppercase, campaign-style sections you can click through from a menu.",
    plan: [
      "Soil Facts — soil as a complex living ecosystem, slow to form, vulnerable to degradation, and central to water, climate and food.",
      "What is NPK in Soil — the three primary macronutrients (Nitrogen, Phosphorus, Potassium), what each does, and how fertilizer ratios work.",
      "Soil is Alive — microbial life, larger organisms, mycorrhizal networks, and the underground 'internet' of forests.",
      "Soil Can Die — causes (chemical pollution, over-tilling, monoculture, deforestation, urbanization), signs of dying soil, the global crisis, and historical examples like the 1930s Dust Bowl.",
      "Soil ≠ Dirt — the difference between living soil and lifeless dirt, and why the distinction matters.",
      "How You Can Help Save Soil — practical actions for your garden, home, community and consumer choices.",
    ],
    results:
      "Live React + Vite + Tailwind SPA with six bite-sized sections behind a single menu. The two pages that travel best when shared are 'Soil is Alive' (one teaspoon of healthy soil contains more living organisms than there are people on Earth) and 'Soil ≠ Dirt' (dirt is just soil that's in the wrong place — cut off from its ecosystem, it stops being a productive member of society).",
    photos: [
      {
        src: "/images/projects/save-the-soil/landing.jpg",
        alt: "Save The Soil landing page screenshot",
        caption: "The landing page",
        description:
          "Bold, uppercase wordmark on a soft green background scattered with trees and leaves. One single MENU button below it — every other page lives behind that one click. The campaign feel is intentional: no header, no nav, no clutter, just the message and a way in.",
      },
      {
        src: "/images/projects/save-the-soil/cover.svg",
        alt: "Soil is alive — chapter cover",
        caption: "Soil is alive and biodiverse",
        description:
          "Soil is teeming with bacteria, fungi and other organisms that form a complex microbiome. A single tablespoon of healthy soil can contain more living organisms than there are people on Earth. About a quarter of all known species on the planet live in the soil, and soil microorganisms are a source for many antibiotics, like penicillin.",
      },
      {
        src: "/images/projects/save-the-soil/01.svg",
        alt: "NPK — chapter cover",
        caption: "What is NPK in soil?",
        description:
          "NPK is the three primary macronutrients plants need most: Nitrogen (leafy growth, the green color of chlorophyll, proteins), Phosphorus (roots, energy transfer, the backbone of DNA and ATP), and Potassium (disease resistance, water regulation, enzyme activation). The three numbers on a fertilizer bag — 10-10-10, 20-10-10, 5-10-10 — are the percentage of each by weight.",
      },
      {
        src: "/images/projects/save-the-soil/02.svg",
        alt: "Soil ≠ Dirt — chapter cover",
        caption: "Soil ≠ Dirt",
        description:
          "Soil is a living, structured, functional ecosystem — it takes centuries to form and is irreplaceable on a human timescale. Dirt is what's left when that life is gone: lifeless, nutrient-poor, compacted material that can't support healthy plants. There is admittedly no substantive difference between the two — dirt is just soil that's in the wrong place. But cut off from its ecosystem, dirt is no longer a productive member of society — it's a nuisance to be swept away.",
      },
      {
        src: "/images/projects/save-the-soil/03.svg",
        alt: "Soil can die — chapter cover",
        caption: "Soil can die",
        description:
          "Soil dies from chemical pollution, over-tilling, monoculture farming, deforestation and urbanization. The most infamous example is the American Dust Bowl of the 1930s: years of deep ploughing and replacing deep-rooted prairie grasses with cash crops killed the living networks that held the soil in place. When droughts hit, winds lifted away more than 75% of the topsoil across the Great Plains in choking 'black blizzards' — degrading 100 million acres and displacing half a million people. Around one-third of the world's soils are degraded today.",
      },
    ],
  },
  {
    slug: "makerbloom",
    title: "Maker Bloom 3D",
    summary:
      "Maker bloom 3D — pieces shaped for desks, drawers, and daily use. A running catalog of printable objects, with materials, layer heights, and notes sitting next to each design.",
    cover: {
      src: "/images/projects/makerbloom/cover.png",
      alt: "Maker Bloom 3D hero illustration",
    },
    tags: ["3D Printing", "React", "TypeScript", "Vite"],
    date: "2026-03-20",
    status: "in-progress",
    links: [
      { label: "Source", url: "https://github.com/Wikt0r0/makerbloom" },
    ],
    goal:
      "Make a catalog of printable objects where the buyer sees exactly what they're getting — material, layer height, and notes sit right next to every design.",
    plan: [
      "Home page — hero, tagline ('Pieces shaped for desks, drawers, and daily use'), and a featured-prints grid.",
      "Catalog page — every print listed, with a filament filter pill bar (All, PLA, PETG, …).",
      "Per-print data — typed data file (no CMS) with id, slug, title, description, filament, layer height, and a 'featured' flag.",
      "Stack — React + TypeScript + Vite + React Router; ready to hook up to a CMS when static entries become a chore.",
    ],
    results:
      "First batch of prints already in the catalog: modular drawer inserts sized for IKEA Alex (PLA, 0.2mm), an articulated desk lamp mount with friction-fit joints and cable relief (PETG, 0.16mm), a knurled-grip custom knob set with print-in-place washers (PLA, 0.12mm), a two-piece fold-flat phone stand (PLA, 0.2mm), and a ribbed planter drip tray (PETG, 0.24mm).",
    photos: [
      {
        src: "/images/projects/makerbloom/cover.png",
        alt: "Maker Bloom 3D hero",
        caption: "Pieces shaped for desks, drawers, and daily use",
        description:
          "The landing hero. A running catalog of printable objects — materials, layer heights, and notes sit next to each design so buyers know what they are getting. One big 'Browse the catalog' CTA, then a featured-prints grid right below it.",
      },
      {
        src: "/images/projects/makerbloom/logo.png",
        alt: "Maker Bloom 3D logo",
        caption: "Maker bloom 3D — the brand mark",
        description:
          "The logo and identity. The site itself is React + TypeScript + Vite with React Router — small, fast, and designed so adding a new print is just a new entry in a typed data file: id, slug, title, description, filament, layer height, and an optional featured flag.",
      },
    ],
  },
  {
    slug: "tntrest",
    title: "intrest (TNT Rest)",
    summary:
      "intrest — a Pinterest-style idea board. 'Get your next ideas' — pages of creative design, fashion, recipes, travel, home decor and more, served from a tiny Express app.",
    cover: {
      src: "/images/projects/tntrest/cover.svg",
      alt: "intrest landing cover",
    },
    tags: ["Express", "Node.js", "HTML/CSS", "Ideas"],
    date: "2025-10-05",
    status: "in-progress",
    links: [
      { label: "Source", url: "https://github.com/wiktorolborski/tntrest" },
    ],
    goal:
      "Build an idea-board site — Pinterest-style — where every page is a themed grid of inspiration tiles I can scroll through when I want to start something new.",
    plan: [
      "Index — landing with the 'intrest' brand mark and the tagline 'Get your next ideas'.",
      "Explore Ideas — a category grid linking to Creative Design, Home Decor, Recipes, Fashion Trends, Travel Destinations, Creative Projects, Nature & Outdoors, Photography Ideas, Music & Art, and more.",
      "Themed pages — each category opens into its own page with a dozen idea tiles.",
      "Server — a tiny Express app serving the /public directory; drop a new HTML page in to add a category, no build step.",
    ],
    results:
      "Three full themed pages live alongside the index and the explore hub: Creative Design Ideas, Fashion Trends, and the Explore hub itself. Each idea tile has its own short blurb, which makes the site usable even when the images haven't been picked yet.",
    photos: [
      {
        src: "/images/projects/tntrest/cover.svg",
        alt: "intrest landing",
        caption: "intrest — Get your next ideas",
        description:
          "The landing page: a single 'intrest' brand mark with the line 'Get your next ideas' underneath. From here, one click into Explore opens the hub of category tiles.",
      },
      {
        src: "/images/projects/tntrest/01.svg",
        alt: "Explore Ideas",
        caption: "Explore Ideas",
        description:
          "The hub. Tiles for Creative Design Ideas, Home Decor Inspiration, Delicious Recipes, Fashion Trends, Travel Destinations, Creative Projects, Nature & Outdoors, Photography Ideas, Music & Art, and more. Each tile is its own gradient — when an image isn't picked yet, an emoji stands in.",
      },
      {
        src: "/images/projects/tntrest/02.svg",
        alt: "Creative Design Ideas",
        caption: "Creative Design Ideas",
        description:
          "Twelve creative-design tiles: Color Palette Inspiration, Minimalist Design Concepts, Abstract Art Designs, Geometric Patterns, Creative Typography, Logo Design Ideas, Poster Design Concepts, Brand Identity Ideas, UI Design Inspiration, Illustration Styles, Packaging Design, and Web Design Layouts.",
      },
      {
        src: "/images/projects/tntrest/03.svg",
        alt: "Fashion Trends",
        caption: "Fashion Trends",
        description:
          "Twelve fashion tiles: Street Style, Casual Outfit Ideas, Formal Wear Trends, Summer Fashion, Winter Style, Fashion Accessories, Vintage Fashion, Minimalist Style, Athleisure Trends, Color Trends, Pattern & Prints, and Celebrity Style.",
      },
    ],
  },
  {
    slug: "roblox-farm",
    title: "Roblox Farm",
    summary:
      "A farming game project for Roblox — Rojo-synced Luau project built with a proper toolchain (Foreman, Selene, StyLua) instead of editing inside Studio.",
    cover: {
      src: "/images/projects/roblox-farm/cover.svg",
      alt: "Roblox Farm cover",
    },
    tags: ["Game", "Roblox", "Lua", "Tooling"],
    date: "2026-04-18",
    status: "in-progress",
    links: [
      { label: "Source", url: "https://github.com/Wikt0r0/roblox-farm" },
    ],
    goal:
      "Build a Roblox game the way I build any other software — version-controlled, linted, formatted, with dependencies pinned in a manifest — instead of editing inside Studio.",
    plan: [
      "Foreman installs the dev tools reproducibly: Rojo for code-sync with Roblox Studio, Selene as the Luau linter, and StyLua as the formatter.",
      "Rojo serves the project on localhost:34872 so VS Code becomes the editor and Studio just renders the game.",
      "VS Code workspace ships recommended extensions (Luau LSP, StyLua, Selene, Rojo) and format-on-save.",
      "Project structure: src/client, src/server, src/shared with path aliases (@client, @server, @shared).",
      "Team workflow: pull, format with stylua, lint with selene, commit with a clear message, push regularly.",
    ],
    results:
      "Project scaffolded with a working Rojo→Studio sync and the full lint/format toolchain in place. The codebase is intentionally tiny right now — just hello-world prints from client, server and a shared module — but the foundation is solid, which is the whole point.",
    photos: [
      {
        src: "/images/projects/roblox-farm/cover.svg",
        alt: "Roblox Farm cover",
        caption: "A farming game project for Roblox",
        description:
          "The starting point. Built on a proper toolchain: Foreman to install reproducible dev tools, Rojo to sync source files between VS Code and Roblox Studio (rojo serve → localhost:34872, then connect with the Rojo plugin inside Studio), Selene as the Luau linter, StyLua as the formatter. Wally is the package manager when needed.",
      },
      {
        src: "/images/projects/roblox-farm/01.svg",
        alt: "Project structure",
        caption: "Project structure",
        description:
          "src/client for client-side code, src/server for server-side code, src/shared for shared code, with path aliases @client, @server, @shared. The workflow: always pull before starting (git pull), format before committing (stylua src/), check for errors (selene src/), build with rojo build -o build.rbxl, and push regularly so the team can see progress.",
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
