import Image from "next/image";
import type { Update } from "@/lib/types";
import { formatDate } from "@/lib/format";

export function UpdateCard({ update }: { update: Update }) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elev)] p-6">
      <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[var(--fg-muted)]">
        <time dateTime={update.date}>{formatDate(update.date)}</time>
        {update.tags?.length ? (
          <span className="flex flex-wrap gap-1.5">
            {update.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[10px] normal-case tracking-normal text-[var(--fg-muted)]"
              >
                {t}
              </span>
            ))}
          </span>
        ) : null}
      </div>
      <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight">
        {update.title}
      </h3>
      <p className="mt-3 text-[var(--fg)] prose-body">{update.body}</p>

      {update.photos && update.photos.length > 0 && (
        <div
          className={`mt-5 grid gap-3 ${
            update.photos.length === 1
              ? "grid-cols-1"
              : update.photos.length === 2
                ? "grid-cols-2"
                : "grid-cols-2 sm:grid-cols-3"
          }`}
        >
          {update.photos.map((p, i) => (
            <figure
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg)]"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
              {p.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-3 py-2 text-xs text-white">
                  {p.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </article>
  );
}
