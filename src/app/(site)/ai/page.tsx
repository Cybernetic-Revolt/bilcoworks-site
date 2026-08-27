import type { Metadata } from 'next'
import Link from 'next/link'
import ContactCta from '@/components/ContactCta'
import { bestScore } from '@/content/knee'
import Dither from '@/components/Dither'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { Chapter, SectionHead, TileGrid } from '@/components/Section'

export const metadata: Metadata = {
  title: 'AI Engineering | Voice Agents & Applied ML | Bilco Works',
  description:
    'AI systems that do real work: TwoRing, our 24/7 AI receptionist, a self-hosted voice engine, and machine learning proven under competition pressure. A practitioner verifies every result.',
  alternates: { canonical: 'https://bilcoworks.com/ai' },
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
      'A 24/7 AI receptionist for trade businesses — and the self-hosted voice engine we are building underneath it: LiveKit telephony, provider failover, full call recording.',
    highlight: 'tworing.ai',
    href: '/ai/tworing',
    plate: 'bloom' as const,
  },
  {
    kind: 'Competition',
    title: 'The Knee Ledger',
    summary:
      'Competition machine learning on knee MRI, run as an evidence ledger: every experiment declares its pass-bar before it runs, and roughly forty that failed are written down beside the ones that worked.',
    highlight: `${bestScore} public AUC`,
    href: '/ai/knee-ledger',
    plate: 'interference' as const,
  },
  {
    kind: 'Systems',
    title: 'AllSpark',
    summary:
      'An autonomous algorithmic trading platform: ML signal generation behind hard risk gates, live market data, and monitoring that assumes things go wrong.',
    highlight: 'ML + risk engineering',
    href: '/ai/allspark',
    plate: 'lattice' as const,
  },
]

const principles = [
  {
    title: 'AI does the work, a human signs it',
    body: 'Every AI system we ship has a practitioner accountable for its output. On consulting engagements that means AI on the first pass — variance triage, reconciliation, document parsing — and a named person verifying every result.',
  },
  {
    title: 'Nothing depends on one vendor',
    body: 'Speech, language and voice each sit behind an adapter that can fail over mid-request, with a local model underneath the cloud one. What that costs to build, and why we pay it, is on the TwoRing page.',
  },
  {
    title: 'Proven where the leaderboard keeps score',
    body: 'We test our methods in open competition, where a wrong claim costs rank. The discipline that survives there — gated experiments, receipts for every claim — is the discipline we bring to client work.',
  },
]

export default function AIPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Practice"
        plate="bloom"
        title="AI that does real work."
        lede="Voice agents that answer real customers, machine learning proven under competition pressure, and LLM systems woven into production workflows — built, hosted, and verified by us."
      />

      <Chapter tone="paper">
        <SectionHead
          tone="paper"
          eyebrow="What we have built"
          title="Three systems, running."
          lede="Each of these is ours: we designed it, we host it, and we are on the hook when it misbehaves."
        />

        <div className="mt-14 grid gap-px border border-hair-ink bg-ink/10 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              as="article"
              key={project.title}
              delay={i * 80}
              className="group flex flex-col bg-paper-3 p-8 md:p-9"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="eyebrow-ink">{project.kind}</span>
                <span className="font-mono text-micro-2 uppercase text-ink-3">
                  {project.highlight}
                </span>
              </div>

              <Dither
                plate={project.plate}
                cols={36}
                aspect={0.5}
                className="mt-8 h-20 w-full text-ink/25 transition-colors duration-500 group-hover:text-signal-deep/50"
              />

              <h3 className="mt-8 text-d4 text-ink">
                <Link href={project.href} className="link-ink">
                  {project.title}
                </Link>
              </h3>
              <p className="copy-ink mt-4 flex-1">{project.summary}</p>
              <Link
                href={project.href}
                className="mt-7 self-start font-mono text-micro-2 uppercase text-signal-deep"
              >
                Read the story →
              </Link>
            </Reveal>
          ))}
        </div>
      </Chapter>

      <Chapter tone="ground-2">
        <SectionHead
          eyebrow="How we do AI"
          title="Three rules we do not bend."
        />
        <TileGrid items={principles} />
      </Chapter>

      <ContactCta
        heading="Have a job for a machine?"
        body="Tell us the work you want off a human's plate. We will tell you honestly whether AI can do it — and stand behind it if we build it."
        note="We reply within one business day"
      />
    </>
  )
}
