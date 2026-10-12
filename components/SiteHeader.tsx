"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "#product", label: "Product" },
  { href: "#metrics", label: "Metrics" },
  { href: "#pilots", label: "Pilots" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition duration-300 ${
        scrolled ? "glass-nav shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-slate-ink sm:text-[1.65rem]"
        >
          Chorus
        </Link>
        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="cursor-pointer text-sm font-medium text-slate-body transition-colors duration-200 hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#waitlist" className="btn-primary !min-h-[40px] !px-5 !py-2.5 !text-sm">
          Request access
        </a>
      </div>
    </header>
  );
}
