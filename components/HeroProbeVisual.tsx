"use client";

const engines = ["ChatGPT", "Perplexity", "Claude", "Gemini"];

const rows = [
  { name: "Kōhī House", ranks: [1, 2, 1, 2] },
  { name: "Matcha & Co.", ranks: [2, 1, 3, 1] },
  { name: "Your location", ranks: [null, 4, null, 3], highlight: true },
  { name: "Green Ritual", ranks: [3, 3, 2, 4] },
];

export function HeroProbeVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-ink-border bg-ink-raised/90 p-5 shadow-2xl shadow-black/40 sm:p-6"
      aria-hidden
    >
      <div className="mb-4 flex items-center justify-between gap-2 border-b border-ink-border pb-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper-muted">
          Probe · best matcha in indiranagar
        </span>
        <span className="flex h-2 w-2 rounded-full bg-signal animate-pulse" />
      </div>
      <div className="grid grid-cols-[1fr_repeat(4,minmax(0,2.5rem))] gap-2 text-xs sm:text-sm">
        <div className="text-paper-muted">Business</div>
        {engines.map((e) => (
          <div key={e} className="text-center text-[10px] text-paper-muted sm:text-xs">
            {e.slice(0, 3)}
          </div>
        ))}
        {rows.map((row) => (
          <div key={row.name} className="contents">
            <div
              className={`truncate py-1.5 ${row.highlight ? "font-medium text-brass-glow" : "text-paper"}`}
            >
              {row.name}
            </div>
            {row.ranks.map((r, i) => (
              <div
                key={`${row.name}-${i}`}
                className={`flex items-center justify-center py-1.5 font-mono tabular-nums ${
                  row.highlight
                    ? r == null
                      ? "text-red-400/90"
                      : "text-brass"
                    : "text-paper-muted"
                }`}
              >
                {r ?? "—"}
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="mt-4 border-t border-ink-border pt-3 font-mono text-[10px] leading-relaxed text-paper-muted">
        Dispersion index{" "}
        <span className="text-brass">0.74</span> · factual errors{" "}
        <span className="text-red-400/90">2</span>
      </p>
    </div>
  );
}
