<div align="center">

# Bilco Works

### HRIS Implementation & Integration Consulting

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.22-2D3748?style=flat-square&logo=prisma&logoColor=white)](https://www.prisma.io/)

*Enterprise HR systems expertise for UKG, Workday, and beyond*

[Live Site](https://bilcoworks.com) · [Services](#services) · [Tech Stack](#tech-stack)

---

</div>

## Overview

Bilco Works is a boutique HRIS consulting firm specializing in enterprise HR system implementations, stabilizations, and integrations. This repository contains the company website and internal tools.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│    ██████╗ ██╗██╗      ██████╗ ██████╗                     │
│    ██╔══██╗██║██║     ██╔════╝██╔═══██╗                    │
│    ██████╔╝██║██║     ██║     ██║   ██║                    │
│    ██╔══██╗██║██║     ██║     ██║   ██║                    │
│    ██████╔╝██║███████╗╚██████╗╚██████╔╝                    │
│    ╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═════╝                     │
│                                                             │
│    W O R K S                                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Features

<table>
<tr>
<td width="50%">

### Public Website
- Responsive, accessible design
- Custom SVG illustrations with subtle animations
- SEO optimized with sitemap generation
- Google Analytics integration
- Contact form with email delivery

</td>
<td width="50%">

### Private Ops Dashboard
- Contract opportunity discovery
- Automated job ingestion from multiple APIs
- Intelligent relevance scoring
- Quick-action workflow management
- Source and status filtering

</td>
</tr>
</table>

## Services

| Service | Description |
|---------|-------------|
| **Implementation** | End-to-end HRIS deployment with UKG, Workday, and other platforms |
| **Stabilization** | Performance optimization and issue resolution for existing systems |
| **Integration** | Seamless data flows between HR, payroll, benefits, and finance systems |
| **Advisory** | Strategic guidance on HR technology roadmaps and vendor selection |

## Tech Stack

```
Frontend          Backend           Database          Infrastructure
─────────         ───────           ────────          ──────────────
Next.js 14        Server Actions    SQLite            Vercel-ready
React 18          API Routes        Prisma ORM        Edge Middleware
TypeScript        Node.js
Tailwind CSS
```

## Project Structure

```
bilcoworks-site/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Homepage
│   │   ├── services/           # Services page
│   │   ├── approach/           # Methodology page
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact form
│   │   ├── faq/                # FAQ page
│   │   └── ops/                # Private dashboard (auth protected)
│   ├── components/
│   │   ├── illustrations/      # Custom SVG components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ContactForm.tsx
│   ├── lib/
│   │   └── prisma.ts           # Database client
│   └── middleware.ts           # Auth middleware for /ops
├── scripts/
│   ├── ingest.ts               # Job opportunity ingestion
│   └── sources.config.ts       # Data source configuration
├── prisma/
│   └── schema.prisma           # Database schema
└── public/
    └── ...                     # Static assets
```

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Initialize database
npx prisma db push

# Run development server
npm run dev
```

## Environment Variables

```env
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Database
DATABASE_URL="file:./prisma/dev.db"

# Ops Dashboard Auth
BASIC_AUTH_USER=your_username
BASIC_AUTH_PASS=your_password

# Job APIs (optional)
ADZUNA_APP_ID=your_app_id
ADZUNA_APP_KEY=your_app_key
JOOBLE_API_KEY=your_api_key
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run ingest` | Run job opportunity ingestion |

## Design Philosophy

> *"Simplicity is the ultimate sophistication."*

The website embraces a clean, professional aesthetic with:

- **Muted color palette** — Professional blues and grays
- **Subtle animations** — Purposeful motion that doesn't distract
- **Clear typography** — Easy to read, easy to scan
- **Focused content** — Every element serves a purpose

---

<div align="center">

**Bilco Works Incorporated**

HRIS & Systems Consulting

*Calgary, Alberta, Canada*

</div>
