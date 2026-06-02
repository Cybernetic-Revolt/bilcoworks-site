# BilcoWorks Site

## Project Overview
Next.js 14 site for BilcoWorks — a consulting/services business. Includes a government opportunity tracker backed by SQLite via Prisma.

## Tech Stack
- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **Database:** SQLite via Prisma ORM
- **Scripts:** ts-node scripts for data ingestion and seeding

## Key Directories
- `src/app/` — Next.js App Router pages (home, services, about, contact, faq, approach, ops)
- `src/components/` — React components (Header, Footer, ContactForm, illustrations)
- `src/lib/prisma.ts` — Prisma client singleton
- `prisma/schema.prisma` — Database schema (Opportunity model)
- `scripts/` — Ingestion, seeding, and cron setup scripts

## Common Commands
```bash
npm run dev          # Start dev server
npm run build        # Generate Prisma client + build
npm run lint         # ESLint
npm run db:push      # Push schema changes to DB
npm run db:migrate   # Run Prisma migrations
npm run seed         # Seed database
npm run ingest       # Run opportunity ingestion
```

## Environment
- Requires `DATABASE_URL` env var (SQLite path, e.g. `file:./dev.db`)
- Node.js 18+

## Conventions
- TypeScript strict mode
- ESLint extends `next/core-web-vitals`
- Path alias: `@/*` maps to `./src/*`
- Prisma generates client at build time (`npx prisma generate` runs before `next build`)
