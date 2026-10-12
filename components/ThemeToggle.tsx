"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/** Placeholder matches on server and first client paint to avoid hydration mismatch. */
function TogglePlaceholder() {
  return (
    <>
      <span className="h-[18px] w-[18px]" aria-hidden />
      <span className="hidden text-xs font-semibold sm:inline">Theme</span>
    </>
  );
}

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  function toggle() {
    setTheme(isDark ? "light" : "dark");
  }

  if (!mounted) {
    return (
      <button
        type="button"
        onClick={toggle}
        className="inline-flex h-10 min-w-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-slate-line bg-surface px-2.5 text-slate-body transition duration-200 hover:border-brand/40 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:min-w-[5.5rem] sm:px-3"
        aria-label="Toggle color mode"
      >
        <TogglePlaceholder />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-10 min-w-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-slate-line bg-surface px-2.5 text-slate-body transition duration-200 hover:border-brand/40 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:min-w-[5.5rem] sm:px-3"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
      <span className="hidden text-xs font-semibold sm:inline">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
