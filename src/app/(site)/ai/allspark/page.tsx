import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { Chapter, Narrative, SectionHead, TileGrid } from '@/components/Section'

export const metadata: Metadata = {
  title: 'AllSpark | Algorithmic Trading Systems | Bilco Works',
  description:
    'An autonomous algorithmic trading platform: ML signal generation behind hard risk gates, live market data, and monitoring that assumes things go wrong.',
  alternates: { canonical: 'https://bilcoworks.com/ai/allspark' },
  openGraph: {
    title: 'AllSpark | Bilco Works',
    description:
      'ML signal generation behind hard risk gates, live market data, and monitoring that assumes things go wrong.',
    url: 'https://bilcoworks.com/ai/allspark',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AllSpark | Bilco Works',
    description: 'ML signal generation behind hard risk gates.',
  },
}

const layers = [
  {
    title: 'Signals',
    body: 'Thirty technical indicators per bar feed three model families — a shared gradient-boosted model, per-pair models with stricter thresholds, and an ensemble that must agree with itself before it speaks. A signal below its confidence bar is silence, not a smaller trade.',
  },
  {
    title: 'Risk gates',
    body: 'Position limits, a daily loss limit, and a drawdown halt are enforced in code, above every strategy. No model, however confident, can size past them — the risk layer treats the ML layer as an untrusted input.',
  },
  {
    title: 'Execution & audit',
    body: 'Orders route to Interactive Brokers for CME micro currency futures, with separate live and paper gateways. A real-time dashboard, continuous position reconciliation, and push alerts mean a divergence between what the system believes and what the broker reports is a page, not a surprise.',
  },
]

export default function AllSparkPage() {
  return (
    <>
      <PageHero
        eyebrow="AI engineering · Systems"
        plate="lattice"
        title="AllSpark."
        lede="An autonomous algorithmic trading platform for currency futures — built less to prove a market theory than to practise a harder discipline: letting machine learning act in the real world only through gates it cannot talk its way past."
      >
        <Link href="/ai" className="pill">
          Back to AI Engineering
        </Link>
      </PageHero>

      <Chapter tone="paper">
        <Narrative
          tone="paper"
          label="The real problem"
          statement="The interesting problem is not prediction."
        >
          <p>
            Anyone can train a model that predicts markets in a backtest. The
            engineering problem is everything around it: features computed
            identically in research and production, models whose confidence is
            calibrated enough to gate on, an execution layer that reconciles its
            beliefs against the broker&apos;s records, and a risk system with the
            authority to halt everything. AllSpark is our standing exercise in
            that problem — an ML system granted write access to something that
            bites back.
          </p>
        </Narrative>
      </Chapter>

      <Chapter tone="ground-2">
        <SectionHead
          eyebrow="Architecture"
          title="Three layers, strictly ordered."
          lede="Each layer treats the one above it with suspicion. That ordering is the design."
        />
        <TileGrid items={layers} />
      </Chapter>

      <Chapter tone="ground">
        <Narrative
          label="Why it belongs here"
          statement="A trading system and a payroll system are the same discipline in different clothes."
        >
          <p>
            The shape of AllSpark — an automated pipeline whose outputs are
            verified against an external source of truth before anything
            irreversible happens — is the shape of a{' '}
            <Link href="/hris" className="link-quiet">
              payroll integration
            </Link>
            . A trading system that reconciles positions and a payroll system
            that reconciles to the cent are the same discipline wearing different
            clothes, and running one continuously is how we keep that discipline
            honest.
          </p>
          <p className="!text-sm !leading-[1.75] text-chalk-3">
            AllSpark is a personal research system trading our own account.
            Nothing on this page is investment advice, a performance claim, or an
            offer of trading services.
          </p>
        </Narrative>
      </Chapter>
    </>
  )
}
