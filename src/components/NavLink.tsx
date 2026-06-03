"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "/";
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={[
        "rounded-full px-3 py-1.5 text-sm font-medium transition",
        isActive
          ? "bg-[var(--bg-elev)] text-[var(--fg)] shadow-sm border border-[var(--border)]"
          : "text-[var(--fg-muted)] hover:text-[var(--fg)]",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
