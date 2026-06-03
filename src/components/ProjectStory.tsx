"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Photo } from "@/lib/types";

export function ProjectStory({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length],
  );
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (active === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, next, prev]);

  return (
    <>
      <ol className="flex flex-col gap-16">
        {photos.map((p, i) => {
          const flipped = i % 2 === 1;
          return (
            <li
              key={i}
              className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                flipped ? "lg:[&>figure]:lg:order-2" : ""
              }`}
            >
              <figure className="group relative">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Open photo ${i + 1} of ${photos.length}`}
                  className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    <ZoomIcon /> Zoom
                  </span>
                </button>
              </figure>

              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-wider text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                </span>
                {p.caption && (
                  <h3 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                    {p.caption}
                  </h3>
                )}
                {p.description && (
                  <p className="prose-body text-[var(--fg)]">{p.description}</p>
                )}
                {!p.caption && !p.description && (
                  <p className="text-sm text-[var(--fg-muted)]">{p.alt}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <ChevronIcon dir="left" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <ChevronIcon dir="right" />
          </button>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <CloseIcon />
          </button>
          <figure
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            {photos[active].caption && (
              <figcaption className="mt-3 text-center text-sm text-white/80">
                {photos[active].caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}

function ZoomIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

function CloseIcon() {
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
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
