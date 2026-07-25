# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website plus internal tooling for Bilco Works, an HRIS consulting firm (UKG, Workday, etc.) in Calgary. Next.js 14 (App Router) + TypeScript + Tailwind CSS + Prisma with SQLite. There are two distinct halves:

1. **Public marketing site** — `/`, `/services`, `/approach`, `/about`, `/contact`, `/faq`
2. **Private ops dashboard** — `/ops`, a cookie-gated contract-opportunity tracker fed by a standalone ingestion script

## Commands

```bash
npm run dev          # Dev server
npm run build        # prisma generate + next build (standalone output)
npm run lint         # next lint (eslint-config-next/core-web-vitals)
npm run ingest       # Run the job-opportunity ingestion pipeline
npm run seed         # Seed sample opportunities
npm run db:push      # Push schema to SQLite (dev)
npm run db:migrate   # prisma migrate dev
npm run db:studio    # Prisma Studio
```

There is no test suite. Verify changes with `npm run lint` and `npm run build`.

Environment variables live in `.env.local` (see README for the full list): `DATABASE_URL` (SQLite file), `BASIC_AUTH_USER`/`BASIC_AUTH_PASS` (ops login), `NEXT_PUBLIC_GA_MEASUREMENT_ID`, and optional job-API keys (`ADZUNA_APP_ID`/`ADZUNA_APP_KEY`, `JOOBLE_API_KEY`).

## Architecture

### Two TypeScript worlds

The root `tsconfig.json` **excludes** `scripts/`. Ingestion code under `scripts/` runs via `ts-node --transpile-only` with its own `scripts/tsconfig.json` (CommonJS, no JSX, no `@/` alias). Don't import Next.js/app code from `scripts/` or vice versa — the only shared surface is the Prisma client and schema. `scripts/ingest.ts` loads `.env.local` itself via dotenv.

The `@/*` path alias maps to `src/*` (app code only).

### Public site

- All pages are server components. Anything interactive is a `'use client'` component in `src/components/` (Header, ContactForm, Reveal, CopyBox, Analytics) or `src/components/illustrations/` (animated SVGs: HeroIllustration, IntegrationDiagram, PhaseFlow, ServiceIcons).
- The contact form does **not** use an API route — it POSTs to an external Cloudflare Worker (`bilcoworks-contact.cloudflare-com-14e.workers.dev/submit`). There are no API routes in the project at all; mutations use server actions.
- SEO: site-wide metadata + fonts in `src/app/layout.tsx` (metadataBase is `https://bilcoworks.com`), per-page `metadata` exports, `src/app/sitemap.ts`. When adding a public page, add it to the sitemap.
- `Reveal` wraps content for the scroll-into-view fade animation used across the marketing pages (respects reduced motion).

### Ops dashboard and auth

- `src/middleware.ts` guards `/ops/:path*`: it redirects to `/ops/login` unless the `ops_auth` cookie equals `authenticated`. The login server action (`src/app/ops/login/page.tsx`) checks credentials against `BASIC_AUTH_USER`/`BASIC_AUTH_PASS` and sets that cookie (httpOnly, 1 week).
- `src/app/ops/page.tsx` is a single server component containing inline `'use server'` actions for status changes (interested/dismiss/etc.) that call Prisma directly and `revalidatePath('/ops')`.
- The "run ingestion" server action shells out to `npm run ingest` with a **hardcoded cwd of `/home/bilco-local/bilcoworks-site`** — the production server's deploy path. It will fail silently elsewhere; keep that in mind if touching deploy paths.

### Data model and ingestion pipeline

Schema (`prisma/schema.prisma`): `Opportunity` (deduped by `@@unique([source, url])`) and `SourceRun` (per-source run log). SQLite quirks to preserve:

- `Opportunity.tags` is a **JSON array stored as a string** — always `JSON.parse`/`JSON.stringify` it.
- `Opportunity.status` is a plain string. The schema comment says `new | seen | applied | ignored`, but the ops UI also uses `interested` — the real set is those five.

Ingestion flow (`scripts/ingest.ts` + `scripts/sources.config.ts`):

1. `sources.config.ts` declares typed sources (RSS, Adzuna, Jooble, Careerjet) plus the scoring config: `KEYWORDS` tiers (UKG-specific 50pts → primary 30 → secondary 20 → technical 10) and `BOOSTS` (Canadian locations, contract/consultant roles, staffing agencies).
2. `ingest.ts` fetches each source (rate-limited via `p-limit`, 2s delay), scores title+summary text, **discards anything scoring below 15**, and requires at least one HR keyword before location/role boosts apply.
3. Results upsert into `Opportunity` (so re-runs are idempotent) and each source run is recorded in `SourceRun`.

To tune what the dashboard surfaces, edit `sources.config.ts` (keywords, boosts, sources) rather than the ingest logic. `scripts/setup-cron.sh` installs a daily 6 AM cron for ingestion on the server.

### Prisma client usage

App code must import the singleton from `src/lib/prisma.ts` (`import { prisma } from '@/lib/prisma'`) — never instantiate `PrismaClient` in app code. Scripts create their own client and `$disconnect()` when done.

## Design conventions

Tailwind is configured with a custom semantic palette in `tailwind.config.js` — use these tokens, not raw grays/blues:

- `surface` / `surface-secondary` / `surface-elevated` — backgrounds
- `ink` / `ink-muted` / `ink-subtle` — text
- `rule` / `rule-subtle` / `rule-strong` — borders
- `accent` (navy) and `teal` — accents, each with `hover`/`light`/`muted` variants
- `status-success` / `status-warning` / `status-error`

Fonts come from `next/font` in the root layout: `font-sans` (Inter), `font-display` (Space Grotesk, headings), `font-mono` (JetBrains Mono). The overall aesthetic is muted and professional — subtle animation, restrained color (see README's design philosophy).

Exception: the `/ops` pages use plain Tailwind grays/blues rather than the design tokens; match the file you're editing.
