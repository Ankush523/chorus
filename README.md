# Chorus — marketing site

Production-ready landing site for [Chorus](https://getchorus.ai) (local AI discovery ops). Built with Next.js 15, TypeScript, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (use your real domain after deploy) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact / privacy email |
| `WAITLIST_WEBHOOK_URL` | **Required on Vercel** — POST JSON `{ email, company, locations, createdAt }` |

Local dev stores waitlist entries in `data/waitlist.json` (gitignored).

## Deploy (Vercel — recommended)

1. Push this repo to GitHub.
2. Import in [Vercel](https://vercel.com) → Framework: Next.js.
3. Set environment variables in Project Settings.
4. Add your custom domain; set `NEXT_PUBLIC_SITE_URL` to that domain.
5. For waitlist: create a [Slack incoming webhook](https://api.slack.com/messaging/webhooks) or Zapier catch hook and set `WAITLIST_WEBHOOK_URL`.

## Deploy (other hosts)

```bash
npm run build
npm start
```

Requires Node 18+. Ensure `WAITLIST_WEBHOOK_URL` is set if the host has no persistent disk.

## Anthropic startup application checklist

- [ ] Live HTTPS domain matching company name (**Chorus**)
- [ ] Contact email on same domain (e.g. `hello@getchorus.ai`)
- [ ] Privacy policy at `/privacy`
- [ ] Clear description of product and **Claude API** use (see Technology section on homepage)
- [ ] Working waitlist or mailto contact

## License

Proprietary — Chorus.
