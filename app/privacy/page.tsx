import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Chorus collects and uses information.",
};

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@getchorus.ai";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-ink-border px-5 py-6 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold text-paper hover:text-brass-glow"
        >
          ← Chorus
        </Link>
      </header>
      <article className="mx-auto max-w-2xl px-5 py-12 sm:px-8">
        <h1 className="font-display text-3xl font-semibold text-paper">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-paper-muted">
          Last updated: October 12, 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-paper-muted">
          <section>
            <h2 className="mb-2 font-semibold text-paper">Who we are</h2>
            <p>
              Chorus (&quot;we,&quot; &quot;us&quot;) provides software
              and services that help local and multi-location businesses
              understand and improve how AI-powered assistants describe and
              recommend their locations.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-paper">
              Information we collect
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-paper">Waitlist and contact:</strong>{" "}
                email address, company name, location count, and any message you
                send us.
              </li>
              <li>
                <strong className="text-paper">Usage:</strong> standard web
                analytics and server logs (IP address, browser type, pages
                viewed) when you visit our site.
              </li>
              <li>
                <strong className="text-paper">Customer data (pilots):</strong>{" "}
                business names, addresses, public web profiles, and probe results
                needed to deliver our product — processed under agreement with
                pilot customers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-paper">How we use it</h2>
            <p>
              We use information to respond to inquiries, operate the waitlist,
              deliver and improve our services, run scheduled AI visibility
              probes, generate reports, and communicate with pilot participants.
              We do not sell personal information.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-paper">
              AI and third-party processors
            </h2>
            <p>
              Our product sends prompts to third-party AI providers (including
              Anthropic, OpenAI, and others) to measure public-facing answers
              and to parse responses into structured metrics. We use these
              outputs for analysis and recommendations. Provider terms and
              privacy policies apply to their processing.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-paper">Retention</h2>
            <p>
              Waitlist data is retained until you ask us to delete it or we no
              longer need it for outreach. Pilot and customer data is retained per
              contract and deleted on request when obligations allow.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-paper">Your rights</h2>
            <p>
              You may request access, correction, or deletion of your personal
              data by emailing{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-brass-glow underline underline-offset-2"
              >
                {contactEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-paper">Contact</h2>
            <p>
              Questions about this policy:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-brass-glow underline underline-offset-2"
              >
                {contactEmail}
              </a>
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
