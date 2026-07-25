# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website + internal tools for Bilco Works, an HRIS consulting firm (Calgary, AB). One Next.js 14 App Router codebase contains two distinct apps:

1. **Public marketing site** (`/`, `/services`, `/approach`, `/about`, `/contact`, `/faq`) — static/server-rendered pages, heavy on SEO.
2. **Private ops dashboard** (`/ops`) — a contract-opportunity tracker backed by SQLite via Prisma, gated by cookie auth.

There is no test suite in this repository.

## Commands

```bash
npm run dev          # Dev server (needs .env.local; see Environment below)
npm run build        # Runs `prisma generate` first, then `next build`
npm run lint         # next lint (eslint-config-next/core-web-vitals)
npm run ingest       # Fetch + score job opportunities into SQLite
npm run seed         # Seed sample opportunities (scripts/seed.ts)
npm run db:push      # Sync schema to the SQLite db (first-time setup)
npm run db:migrate   # prisma migrate dev
npm run db:studio    # Prisma Studio
```

First-time setup: `npm install`, create `.env.local`, then `npm run db:push`.

### Environment variables (`.env.local`)

- `DATABASE_URL` — e.g. `file:./prisma/dev.db` (SQLite; the db file is gitignored)
- `BASIC_AUTH_USER` / `BASIC_AUTH_PASS` — credentials for the `/ops` login
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics
- `ADZUNA_APP_ID`, `ADZUNA_APP_KEY`, `JOOBLE_API_KEY` — job APIs used by ingestion (a connector throws/skips if its keys are missing)

## Architecture

### Two TypeScript configs

The root `tsconfig.json` (bundler resolution, `@/*` → `./src/*` alias) **excludes `scripts/`**. The ingestion/seed scripts run under `scripts/tsconfig.json` (CommonJS) via `ts-node --transpile-only`. Don't import app code (`@/...`) from `scripts/` or vice versa — the only shared layer is the Prisma schema.

### Prisma / database

- Schema: `prisma/schema.prisma` — two models, `Opportunity` and `SourceRun`, on SQLite.
- App code must use the singleton client from `src/lib/prisma.ts`; standalone scripts create their own `PrismaClient`.
- SQLite has no array/enum types, so:
  - `Opportunity.tags` is a **JSON array stored as a string** — always `JSON.stringify` on write and `JSON.parse` on read.
  - `Opportunity.status` is a plain string. Values used across the codebase: `new`, `interested`, `seen`, `applied`, `ignored`. (The schema comment omits `interested`, but the ops UI uses it — keep all five in sync if you touch status handling.)
- Opportunities are deduped by the `@@unique([source, url])` constraint and upserted during ingestion.

### Ops dashboard (`src/app/ops/`)

- `src/middleware.ts` protects `/ops/*`: it redirects to `/ops/login` unless the `ops_auth` cookie equals `authenticated`. The login page (`ops/login/page.tsx`) is a server-action form checking `BASIC_AUTH_USER`/`BASIC_AUTH_PASS` and setting that cookie.
- `ops/page.tsx` is a server component using **server actions** (`'use server'`) for status updates, plus `revalidatePath('/ops')` after each mutation. Filtering is done through plain GET query params.
- The "Run Ingestion" server action shells out to `npm run ingest` with a hardcoded production path (`/home/bilco-local/bilcoworks-site`) — it will not work in other environments; use `npm run ingest` directly instead.

### Ingestion pipeline (`scripts/`)

- `scripts/sources.config.ts` is the single place to tune ingestion: source definitions (RSS / Adzuna / Jooble / Careerjet connector types), scoring `KEYWORDS` (tiered: ukgSpecific 50pts, primary 30, secondary 20, technical 10), location/role `BOOSTS`, and rate limits.
- `scripts/ingest.ts` fetches each source, scores title+summary+buyer text, **discards anything scoring below 15** (i.e. no HR-relevant keyword), caps scores at 100, upserts into `Opportunity`, and logs each run to `SourceRun`. Adding a new source type means adding a connector function + a case in `processSource`.
- `scripts/setup-cron.sh` installs a daily 6 AM cron for ingestion on the production host.

### Contact form

`src/components/ContactForm.tsx` does **not** use an API route — it POSTs directly to an external Cloudflare Worker (`bilcoworks-contact.cloudflare-com-14e.workers.dev/submit`). The worker is not part of this repo. Spam protection is a client-side arithmetic captcha.

### SEO

SEO surface area is concentrated in `src/app/layout.tsx`: the `metadata` export (title template, keywords, OpenGraph) and a large JSON-LD `@graph` (Organization / ProfessionalService with an offer catalog / WebSite). **When services change on `/services`, the JSON-LD offer catalog and keywords in `layout.tsx` should be updated to match.** `src/app/sitemap.ts` generates the sitemap.

## Conventions

- **Design tokens over raw colors** (public site): Tailwind is themed in `tailwind.config.js` with semantic names — `surface`/`surface-secondary`/`surface-elevated`, `ink`/`ink-muted`/`ink-subtle`, `rule` (borders), `accent` (navy), `teal`. Use these instead of default Tailwind grays/blues on marketing pages. (The `/ops` dashboard intentionally uses plain Tailwind grays — it's internal.)
- Fonts are CSS variables set in `layout.tsx`: `font-sans` (Inter), `font-display` (Space Grotesk), `font-mono` (JetBrains Mono).
- Scroll-in animations use the `Reveal` component (`src/components/Reveal.tsx`), which respects reduced-motion. Decorative SVGs live in `src/components/illustrations/` and are exported through its `index.ts`.
- Pages are server components by default; interactivity is isolated in `'use client'` components (`ContactForm`, `Reveal`, `Header`, `Analytics`).
- The site is deployed with `output: 'standalone'` (see `next.config.js`, which also sets security headers).
