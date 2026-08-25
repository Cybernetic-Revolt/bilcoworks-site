import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'TwoRing & Switchboard | Voice AI | Bilco Works',
  description:
    'TwoRing is a 24/7 AI receptionist for trade businesses. Switchboard is the self-hosted voice engine we are building underneath it: LiveKit, provider failover, and full call recording.',
  alternates: {
    canonical: 'https://bilcoworks.com/ai/tworing',
  },
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
    heading: 'Self-hosted media stack',
    text: 'LiveKit for real-time media and SIP telephony, running on infrastructure we operate. The hosted orchestration layer it replaces was joined to our platform by exactly two HTTP contracts - get those right and nothing else has to change.',
  },
  {
    heading: 'Every provider has an exit',
    text: 'Speech-to-text, the LLM, and text-to-speech each sit behind an adapter with mid-call failover. Cloud primaries (Deepgram, Claude, ElevenLabs, Cartesia) are backed by local options like Whisper and Ollama, so no single vendor outage can take the phones down.',
  },
  {
    heading: 'Calls leave a paper trail',
    text: 'Every call is recorded, transcribed, and summarized into the lead record automatically. The same instinct as our consulting work: if it is not written down, it did not happen.',
  },
  {
    heading: 'Compliance is a gate, not a memo',
    text: 'Outbound dialing passes through an enforced compliance check before a call is ever placed - CASL-compliant by construction, not by policy document.',
  },
]

export default function TwoRingPage() {
  return (
    <div>
      <section className="relative section-padding bg-surface-secondary border-b border-rule overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
        <div className="container-wide">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">AI Engineering / Product</p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.08]">
              TwoRing &amp; Switchboard
            </h1>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed">
              An AI receptionist that answers within two rings - and the
              self-hosted voice engine we are building so the whole stack runs
              on our own terms.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink">
              The product: a receptionist that never lets a call go to voicemail
            </h2>
            <p className="mt-4 text-body">
              <a
                href="https://tworing.ai"
                className="text-accent link-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                tworing.ai
              </a>{' '}
              is a 24/7 AI receptionist service for trade businesses - HVAC,
              plumbing, electrical, lawn care, real estate. A missed call in
              the trades is usually a lost job: the caller simply dials the
              next company on the list. TwoRing answers forwarded calls within
              two rings, books appointments into the customer&apos;s calendar
              mid-call, and emails a summary of every lead.
            </p>
            <p className="mt-4 text-body">
              Each month, customers get a &ldquo;Found Money Report&rdquo;: the
              calls that would have gone to voicemail, what they were worth,
              and what got booked instead. Canadian-built, CASL-compliant, and
              month-to-month - the product has to earn its keep every thirty
              days.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink">
              The engine: why we are replacing the hosted stack
            </h2>
            <p className="mt-4 text-body max-w-2xl">
              TwoRing launched on a hosted voice-AI orchestrator. It worked,
              but it owned the most important minutes of every customer
              relationship. Switchboard is our replacement: an internal voice
              platform designed as if it were a public product - API-first and
              multi-tenant - but consumed by our own projects first.
            </p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {engineFacts.map((item, index) => (
              <Reveal
                key={item.heading}
                delay={index * 70}
                className="relative pl-6 border-l-2 border-rule transition-colors duration-300 hover:border-accent"
              >
                <h3 className="font-medium text-ink">{item.heading}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink">
              What this proves for client work
            </h2>
            <p className="mt-4 text-body">
              Building a telephony platform is integration work under the
              harshest conditions: real-time audio, third-party APIs that must
              fail over mid-call, and customers who judge you one ring at a
              time. The patterns Switchboard forces us to get right - provider
              abstractions, durable webhooks, recording and reconciliation -
              are the same ones we apply to payroll integrations and HRIS
              rescues, where the tolerance for dropped messages is exactly as
              low.
            </p>
            <div className="mt-8">
              <Link href="/ai" className="text-ink font-medium link-underline">
                Back to AI Engineering
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
