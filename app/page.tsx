import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroProbeVisual } from "@/components/HeroProbeVisual";
import { WaitlistForm } from "@/components/WaitlistForm";

const steps = [
  {
    n: "01",
    title: "Probe",
    body: "Run a fixed pack of geo-local prompts across major AI assistants on a schedule — same wording, controlled settings, logged model versions.",
  },
  {
    n: "02",
    title: "Parse & score",
    body: "Extract ranked lists, mentions, citations, and factual claims. Track mention rate, mean rank, and cross-engine dispersion vs. local competitors.",
  },
  {
    n: "03",
    title: "Fix at the source",
    body: "Prioritize actions on the directories, reviews, and listicles models actually cite — not a generic SEO checklist.",
  },
  {
    n: "04",
    title: "Verify",
    body: "Re-probe weekly and show dispersion narrowing and factual accuracy improving in customer-ready location reports.",
  },
];

const metrics = [
  {
    label: "Dispersion index",
    desc: "How much engines disagree on your rank and presence — your consistency KPI.",
  },
  {
    label: "Mention & top-K rate",
    desc: "Share of target prompts where you appear — and how often you land in the recommendation set.",
  },
  {
    label: "Fact integrity",
    desc: "Wrong hours, address, or category in AI answers — flagged and tracked to zero.",
  },
  {
    label: "Citation share",
    desc: "Which third-party URLs drive wins for competitors — and your plan to earn those sources.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero — full bleed */}
        <section className="relative min-h-[calc(100svh-var(--header-h))] overflow-hidden pt-[var(--header-h)]">
          <div
            className="pointer-events-none absolute inset-0 animate-drift opacity-90"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(196,163,90,0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(61,139,110,0.08) 0%, transparent 50%), linear-gradient(180deg, #0c0c0e 0%, #12121a 100%)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:pb-28 lg:pt-16">
            <div className="animate-fade-up">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-brass">
                Local AI discovery ops
              </p>
              <h1 className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-[3.25rem]">
                Many assistants. One chorus for your brand.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-paper-muted sm:text-lg">
                Chorus helps new openings and multi-location brands measure how
                ChatGPT, Claude, Perplexity, and others describe each location
                — then closes the gap with source-level fixes verified by
                re-probing.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#waitlist"
                  className="inline-flex rounded-lg bg-brass px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-brass-glow"
                >
                  Request pilot access
                </a>
                <a
                  href="#product"
                  className="text-sm font-medium text-paper-muted underline-offset-4 hover:text-paper hover:underline"
                >
                  How it works
                </a>
              </div>
              <p className="mt-10 text-xs leading-relaxed text-paper-muted/80">
                Built for operators, not billboards. Private beta — food &amp;
                beverage and local retail in select cities.
              </p>
            </div>
            <div className="animate-fade-up lg:justify-self-end" style={{ animationDelay: "120ms" }}>
              <HeroProbeVisual />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-y border-ink-border bg-ink-raised/30">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
                National GEO dashboards miss the location story.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-paper-muted sm:text-lg">
                A matcha bar in Indiranagar does not lose customers because of a
                keyword rank — it loses them when Claude omits you, Perplexity
                ranks you fourth, and ChatGPT lists the wrong hours. Consumer-brand
                monitoring tools track one logo nationally; operators need{" "}
                <strong className="font-medium text-paper">per-place</strong>{" "}
                visibility and{" "}
                <strong className="font-medium text-paper">factual integrity</strong>{" "}
                on the prompts that drive foot traffic.
              </p>
            </div>
          </div>
        </section>

        {/* Product */}
        <section id="product" className="scroll-mt-[var(--header-h)]">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
              Product
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
              Measure dispersion. Fix what models read. Prove lift.
            </h2>
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:gap-12">
              {steps.map((step) => (
                <div
                  key={step.n}
                  className="border-l-2 border-brass/30 pl-6"
                >
                  <span className="font-mono text-sm text-brass">{step.n}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper-muted">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section
          id="metrics"
          className="scroll-mt-[var(--header-h)] border-t border-ink-border bg-ink-raised/40"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
              Metrics that map to the door.
            </h2>
            <ul className="mt-12 divide-y divide-ink-border border-y border-ink-border">
              {metrics.map((m) => (
                <li
                  key={m.label}
                  className="grid gap-2 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8"
                >
                  <span className="font-medium text-paper">{m.label}</span>
                  <span className="text-sm leading-relaxed text-paper-muted">
                    {m.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technology — Claude alignment for reviewers */}
        <section className="border-t border-ink-border">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-signal">
                  Technology
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-paper">
                  Multi-engine measurement. Claude-powered analysis.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-paper-muted sm:text-base">
                  We probe several AI assistants to capture how answers differ by
                  platform. The{" "}
                  <strong className="font-medium text-paper">Anthropic Claude API</strong>{" "}
                  powers our structured extraction, scoring, recommendation
                  engine, and weekly location reports — turning raw answers into
                  operator-ready actions with evals tuned for stability as models
                  update.
                </p>
              </div>
              <blockquote className="rounded-2xl border border-ink-border bg-ink p-6 sm:p-8">
                <p className="font-display text-lg leading-snug text-paper">
                  &ldquo;We&apos;re not selling another mention chart. We bring
                  every engine into chorus — lower dispersion, correct facts,
                  for every pin on the map.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-paper-muted">
                  — Chorus founding team
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Pilots */}
        <section
          id="pilots"
          className="scroll-mt-[var(--header-h)] border-t border-ink-border bg-ink-raised/30"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
              Pilot program
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper-muted">
              We&apos;re onboarding a small cohort of{" "}
              <strong className="font-medium text-paper">new openings</strong> and{" "}
              <strong className="font-medium text-paper">multi-location F&amp;B</strong>{" "}
              brands for a 30-day measured beta: baseline probe, fix queue,
              weekly re-probes, and a final dispersion report suitable for
              operators and investors.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "40+ geo-local prompts per location",
                "3–5 competitor benchmark set",
                "Source-level fix priorities",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-ink-border bg-ink px-4 py-4 text-sm text-paper-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Waitlist */}
        <section
          id="waitlist"
          className="scroll-mt-[var(--header-h)] border-t border-ink-border"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl">
                  Request access
                </h2>
                <p className="mt-4 text-base leading-relaxed text-paper-muted">
                  Tell us about your brand and location count. We&apos;ll reply
                  with pilot availability and onboarding steps.
                </p>
                <p className="mt-6 text-sm text-paper-muted">
                  Prefer email?{" "}
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@getchorus.ai"}`}
                    className="text-brass-glow underline underline-offset-2"
                  >
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@getchorus.ai"}
                  </a>
                </p>
              </div>
              <div className="rounded-2xl border border-ink-border bg-ink-raised/50 p-6 sm:p-8">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
