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
    <form onSubmit={onSubmit} className="space-y-5" aria-label="Pilot waitlist">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-slate-ink">
            Work email <span className="text-accent">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="input-field"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-ink">
            Company <span className="text-accent">*</span>
          </span>
          <input
            type="text"
            name="company"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Brand or group name"
            className="input-field"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-ink">
            Locations <span className="text-accent">*</span>
          </span>
          <select
            name="locations"
            required
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
            className="input-field cursor-pointer"
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
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting…" : "Join the pilot waitlist"}
      </button>
      {message ? (
        <p
          role="status"
          aria-live="polite"
          className={`text-sm font-medium ${status === "error" ? "text-red-600" : "text-success"}`}
        >
          {message}
        </p>
      ) : null}
      <p className="text-xs leading-relaxed text-slate-muted">
        By submitting, you agree to our{" "}
        <a
          href="/privacy"
          className="cursor-pointer font-medium text-brand underline-offset-2 hover:underline"
        >
          Privacy Policy
        </a>
        . We use your information only to contact you about Chorus.
      </p>
    </form>
  );
}
