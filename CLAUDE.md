# CLAUDE.md

Guidance for AI assistants (and humans) working in this repository.

## What this is

**bilcoworks-site** is the marketing website and internal tooling for **Bilco Works
Incorporated**, a boutique HRIS implementation & integration consulting firm
(Calgary, Alberta). It is a single Next.js 14 application that serves two distinct
surfaces:

1. **Public marketing site** — SEO-optimized, animated, accessible pages describing
   the firm's services (home, services, approach, about, contact, faq).
2. **Private `/ops` dashboard** — an internal tool for discovering and triaging
   contract/job opportunities, backed by a SQLite database that is populated by a
   keyword-scoring ingestion pipeline pulling from job-board APIs.

## Tech stack

| Layer        | Choice                                                      |
|--------------|------------------------------------------------------------|
| Framework    | Next.js 14 (App Router) with `output: 'standalone'`        |
| Language     | TypeScript 5 (`strict: true`)                              |
| UI           | React 18 (Server Components by default), Tailwind CSS 3.4  |
| Database     | SQLite via Prisma 5 ORM                                     |
| Auth         | Cookie-based gate on `/ops` via `src/middleware.ts`        |
| Ingestion    | Standalone `ts-node` scripts in `scripts/`                 |
| Fonts        | `next/font/google` — Inter, Space Grotesk, JetBrains Mono  |

There is **no test framework** configured. Linting is `next lint` (ESLint with
`next/core-web-vitals`).

## Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # prisma generate + next build (run before considering a change "done")
npm start            # Start production server
npm run lint         # ESLint — run after any code change

# Database (Prisma)
npm run db:push      # Push schema to SQLite without a migration (fast iteration)
npm run db:migrate   # Create + apply a dev migration
npm run db:studio    # Open Prisma Studio GUI

# Ops data
npm run ingest       # Run the opportunity ingestion pipeline (scripts/ingest.ts)
npm run seed         # Seed sample opportunities (scripts/seed.ts)
```

There is no automated test command. To validate a change, run `npm run lint` and
`npm run build`; for behavioral changes, run `npm run dev` and exercise the page.

## Directory map

```
src/
  app/                      # App Router pages (each folder = a route)
    layout.tsx              # Root layout: fonts, <Header>/<Footer>, metadata, JSON-LD
    page.tsx                # Homepage
    services/ approach/ about/ contact/ faq/   # Marketing pages
    ops/
      page.tsx              # Internal opportunity dashboard (Server Component + Server Actions)
      login/page.tsx        # Login form that sets the ops_auth cookie
    sitemap.ts              # Programmatic sitemap (public routes only)
    globals.css             # Tailwind layers + custom component/utility classes
  components/
    Header.tsx ContactForm.tsx Reveal.tsx ...  # 'use client' interactive components
    illustrations/          # Hand-built animated SVG components + index.ts barrel
  lib/
    prisma.ts               # Singleton PrismaClient (avoids hot-reload connection storms)
  middleware.ts             # Auth gate for /ops/*
scripts/
  ingest.ts                # Fetch -> score -> upsert opportunities; logs SourceRun
  sources.config.ts        # Source definitions, scoring KEYWORDS, BOOSTS, RATE_LIMIT
  seed.ts / seed-realistic.ts  # Sample data seeders
  setup-cron.sh            # Installs a daily 6am cron job for ingestion
  tsconfig.json            # Separate CommonJS tsconfig for the scripts (excluded from app build)
prisma/
  schema.prisma            # Opportunity + SourceRun models (SQLite)
  migrations/              # Prisma migration history
public/                    # Static assets (favicon.svg, og-image.svg, robots.txt, etc.)
```

Note `tsconfig.json` **excludes** `scripts/`; the scripts compile under their own
`scripts/tsconfig.json` (CommonJS target) via `ts-node --transpile-only`.

## Architecture & conventions

### Rendering model
- Pages are **React Server Components by default**. Only add `'use client'` to
  components that need browser APIs, state, or event handlers (`Header`,
  `ContactForm`, `Reveal`, `Analytics`, the illustration animations).
- Mutations in `/ops` use **Server Actions** (functions marked `'use server'`
  inside `src/app/ops/page.tsx` and `login/page.tsx`), not API routes. After a
  mutation, call `revalidatePath('/ops')` to refresh the cached page.

### Database access
- Always import the shared client: `import { prisma } from '@/lib/prisma'`. Do not
  instantiate `new PrismaClient()` inside app code — the singleton in
  `src/lib/prisma.ts` prevents connection exhaustion during dev hot-reload.
  (The standalone `scripts/` create their own client, which is fine — they're
  separate processes.)
- `tags` on `Opportunity` is a **JSON array stored as a string** (SQLite has no
  array type). Always `JSON.stringify` on write and `JSON.parse` on read, guarded
  by try/catch.
- `Opportunity.status` is a free-form string with the convention:
  `new | interested | seen | applied | ignored`. Uniqueness is `@@unique([source, url])`,
  so ingestion **upserts** on that pair.

### Auth on `/ops`
- `src/middleware.ts` redirects any `/ops/*` request (except `/ops/login`) to the
  login page unless the `ops_auth` cookie equals `'authenticated'`.
- The login Server Action compares against `BASIC_AUTH_USER` / `BASIC_AUTH_PASS`
  env vars and sets an httpOnly cookie. This is a lightweight gate, **not** strong
  auth — treat the credentials as secrets and never commit them.

### The ingestion pipeline (`scripts/ingest.ts`)
1. Iterates `sources` from `sources.config.ts`. Each source has a `type`
   (`rss` | `adzuna` | `jooble` | `careerjet`) with a matching `fetch*` connector.
2. Each raw item is scored by `calculateScore()` using tiered `KEYWORDS`
   (ukgSpecific=50, primary=30, secondary=20, technical=10) plus location/role
   `BOOSTS` (only applied when an HR keyword already matched). Score is capped at 100.
3. Items scoring `< 15` (no real HR relevance) are dropped; the rest are upserted.
4. Every source run is recorded in the `SourceRun` table (item/error counts) and
   surfaced in the dashboard's "Recent Ingestion Runs" section.
- To add a source: extend the relevant `Source` interface usage in
  `sources.config.ts` and add a matching `case` in `processSource()` if it's a new
  `type`. API connectors read keys from env (`ADZUNA_APP_ID/KEY`, `JOOBLE_API_KEY`,
  `CAREERJET_AFFID`) and skip gracefully when absent.

### Styling
- **Use the Tailwind design tokens, not raw hex values.** The palette lives in
  `tailwind.config.js`: `surface`, `ink` (text), `rule` (borders), `accent` (navy),
  `teal`, and `status`. Example: `text-ink-muted`, `bg-surface-elevated`,
  `border-rule`.
- Reusable component classes are defined in `globals.css` under `@layer components`:
  `.btn-primary`, `.btn-secondary`, `.card`, `.container-wide`, `.container-narrow`,
  `.section`, plus the `.reveal` scroll-animation classes. Prefer these for buttons,
  cards, and page width over re-deriving the utility stacks.
- Custom easing `ease-out-expo` and animations (`reveal-up`, `float-slow`) are in
  the config. Scroll-reveal animation is the `<Reveal>` component (respects
  `prefers-reduced-motion`).
- The marketing `/ops` dashboard pages use a separate, plainer gray/blue Tailwind
  palette (`bg-gray-50`, `text-blue-600`) rather than the brand tokens — keep ops
  utilitarian and the marketing site on-brand.

### SEO
- Global metadata, OpenGraph, robots, and `application/ld+json` structured data
  (`Organization` / `ProfessionalService` / `WebSite` graph) live in
  `src/app/layout.tsx`. When adding/removing a **service**, update the
  `hasOfferCatalog` JSON-LD and the keyword list there to match.
- When adding a public route, add it to both `src/app/sitemap.ts` and the `Header`
  nav (`navigation` array) if it should be user-navigable. `/ops` is intentionally
  excluded from the sitemap and nav.

## Environment variables

Copy into `.env.local` (gitignored). None are required to run the marketing site;
they enable specific features:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX   # GA4; Analytics renders nothing if unset
DATABASE_URL="file:./prisma/dev.db"          # Prisma/SQLite
BASIC_AUTH_USER=...                          # /ops login
BASIC_AUTH_PASS=...                          # /ops login
ADZUNA_APP_ID=...                            # Ingestion (optional per source)
ADZUNA_APP_KEY=...
JOOBLE_API_KEY=...
CAREERJET_AFFID=...                          # Falls back to a demo affid
```

The contact form posts to an **external Cloudflare Worker**
(`bilcoworks-contact.*.workers.dev`), not to this app — there is no contact API
route in this repo.

## Git workflow

- Active development branch for this work: **`claude/claude-md-docs-tc9lne`**.
  Develop, commit, and push there; do not push to `main` without explicit
  permission.
- Write clear, descriptive commit messages. Do not open a pull request unless
  explicitly asked.

## Gotchas / things to know

- **No tests exist.** Don't claim a change is verified by tests; verify via
  `npm run build`, `npm run lint`, and manual checks.
- `src/app/ops/page.tsx`'s `runIngestion` Server Action shells out with a
  **hardcoded absolute `cwd`** (`/home/bilco-local/bilcoworks-site`). That path is
  environment-specific and will not match this repo's location — fix the path if
  wiring up the in-dashboard "Run Ingestion" button locally.
- The SQLite DB file (`prisma/dev.db`) is gitignored; a fresh checkout needs
  `npm run db:push` (or a migration) and optionally `npm run seed` before `/ops`
  shows data.
- `npm run build` runs `prisma generate` first — the Prisma client must be
  generated for the build (and for type-checking against the DB models) to succeed.
- The dashboard reads `source` filter options partly from a hardcoded `<select>`
  (`adzuna-ca`, `jooble`) and partly from distinct DB values; keep new source
  `name`s consistent if you want them filterable.
