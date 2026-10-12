# Accord — marketing site

Production-ready landing site for [Accord](https://getaccord.com) (local AI discovery ops). Built with Next.js 15, TypeScript, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (must match your Vercel domain) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact / privacy email on the **same domain** |
| `WAITLIST_WEBHOOK_URL` | **Required on Vercel** for waitlist POST forwarding |

## Deploy (Vercel)

1. Push to GitHub and import the repo in Vercel.
2. Add custom domain (e.g. `getaccord.com`).
3. Set environment variables to match the live domain.
4. Configure `hello@getaccord.com` (or your chosen inbox) via Vercel / Google Workspace / ImprovMX.

## Anthropic startup checklist

- [ ] HTTPS live at your purchased domain
- [ ] Company name **Accord** matches site header and application
- [ ] Email on same domain (not Gmail-only for the application)
- [ ] `/privacy` accessible
- [ ] Homepage states **Claude API** use (Technology section)
- [ ] Waitlist works (`WAITLIST_WEBHOOK_URL`) or mailto fallback visible

## License

Proprietary — Accord.
