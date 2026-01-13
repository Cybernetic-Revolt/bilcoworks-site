import * as dotenv from 'dotenv'
import * as path from 'path'

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

import { PrismaClient } from '@prisma/client'
import Parser from 'rss-parser'
import pLimit from 'p-limit'
import {
  sources,
  Source,
  RSSSource,
  AdzunaSource,
  JoobleSource,
  CareerjetSource,
  KEYWORDS,
  BOOSTS,
  RATE_LIMIT,
} from './sources.config'

const prisma = new PrismaClient()
const parser = new Parser()
const limit = pLimit(RATE_LIMIT.concurrency)

interface RawOpportunity {
  title: string
  url: string
  buyer?: string
  summary?: string
  publishedAt?: Date
  closeAt?: Date
}

// Scoring function - HRIS focused
function calculateScore(text: string): { score: number; tags: string[] } {
  const normalizedText = text.toLowerCase()
  const tags: string[] = []
  let score = 0
  let hasHRKeyword = false

  // UKG-specific keywords - highest priority (50 points each)
  for (const keyword of KEYWORDS.ukgSpecific) {
    if (normalizedText.includes(keyword.toLowerCase())) {
      score += 50
      tags.push(keyword)
      hasHRKeyword = true
    }
  }

  // Primary keywords - direct HRIS/platform mentions (30 points each)
  for (const keyword of KEYWORDS.primary) {
    if (normalizedText.includes(keyword.toLowerCase())) {
      score += 30
      tags.push(keyword)
      hasHRKeyword = true
    }
  }

  // Secondary keywords - HR-related terms (20 points each)
  for (const keyword of KEYWORDS.secondary) {
    if (normalizedText.includes(keyword.toLowerCase())) {
      score += 20
      tags.push(keyword)
      hasHRKeyword = true
    }
  }

  // Technical keywords (10 points each)
  for (const keyword of KEYWORDS.technical) {
    if (normalizedText.includes(keyword.toLowerCase())) {
      score += 10
      tags.push(keyword)
    }
  }

  // Location boosts - only apply if we have HR relevance
  if (hasHRKeyword) {
    for (const [keyword, boost] of Object.entries(BOOSTS)) {
      if (normalizedText.includes(keyword.toLowerCase())) {
        score += boost
        if (!tags.includes(keyword)) {
          tags.push(keyword)
        }
      }
    }
  }

  // Cap at 100
  score = Math.min(score, 100)

  // Dedupe tags
  const uniqueTags = [...new Set(tags)]

  return { score, tags: uniqueTags }
}

// RSS Connector
async function fetchRSS(source: RSSSource): Promise<RawOpportunity[]> {
  try {
    const feed = await parser.parseURL(source.url)
    return feed.items.map((item) => ({
      title: item.title || 'Untitled',
      url: item.link || item.guid || '',
      summary: item.contentSnippet || item.content || '',
      publishedAt: item.pubDate ? new Date(item.pubDate) : undefined,
      buyer: item.creator || undefined,
    }))
  } catch (error) {
    console.error(`RSS fetch error for ${source.name}:`, error)
    throw error
  }
}

// Adzuna API Connector
async function fetchAdzuna(source: AdzunaSource): Promise<RawOpportunity[]> {
  const appId = process.env.ADZUNA_APP_ID
  const appKey = process.env.ADZUNA_APP_KEY

  if (!appId || !appKey) {
    throw new Error('ADZUNA_APP_ID and ADZUNA_APP_KEY environment variables required')
  }

  const opportunities: RawOpportunity[] = []

  for (const searchQuery of source.searches) {
    try {
      const url = `https://api.adzuna.com/v1/api/jobs/${source.country}/search/1?app_id=${appId}&app_key=${appKey}&results_per_page=50&what=${encodeURIComponent(searchQuery)}&content-type=application/json`

      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
        },
      })

      if (!response.ok) {
        console.error(`Adzuna API error for "${searchQuery}": HTTP ${response.status}`)
        continue
      }

      const data = await response.json() as {
        results?: Array<{
          title?: string
          redirect_url?: string
          id?: string
          company?: { display_name?: string }
          description?: string
          created?: string
        }>
      }

      if (data.results && Array.isArray(data.results)) {
        for (const job of data.results) {
          opportunities.push({
            title: job.title || 'Untitled',
            url: job.redirect_url || job.id || '',
            buyer: job.company?.display_name || undefined,
            summary: job.description?.slice(0, 2000) || undefined,
            publishedAt: job.created ? new Date(job.created) : undefined,
          })
        }
      }

      // Rate limit between searches
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`Adzuna search error for "${searchQuery}":`, error)
    }
  }

  return opportunities
}

// Jooble API Connector
async function fetchJooble(source: JoobleSource): Promise<RawOpportunity[]> {
  const apiKey = process.env.JOOBLE_API_KEY

  if (!apiKey) {
    throw new Error('JOOBLE_API_KEY environment variable required')
  }

  const opportunities: RawOpportunity[] = []

  for (const search of source.searches) {
    try {
      const response = await fetch(`https://jooble.org/api/${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keywords: search.keywords,
          location: search.location || '',
          page: 1,
        }),
      })

      if (!response.ok) {
        console.error(`Jooble API error for "${search.keywords}": HTTP ${response.status}`)
        continue
      }

      const data = await response.json() as {
        jobs?: Array<{
          title?: string
          link?: string
          company?: string
          snippet?: string
          updated?: string
        }>
      }

      if (data.jobs && Array.isArray(data.jobs)) {
        for (const job of data.jobs) {
          opportunities.push({
            title: job.title || 'Untitled',
            url: job.link || '',
            buyer: job.company || undefined,
            summary: job.snippet?.slice(0, 2000) || undefined,
            publishedAt: job.updated ? new Date(job.updated) : undefined,
          })
        }
      }

      // Rate limit between searches
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`Jooble search error for "${search.keywords}":`, error)
    }
  }

  return opportunities
}

// Careerjet API Connector
async function fetchCareerjet(source: CareerjetSource): Promise<RawOpportunity[]> {
  const affid = process.env.CAREERJET_AFFID || 'e8dde25e692cf0c12c55e7781356c73a' // Default demo affid

  const opportunities: RawOpportunity[] = []

  // Map locale to Careerjet domain
  const localeDomains: Record<string, string> = {
    'en_US': 'www.careerjet.com',
    'en_CA': 'www.careerjet.ca',
    'en_GB': 'www.careerjet.co.uk',
    'en_AU': 'www.careerjet.com.au',
  }

  const domain = localeDomains[source.locale] || 'www.careerjet.com'

  for (const search of source.searches) {
    try {
      const params = new URLSearchParams({
        affid: affid,
        keywords: search.keywords,
        location: search.location || '',
        page: '1',
        pagesize: '50',
        sort: 'date',
      })

      const url = `https://public.api.careerjet.net/search?${params.toString()}&locale_code=${source.locale}`

      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'BilcoWorks-OpportunityFinder/1.0',
        },
      })

      if (!response.ok) {
        console.error(`Careerjet API error for "${search.keywords}": HTTP ${response.status}`)
        continue
      }

      const data = await response.json() as {
        jobs?: Array<{
          title?: string
          url?: string
          company?: string
          description?: string
          date?: string
          salary?: string
          locations?: string
        }>
      }

      if (data.jobs && Array.isArray(data.jobs)) {
        for (const job of data.jobs) {
          opportunities.push({
            title: job.title || 'Untitled',
            url: job.url || '',
            buyer: job.company || undefined,
            summary: job.description?.slice(0, 2000) || undefined,
            publishedAt: job.date ? new Date(job.date) : undefined,
          })
        }
      }

      // Rate limit between searches
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`Careerjet search error for "${search.keywords}":`, error)
    }
  }

  return opportunities
}

// Process a single source
async function processSource(source: Source): Promise<{ itemCount: number; errors: string[] }> {
  const errors: string[] = []
  let rawOpportunities: RawOpportunity[] = []

  try {
    switch (source.type) {
      case 'rss':
        rawOpportunities = await fetchRSS(source)
        break
      case 'adzuna':
        rawOpportunities = await fetchAdzuna(source)
        break
      case 'jooble':
        rawOpportunities = await fetchJooble(source)
        break
      case 'careerjet':
        rawOpportunities = await fetchCareerjet(source)
        break
    }
  } catch (error) {
    errors.push(`Fetch error: ${error instanceof Error ? error.message : String(error)}`)
    return { itemCount: 0, errors }
  }

  console.log(`  Found ${rawOpportunities.length} raw opportunities`)

  let itemCount = 0
  let skippedLowScore = 0

  for (const raw of rawOpportunities) {
    if (!raw.url) continue

    const textToScore = [raw.title, raw.summary, raw.buyer].filter(Boolean).join(' ')
    const { score, tags } = calculateScore(textToScore)

    // Skip opportunities without HR relevance (need at least one HR keyword = 15+ points)
    if (score < 15) {
      skippedLowScore++
      continue
    }

    try {
      await prisma.opportunity.upsert({
        where: {
          source_url: {
            source: source.name,
            url: raw.url,
          },
        },
        create: {
          title: raw.title.slice(0, 500), // Truncate long titles
          buyer: raw.buyer?.slice(0, 255),
          source: source.name,
          url: raw.url,
          summary: raw.summary?.slice(0, 2000),
          publishedAt: raw.publishedAt,
          closeAt: raw.closeAt,
          matchScore: score,
          tags: JSON.stringify(tags),
          status: 'new',
        },
        update: {
          title: raw.title.slice(0, 500),
          buyer: raw.buyer?.slice(0, 255),
          summary: raw.summary?.slice(0, 2000),
          closeAt: raw.closeAt,
          matchScore: score,
          tags: JSON.stringify(tags),
        },
      })
      itemCount++
    } catch (error) {
      errors.push(`DB error: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  console.log(`  Saved ${itemCount} relevant opportunities (skipped ${skippedLowScore} low-score)`)

  return { itemCount, errors }
}

// Main ingestion function
async function runIngestion() {
  console.log('Starting ingestion...')
  console.log(`Processing ${sources.length} sources\n`)

  const results = await Promise.all(
    sources.map((source) =>
      limit(async () => {
        console.log(`Processing: ${source.name}`)
        const startedAt = new Date()

        const { itemCount, errors } = await processSource(source)

        // Log the run
        await prisma.sourceRun.create({
          data: {
            source: source.name,
            startedAt,
            finishedAt: new Date(),
            itemCount,
            errorCount: errors.length,
            errors: errors.length > 0 ? JSON.stringify(errors) : null,
          },
        })

        if (errors.length > 0) {
          console.log(`  Errors: ${errors.join(', ')}`)
        }
        console.log('')

        // Rate limit delay
        await new Promise((resolve) => setTimeout(resolve, RATE_LIMIT.delayMs))

        return { source: source.name, itemCount, errors }
      })
    )
  )

  const totalItems = results.reduce((sum, r) => sum + r.itemCount, 0)
  const totalErrors = results.reduce((sum, r) => sum + r.errors.length, 0)

  console.log(`Ingestion complete: ${totalItems} relevant items saved, ${totalErrors} errors`)

  await prisma.$disconnect()
}

// Run if called directly
runIngestion().catch((error) => {
  console.error('Ingestion failed:', error)
  process.exit(1)
})
