import { HeroSection } from "@/components/HeroSection";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WaitlistForm } from "@/components/WaitlistForm";
import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Probe",
    body: "Fixed geo-local prompts across major assistants — same wording, logged models, scheduled runs.",
    tone:
      "from-brand/10 via-surface to-canvas-subtle dark:from-brand/25 dark:via-surface dark:to-canvas-subtle",
  },
  {
    n: "02",
    title: "Parse & score",
    body: "Ranked lists, citations, and factual claims → mention rate, dispersion, competitor share.",
    tone:
      "from-brand/5 via-surface to-canvas-subtle dark:from-brand/15 dark:via-surface dark:to-canvas-subtle",
  },
  {
    n: "03",
    title: "Fix at source",
    body: "Tasks tied to directories, reviews, and listicles models actually cite — not generic SEO.",
    tone:
      "from-accent-soft/60 via-surface to-canvas-subtle dark:from-accent-soft/40 dark:via-surface dark:to-canvas-subtle",
  },
  {
    n: "04",
    title: "Verify",
    body: "Weekly re-probes and location reports operators can act on — and investors can trust.",
    tone:
      "from-success-soft/80 via-surface to-canvas-subtle dark:from-success-soft/50 dark:via-surface dark:to-canvas-subtle",
  },
];

const metrics = [
  {
    value: "↓ 40%",
    label: "Dispersion index",
    desc: "Cross-engine disagreement on rank and presence.",
  },
  {
    value: "38%",
    label: "Mention rate",
    desc: "Prompts where your location appears at all.",
  },
  {
    value: "0",
    label: "Fact errors",
    desc: "Wrong hours, address, or category — tracked to zero.",
  },
  {
    value: "3.2",
    label: "Mean rank",
    desc: "Average position when you land in the recommendation set.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />

        {/* Problem + proof */}
        <section className="relative overflow-hidden border-y border-slate-line bg-surface">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-28">
            <Reveal>
              <p className="section-label">The gap</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-slate-ink sm:text-5xl">
                National GEO tools miss the door.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-body">
                A matcha bar in the West Village loses foot traffic when Claude
                omits you, Perplexity ranks you fourth, and ChatGPT lists the
                wrong hours. Operators need per-place visibility — not one logo
                on a national chart.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-float">
                <Image
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600&auto=format&fit=crop"
                  alt="Matcha being prepared in a cafe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-ink/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-white/70">
                    New York City · prompt pack
                  </p>
                  <p className="mt-2 max-w-sm font-display text-2xl text-white">
                    &ldquo;Best matcha in the West Village&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Bento product */}
        <section
          id="product"
          className="scroll-mt-[var(--header-h)] bg-canvas py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <p className="section-label">Workflow</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl text-slate-ink sm:text-5xl">
                Measure dispersion. Fix what models read. Prove lift.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.06}>
                  <article
                    className={`flex h-full flex-col rounded-2xl border border-slate-line/90 bg-gradient-to-br ${step.tone} p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-float`}
                  >
                    <span className="font-mono text-sm font-medium text-brand">
                      {step.n}
                    </span>
                    <h3 className="mt-3 font-display text-2xl text-slate-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-body">
                      {step.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics bento */}
        <section
          id="metrics"
          className="scroll-mt-[var(--header-h)] border-y border-slate-line bg-surface py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <p className="section-label">Outcomes</p>
              <h2 className="mt-4 font-display text-4xl text-slate-ink sm:text-5xl">
                Metrics that map to foot traffic.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.05}>
                  <div className="rounded-2xl border border-slate-line bg-canvas-subtle p-6 shadow-inset">
                    <p className="font-display text-4xl text-brand">{m.value}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-ink">
                      {m.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                      {m.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Technology band */}
        <section className="relative overflow-hidden bg-band py-20 text-white sm:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 20% 50%, #1D4ED8 0%, transparent 50%), radial-gradient(circle at 80% 20%, #EA580C 0%, transparent 45%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-blue-300">
                Technology
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Multi-engine measurement. Claude-powered analysis.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-band-muted">
                We probe several assistants to capture platform drift. The{" "}
                <strong className="font-semibold text-white">
                  Anthropic Claude API
                </strong>{" "}
                structures extraction, scoring, recommendations, and weekly
                location reports — with evals tuned for model updates.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="font-display text-xl leading-snug text-white/95">
                  We&apos;re not selling another mention chart. We bring every
                  engine into chorus — lower dispersion, correct facts, for
                  every pin on the map.
                </p>
                <footer className="mt-5 text-sm text-band-muted/80">
                  Chorus founding team
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </section>

        {/* Pilots */}
        <section
          id="pilots"
          className="scroll-mt-[var(--header-h)] bg-canvas py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <Reveal>
                <p className="section-label">Pilot program</p>
                <h2 className="mt-4 font-display text-4xl text-slate-ink sm:text-5xl">
                  30 days. Measured beta.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-body">
                  New openings and multi-location F&amp;B in{" "}
                  <strong className="font-semibold text-slate-ink">
                    New York City
                  </strong>{" "}
                  — baseline probe, fix queue, weekly re-probes, and a final
                  dispersion report for operators and investors.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <ol className="space-y-0 divide-y divide-slate-line rounded-2xl border border-slate-line bg-surface shadow-soft">
                  {[
                    "40+ geo-local prompts per location",
                    "3–5 competitor benchmark set",
                    "Source-level fix priorities",
                    "Claude-generated weekly location report",
                  ].map((item, i) => (
                    <li
                      key={item}
                      className="flex gap-4 px-6 py-5 text-sm text-slate-body sm:text-base"
                    >
                      <span className="font-mono text-sm font-medium text-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section
          id="waitlist"
          className="scroll-mt-[var(--header-h)] border-t border-slate-line bg-surface py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="overflow-hidden rounded-3xl border border-slate-line bg-gradient-to-br from-canvas via-surface to-brand/5 shadow-float">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 lg:p-14">
                  <Reveal>
                    <p className="section-label">Early access</p>
                    <h2 className="mt-4 font-display text-4xl text-slate-ink">
                      Request pilot access
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-slate-body">
                      Share your brand and location count — we&apos;ll reply
                      with cohort availability and onboarding steps.
                    </p>
                    <p className="mt-6 text-sm text-slate-muted">
                      Prefer email?{" "}
                      <a
                        href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@getchorus.ai"}`}
                        className="cursor-pointer font-semibold text-brand hover:underline"
                      >
                        {process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
                          "hello@getchorus.ai"}
                      </a>
                    </p>
                  </Reveal>
                </div>
                <div className="border-t border-slate-line bg-surface/80 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
