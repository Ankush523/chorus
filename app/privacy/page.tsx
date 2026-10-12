import Link from "next/link";
import type { Metadata } from "next";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Accord collects and uses information.",
};

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@getaccord.com";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-canvas">
      <header className="glass-nav flex items-center justify-between px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="cursor-pointer font-display text-2xl text-slate-ink hover:text-brand"
        >
          ← Accord
        </Link>
        <ThemeToggle />
      </header>
      <article className="mx-auto max-w-2xl px-5 py-12 sm:px-8">
        <h1 className="font-display text-4xl text-slate-ink">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-muted">
          Last updated: October 12, 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-body">
          <section>
            <h2 className="mb-2 text-base font-semibold text-slate-ink">
              Who we are
            </h2>
            <p>
              Accord (&quot;we,&quot; &quot;us&quot;) provides software and
              services that help local and multi-location businesses understand
              and improve how AI-powered assistants describe and recommend their
              locations.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-slate-ink">
              Information we collect
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-slate-ink">Waitlist and contact:</strong>{" "}
                email address, company name, location count, and any message you
                send us.
              </li>
              <li>
                <strong className="text-slate-ink">Usage:</strong> standard web
                analytics and server logs when you visit our site.
              </li>
              <li>
                <strong className="text-slate-ink">Customer data (pilots):</strong>{" "}
                business names, addresses, public web profiles, and probe results
                needed to deliver our product.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-slate-ink">
              How we use it
            </h2>
            <p>
              We use information to respond to inquiries, operate the waitlist,
              deliver and improve our services, run scheduled AI visibility
              probes, generate reports, and communicate with pilot participants.
              We do not sell personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-slate-ink">
              AI and third-party processors
            </h2>
            <p>
              Our product sends prompts to third-party AI providers (including
              Anthropic, OpenAI, and others) to measure public-facing answers
              and to parse responses into structured metrics.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-semibold text-slate-ink">
              Your rights
            </h2>
            <p>
              You may request access, correction, or deletion by emailing{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-medium text-brand underline-offset-2 hover:underline"
              >
                {contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
