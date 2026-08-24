import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'AllSpark | Algorithmic Trading Platform | Bilco Labs',
  description:
    'AllSpark is an autonomous algorithmic trading platform for CME micro currency futures: ML signal generation behind hard risk gates, with monitoring that assumes things go wrong.',
  alternates: {
    canonical: 'https://bilcoworks.com/labs/allspark',
  },
  openGraph: {
    title: 'AllSpark | Bilco Labs',
    description:
      'An autonomous algorithmic trading platform: ML signals behind hard risk gates.',
    url: 'https://bilcoworks.com/labs/allspark',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AllSpark | Bilco Labs',
    description:
      'An autonomous algorithmic trading platform: ML signals behind hard risk gates.',
  },
}

const layers = [
  {
    number: '01',
    heading: 'Signals',
    text: 'Thirty technical indicators per bar feed three model families - a shared gradient-boosted model, per-pair models with stricter thresholds, and an ensemble that must agree with itself before it speaks. A signal below its confidence bar is silence, not a smaller trade.',
  },
  {
    number: '02',
    heading: 'Risk gates',
    text: 'Position limits, a daily loss limit, and a drawdown halt are enforced in code, above every strategy. No model, however confident, can size past them - the risk layer treats the ML layer as an untrusted input.',
  },
  {
    number: '03',
    heading: 'Execution & audit',
    text: 'Orders route to Interactive Brokers for CME micro currency futures, with separate live and paper gateways. A real-time dashboard, continuous position reconciliation, and push alerts mean a divergence between what the system believes and what the broker reports is a page, not a surprise.',
  },
]

export default function AllSparkPage() {
  return (
    <div>
      <section className="relative section-padding bg-surface-secondary border-b border-rule overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
        <div className="container-wide">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Labs / Systems</p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.08]">
              AllSpark
            </h1>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed">
              An autonomous algorithmic trading platform for currency futures -
              built less to prove a market theory than to practise a harder
              discipline: letting machine learning act in the real world only
              through gates it cannot talk its way past.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink">
              The interesting problem is not prediction
            </h2>
            <p className="mt-4 text-body">
              Anyone can train a model that predicts markets in a backtest.
              The engineering problem is everything around it: features
              computed identically in research and production, models whose
              confidence is calibrated enough to gate on, an execution layer
              that reconciles its beliefs against the broker&apos;s records,
              and a risk system with the authority to halt everything. AllSpark
              is our standing exercise in that problem - an ML system granted
              write access to something that bites back.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink">
              Three layers, strictly ordered
            </h2>
            <p className="mt-4 text-body max-w-2xl">
              Each layer treats the one above it with suspicion. That ordering
              is the design.
            </p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {layers.map((layer, index) => (
              <Reveal
                key={layer.number}
                delay={index * 70}
                className="group flex gap-4 p-5 bg-surface-elevated border border-rule rounded-xl shadow-subtle transition-all duration-300 ease-out-expo hover:shadow-card hover:-translate-y-0.5 hover:border-rule-strong"
              >
                <span className="text-2xl font-mono text-accent/30 select-none transition-colors duration-300 group-hover:text-accent/70">
                  {layer.number}
                </span>
                <div>
                  <h3 className="font-medium text-ink">{layer.heading}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                    {layer.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink">
              Why it belongs in the lab
            </h2>
            <p className="mt-4 text-body">
              The shape of AllSpark - an automated pipeline whose outputs are
              verified against an external source of truth before anything
              irreversible happens - is the shape of a payroll integration. A
              trading system that reconciles positions and a payroll system
              that reconciles to the cent are the same discipline wearing
              different clothes, and running one continuously is how we keep
              that discipline honest.
            </p>
            <p className="mt-4 text-sm text-ink-subtle leading-relaxed">
              AllSpark is a personal research system trading our own account.
              Nothing on this page is investment advice, a performance claim,
              or an offer of trading services.
            </p>
            <div className="mt-8">
              <Link href="/labs" className="text-ink font-medium link-underline">
                Back to Labs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
