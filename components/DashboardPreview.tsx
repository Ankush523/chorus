"use client";

const engines = ["GPT", "PPX", "Claude", "Gemini"];

const rows = [
  { name: "Kōhī House", ranks: [1, 2, 1, 2] },
  { name: "Matcha & Co.", ranks: [2, 1, 3, 1] },
  { name: "Your location", ranks: [null, 4, null, 3], highlight: true },
  { name: "Green Ritual", ranks: [3, 3, 2, 4] },
];

export function DashboardPreview() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/20 via-transparent to-accent/15 blur-2xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-surface/90 p-1 shadow-float backdrop-blur-md">
        <div className="rounded-xl border border-slate-line/60 bg-surface-muted/50 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-muted">
                Live probe
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-ink">
                Best matcha · Indiranagar
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-success-soft px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              <span className="font-mono text-[10px] font-medium text-success">
                Synced 2m ago
              </span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-line/80 bg-surface">
            <div className="min-w-[280px] grid grid-cols-[1.4fr_repeat(4,2.5rem)] gap-0 text-xs">
              <div className="border-b border-slate-line bg-canvas-subtle px-3 py-2.5 font-medium text-slate-muted">
                Venue
              </div>
              {engines.map((e) => (
                <div
                  key={e}
                  className="border-b border-slate-line bg-canvas-subtle py-2.5 text-center font-mono text-[10px] text-slate-muted"
                >
                  {e}
                </div>
              ))}
              {rows.map((row) => (
                <div key={row.name} className="contents">
                  <div
                    className={`border-b border-slate-line/70 px-3 py-2.5 ${
                      row.highlight
                        ? "bg-accent-soft/40 font-semibold text-accent"
                        : "text-slate-body"
                    }`}
                  >
                    {row.name}
                  </div>
                  {row.ranks.map((r, i) => (
                    <div
                      key={`${row.name}-${i}`}
                      className={`flex items-center justify-center border-b border-slate-line/70 py-2.5 font-mono tabular-nums ${
                        row.highlight
                          ? r == null
                            ? "bg-red-50 font-semibold text-red-600"
                            : "bg-accent-soft/30 font-semibold text-accent"
                          : "text-slate-muted"
                      }`}
                    >
                      {r ?? "—"}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-line/80 bg-surface px-3 py-3">
              <p className="font-mono text-[10px] uppercase text-slate-muted">
                Dispersion
              </p>
              <p className="mt-1 font-display text-2xl text-brand">0.74</p>
            </div>
            <div className="rounded-xl border border-slate-line/80 bg-surface px-3 py-3">
              <p className="font-mono text-[10px] uppercase text-slate-muted">
                Mention rate
              </p>
              <p className="mt-1 font-display text-2xl text-slate-ink">38%</p>
            </div>
            <div className="col-span-2 rounded-xl border border-red-100 bg-red-50/80 px-3 py-3 sm:col-span-1">
              <p className="font-mono text-[10px] uppercase text-red-700/70">
                Fact errors
              </p>
              <p className="mt-1 font-display text-2xl text-red-600">2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
