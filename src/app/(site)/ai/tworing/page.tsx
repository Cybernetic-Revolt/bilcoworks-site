import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { Chapter, Narrative, SectionHead, TileGrid } from '@/components/Section'

export const metadata: Metadata = {
  title: 'TwoRing & Switchboard | Voice AI | Bilco Works',
  description:
    'TwoRing is a 24/7 AI receptionist for trade businesses. Switchboard is the self-hosted voice engine we are building underneath it: LiveKit, provider failover, and full call recording.',
  alternates: { canonical: 'https://bilcoworks.com/ai/tworing' },
  openGraph: {
    title: 'TwoRing & Switchboard | Bilco Works',
    description:
      'A 24/7 AI receptionist for trade businesses, and the self-hosted voice engine underneath it.',
    url: 'https://bilcoworks.com/ai/tworing',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TwoRing & Switchboard | Bilco Works',
    description:
      'A 24/7 AI receptionist for trade businesses, and the self-hosted voice engine underneath it.',
  },
}

const engineFacts = [
  {
    title: 'Self-hosted media stack',
    body: 'LiveKit for real-time media and SIP telephony, running on infrastructure we operate. The hosted orchestration layer it replaces was joined to our platform by exactly two HTTP contracts — get those right and nothing else has to change.',
  },
  {
    title: 'Every provider has an exit',
    body: 'Speech-to-text, the LLM, and text-to-speech each sit behind an adapter with mid-call failover. Cloud primaries (Deepgram, Claude, ElevenLabs, Cartesia) are backed by local options like Whisper and Ollama, so no single vendor outage can take the phones down.',
  },
  {
    title: 'Calls leave a paper trail',
    body: 'Every call is recorded, transcribed, and summarized into the lead record automatically. The same instinct as our consulting work: if it is not written down, it did not happen.',
  },
  {
    title: 'Compliance is a gate, not a memo',
    body: 'Outbound dialing passes through an enforced compliance check before a call is ever placed — CASL-compliant by construction, not by policy document.',
  },
]

export default function TwoRingPage() {
  return (
    <>
      <PageHero
        eyebrow="AI engineering · Product"
        plate="bloom"
        title="TwoRing & Switchboard."
        lede="An AI receptionist that answers within two rings — and the self-hosted voice engine we are building so the whole stack runs on our own terms."
      >
        <Link href="/ai" className="pill">
          Back to AI Engineering
        </Link>
      </PageHero>

      <Chapter tone="paper">
        <Narrative
          tone="paper"
          label="The product"
          statement="A receptionist that never lets a call go to voicemail."
        >
          <p>
            <a
              href="https://tworing.ai"
              className="link-ink"
              target="_blank"
              rel="noopener noreferrer"
            >
              tworing.ai
            </a>{' '}
            is a 24/7 AI receptionist service for trade businesses — HVAC,
            plumbing, electrical, lawn care, real estate. A missed call in the
            trades is usually a lost job: the caller simply dials the next
            company on the list. TwoRing answers forwarded calls within two
            rings, books appointments into the customer&apos;s calendar mid-call,
            and emails a summary of every lead.
          </p>
          <p>
            Each month, customers get a &ldquo;Found Money Report&rdquo;: the
            calls that would have gone to voicemail, what they were worth, and
            what got booked instead. Canadian-built, CASL-compliant, and
            month-to-month — the product has to earn its keep every thirty days.
          </p>
        </Narrative>
      </Chapter>

      <Chapter tone="ground-2">
        <SectionHead
          eyebrow="The engine"
          title="Why we are replacing the hosted stack."
          lede="TwoRing launched on a hosted voice-AI orchestrator. It worked, but it owned the most important minutes of every customer relationship. Switchboard is our replacement: an internal voice platform designed as if it were a public product — API-first and multi-tenant — but consumed by our own projects first."
        />
        <TileGrid items={engineFacts} columns={4} />
      </Chapter>

      <Chapter tone="ground">
        <Narrative
          label="What it proves"
          statement="Integration work under the harshest conditions."
        >
          <p>
            Building a telephony platform is integration work at its least
            forgiving: real-time audio, third-party APIs that must fail over
            mid-call, and customers who judge you one ring at a time. The
            patterns Switchboard forces us to get right — provider abstractions,
            durable webhooks, recording and reconciliation — are the same ones we
            apply to{' '}
            <Link href="/hris" className="link-quiet">
              payroll integrations and HRIS rescues
            </Link>
            , where the tolerance for dropped messages is exactly as low.
          </p>
        </Narrative>
      </Chapter>
    </>
  )
}
