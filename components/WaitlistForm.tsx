"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [locations, setLocations] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company, locations }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're on the list. We'll reach out about pilot spots.");
      setEmail("");
      setCompany("");
      setLocations("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-sm font-medium text-paper-muted">
            Work email
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded-lg border border-ink-border bg-ink px-4 py-3 text-paper placeholder:text-paper-muted/50 outline-none ring-brass/0 transition focus:border-brass/50 focus:ring-2 focus:ring-brass/20"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-paper-muted">
            Company
          </span>
          <input
            type="text"
            name="company"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Brand or group name"
            className="w-full rounded-lg border border-ink-border bg-ink px-4 py-3 text-paper placeholder:text-paper-muted/50 outline-none transition focus:border-brass/50 focus:ring-2 focus:ring-brass/20"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-paper-muted">
            Locations
          </span>
          <select
            name="locations"
            required
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
            className="w-full rounded-lg border border-ink-border bg-ink px-4 py-3 text-paper outline-none transition focus:border-brass/50 focus:ring-2 focus:ring-brass/20"
          >
            <option value="" disabled>
              Select range
            </option>
            <option value="1">1 (new opening)</option>
            <option value="2-10">2–10</option>
            <option value="11-50">11–50</option>
            <option value="50+">50+</option>
          </select>
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-brass px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-brass-glow disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting…" : "Join the pilot waitlist"}
      </button>
      {message ? (
        <p
          role="status"
          className={`text-sm ${status === "error" ? "text-red-400" : "text-signal"}`}
        >
          {message}
        </p>
      ) : null}
      <p className="text-xs leading-relaxed text-paper-muted">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-paper">
          Privacy Policy
        </a>
        . We use your information only to contact you about Chorus.
      </p>
    </form>
  );
}
