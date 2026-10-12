import Link from "next/link";

const nav = [
  { href: "#product", label: "Product" },
  { href: "#metrics", label: "Metrics" },
  { href: "#pilots", label: "Pilots" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-ink-border/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-paper sm:text-xl"
        >
          Chorus
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-paper-muted transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#waitlist"
          className="rounded-full border border-brass/40 bg-brass/10 px-4 py-2 text-sm font-medium text-brass-glow transition hover:border-brass hover:bg-brass/20"
        >
          Request access
        </a>
      </div>
    </header>
  );
}
