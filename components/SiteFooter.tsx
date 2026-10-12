import Link from "next/link";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "ankush@inaccord.xyz";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-line bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div>
          <p className="font-display text-3xl text-slate-ink">Accord</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-muted">
            Local AI discovery ops — recommendations in accord across every
            assistant, for every location you operate.
          </p>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <div>
            <p className="text-sm font-semibold text-slate-ink">Contact</p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-2 inline-block cursor-pointer text-sm text-brand hover:underline"
            >
              {contactEmail}
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-ink">Legal</p>
            <Link
              href="/privacy"
              className="mt-2 inline-block cursor-pointer text-sm text-slate-body hover:text-brand"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-line px-5 py-5 text-center text-xs text-slate-muted sm:px-8">
        <p>Accord · inaccord.xyz · Local AI discovery ops</p>
        <p className="mt-1">
          © {new Date().getFullYear()} Accord. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
