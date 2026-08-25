import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'AI Engineering | Voice Agents & Applied ML | Bilco Works',
  description:
    'AI systems that do real work: TwoRing, our 24/7 AI receptionist, a self-hosted voice engine, and machine learning proven under competition pressure. A practitioner verifies every result.',
  alternates: {
    canonical: 'https://bilcoworks.com/ai',
  },
  openGraph: {
    title: 'AI Engineering | Bilco Works',
    description:
      'AI systems that do real work: voice agents, applied ML, and LLM systems - built, hosted, and verified by us.',
    url: 'https://bilcoworks.com/ai',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Engineering | Bilco Works',
    description:
      'AI systems that do real work: voice agents, applied ML, and LLM systems.',
  },
}

const projects = [
  {
    kind: 'Product',
    title: 'TwoRing & Switchboard',
    summary:
      'A 24/7 AI receptionist for trade businesses - and the self-hosted voice engine we are building underneath it: LiveKit telephony, provider failover, full call recording.',
    highlight: 'tworing.ai',
    href: '/ai/tworing',
  },
  {
    kind: 'Competition',
    title: 'The Knee Ledger',
    summary:
      'Teaching one machine to read knee MRIs against 2,300 teams in the RSNA AI Challenge - with a rule that every claim needs a receipt and nothing ships without clearing an automated gate.',
    highlight: '0.899 public AUC',
    href: '/ai/knee-ledger',
  },
  {
    kind: 'Systems',
    title: 'AllSpark',
    summary:
      'An autonomous algorithmic trading platform: ML signal generation behind hard risk gates, live market data, and monitoring that assumes things go wrong.',
    highlight: 'ML + risk engineering',
    href: '/ai/allspark',
  },
]

const principles = [
  {
    heading: 'AI does the work, a human signs it',
    text: 'Every AI system we ship has a practitioner accountable for its output. On consulting engagements that means AI on the first pass - variance triage, reconciliation, document parsing - and a named person verifying every result.',
  },
  {
    heading: 'Every provider has an exit',
    text: 'Cloud models are backed by local inference we run ourselves. No single vendor outage can take down a system we operate, because the fallback is in the rack.',
  },
  {
    heading: 'Proven where the leaderboard keeps score',
    text: 'We test our methods in open competition, where a wrong claim costs rank. The discipline that survives there - gated experiments, receipts for every claim - is the discipline we bring to client work.',
  },
]

export default function AIPage() {
  return (
    <div>
      <section className="relative section-padding bg-surface-secondary border-b border-rule overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
        <div className="container-wide">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">AI Engineering</p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.08]">
              AI that <span className="text-gradient">does real work</span>
            </h1>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed">
              Voice agents that answer real customers, machine learning
              proven under competition pressure, and LLM systems woven into
              production workflows - built, hosted, and verified by us.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Reveal
                as="article"
                key={project.title}
                delay={index * 70}
                className="card group flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{project.kind}</span>
                  <span className="text-xs font-mono text-accent/80">
                    {project.highlight}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-medium text-ink">
                  <Link href={project.href} className="hover:text-accent transition-colors">
                    {project.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed flex-1">
                  {project.summary}
                </p>
                <Link
                  href={project.href}
                  className="mt-5 text-sm font-medium text-accent link-underline self-start"
                >
                  Read the story
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-elevated section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-medium text-ink">
              How we do AI
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-x-12 gap-y-10">
            {principles.map((item, index) => (
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

      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-medium">
              Have a job for a machine?
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#A8B8C8' }}>
              Tell us the work you want off a human&apos;s plate. We will
              tell you honestly whether AI can do it - and stand behind it if
              we build it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 mt-8 px-6 py-3 bg-surface-elevated text-ink font-medium rounded-lg shadow-elevated hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
            >
              Contact us
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
