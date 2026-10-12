"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { DashboardPreview } from "./DashboardPreview";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Full-bleed photography */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2400&auto=format&fit=crop"
          alt=""
          fill
          priority
          className="object-cover object-center dark:brightness-[0.45] dark:saturate-[0.85]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/95 to-canvas/40 dark:from-canvas dark:via-canvas/92 dark:to-canvas/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/30 dark:from-canvas dark:to-canvas/40"
          aria-hidden
        />
      </div>

      {/* Ambient mesh */}
      <div
        className="mesh-blob pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-brand-light/40"
        aria-hidden
      />
      <div
        className="mesh-blob pointer-events-none absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-accent-soft/80"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-[calc(var(--header-h)+2rem)] sm:px-8 lg:px-10 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-16">
          <div>
            <motion.p
              className="section-label mb-5 flex items-center gap-2"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-success animate-pulse-soft" />
              Local AI discovery ops
            </motion.p>

            <motion.h1
              className="font-display text-balance text-[2.75rem] leading-[1.02] tracking-tight text-slate-ink sm:text-6xl lg:text-[4.25rem]"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              Chorus
            </motion.h1>

            <motion.p
              className="mt-4 max-w-md text-balance font-display text-2xl leading-snug text-slate-body sm:text-3xl"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Many assistants. One story for every location.
            </motion.p>

            <motion.p
              className="mt-5 max-w-lg text-base leading-relaxed text-slate-muted sm:text-lg"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              Measure how ChatGPT, Claude, and Perplexity recommend you — fix
              what they get wrong — and prove dispersion drops week over week.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
            >
              <a href="#waitlist" className="btn-primary">
                Request pilot access
              </a>
              <a href="#product" className="btn-secondary">
                See the workflow
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative lg:justify-self-end"
            initial={reduce ? false : { opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="animate-float">
              <DashboardPreview />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-slate-line/80 pt-8"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-xs font-medium uppercase tracking-wider text-slate-muted">
            Probed engines
          </span>
          {["ChatGPT", "Claude", "Perplexity", "Gemini"].map((name) => (
            <span
              key={name}
              className="font-mono text-xs font-medium text-slate-body"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
