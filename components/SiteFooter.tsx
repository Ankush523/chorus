import Link from "next/link";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@getchorus.ai";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-border bg-ink-raised/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-paper">
            Chorus
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper-muted">
            Local AI discovery ops — one coherent story across every assistant,
            for every location.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-paper-muted sm:flex-row sm:gap-10">
          <div>
            <p className="mb-2 font-medium text-paper">Contact</p>
            <a
              href={`mailto:${contactEmail}`}
              className="hover:text-brass-glow"
            >
              {contactEmail}
            </a>
          </div>
          <div>
            <p className="mb-2 font-medium text-paper">Legal</p>
            <Link href="/privacy" className="block hover:text-brass-glow">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-border/60 px-5 py-4 text-center text-xs text-paper-muted sm:px-8">
        © {new Date().getFullYear()} Chorus. All rights reserved.
      </div>
    </footer>
  );
}
