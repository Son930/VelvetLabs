# Velvet Labs

Marketing site for **Velvet Labs** — a software house focused on modern luxury digital products.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- HeroUI
- Framer Motion
- React Router

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview production build
```

## Pages

Home · Work · About · Team · Process · Services · Contact · Legal

## Contact form (Vercel)

The contact page POSTs to `/api/contact`, a Vercel Serverless Function that sends mail via **IONOS SMTP** (Nodemailer).

### Where to add IONOS details

**Production & Preview (deployed):** [Vercel Dashboard](https://vercel.com) → your project → **Settings** → **Environment Variables**. Add each variable below for **Production** and **Preview**, then redeploy.

**Local API testing:** Copy `.env.example` to `.env` in the project root, fill in `SMTP_PASS` and other values, then run `vercel dev` (not `npm run dev` — that serves the UI only).

| Variable | Description |
|----------|-------------|
| `SMTP_HOST` | e.g. `smtp.ionos.co.uk` |
| `SMTP_PORT` | `465` or `587` |
| `SMTP_USER` | `team@velvetlabs.co.uk` |
| `SMTP_PASS` | IONOS mailbox password |
| `SMTP_SECURE` | `true` for port 465, `false` for 587 (STARTTLS) |
| `CONTACT_TO_EMAIL` | Inbox for submissions (default: `team@velvetlabs.co.uk`) |
| `CONTACT_FROM_EMAIL` | e.g. `Velvet Labs <team@velvetlabs.co.uk>` |

Use the same mailbox credentials in IONOS that you use for `SMTP_USER` / `SMTP_PASS`. Do not commit `.env` or real passwords to git.

### Deploy

Push to GitHub (or run `vercel --prod`). `vercel.json` rewrites non-API routes to `index.html` for the SPA while keeping `/api/*` as serverless functions.

`npm run dev` serves the UI only. To test the contact API locally, use `vercel dev` (requires the [Vercel CLI](https://vercel.com/docs/cli) and env vars from `.env.example`).
