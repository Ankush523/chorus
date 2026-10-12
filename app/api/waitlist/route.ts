import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistEntry = {
  email: string;
  company: string;
  locations: string;
  createdAt: string;
};

async function appendEntry(entry: WaitlistEntry) {
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "waitlist.json");

  await mkdir(dataDir, { recursive: true });

  let existing: WaitlistEntry[] = [];
  try {
    const raw = await readFile(filePath, "utf8");
    existing = JSON.parse(raw) as WaitlistEntry[];
  } catch {
    existing = [];
  }

  const duplicate = existing.some(
    (e) => e.email.toLowerCase() === entry.email.toLowerCase(),
  );
  if (duplicate) {
    return { duplicate: true as const };
  }

  existing.push(entry);
  await writeFile(filePath, JSON.stringify(existing, null, 2), "utf8");
  return { duplicate: false as const };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { email, company, locations } = body as Record<string, unknown>;

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { ok: false, error: "Valid work email is required." },
      { status: 400 },
    );
  }
  if (typeof company !== "string" || !company.trim()) {
    return NextResponse.json(
      { ok: false, error: "Company name is required." },
      { status: 400 },
    );
  }
  if (typeof locations !== "string" || !locations.trim()) {
    return NextResponse.json(
      { ok: false, error: "Location count is required." },
      { status: 400 },
    );
  }

  const entry: WaitlistEntry = {
    email: email.trim().toLowerCase(),
    company: company.trim(),
    locations: locations.trim(),
    createdAt: new Date().toISOString(),
  };

  const webhook = process.env.WAITLIST_WEBHOOK_URL?.trim();
  const onVercel = Boolean(process.env.VERCEL);

  if (webhook) {
    const hookRes = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    if (!hookRes.ok) {
      return NextResponse.json(
        { ok: false, error: "Submission failed. Please email us directly." },
        { status: 503 },
      );
    }
    return NextResponse.json({ ok: true });
  }

  if (onVercel) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Waitlist is not configured yet. Please use the contact email on this page.",
      },
      { status: 503 },
    );
  }

  try {
    const result = await appendEntry(entry);
    if (result.duplicate) {
      return NextResponse.json({
        ok: true,
        message: "Already registered.",
      });
    }
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to save submission. Email us at hello@getchorus.ai.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
