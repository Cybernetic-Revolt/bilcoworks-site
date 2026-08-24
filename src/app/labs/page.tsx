import type { Metadata } from 'next'
import Link from 'next/link'
import GridPattern from '@/components/GridPattern'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Labs | AI, Voice, Quantum & Systems Engineering',
  description:
    'Bilco Labs: the products, research, and infrastructure we build with our own hands. Voice AI, medical imaging ML, quantum benchmarking, trading systems, and self-hosted servers.',
  alternates: {
    canonical: 'https://bilcoworks.com/labs',
  },
  openGraph: {
    title: 'Bilco Labs | AI, Voice, Quantum & Systems Engineering',
    description:
      'The products, research, and infrastructure we build with our own hands.',
    url: 'https://bilcoworks.com/labs',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bilco Labs',
    description:
      'The products, research, and infrastructure we build with our own hands.',
  },
}

const projects = [
  {
    slug: 'tworing',
    kind: 'Product',
    title: 'TwoRing & Switchboard',
    summary:
      'A 24/7 AI receptionist for trade businesses - and the self-hosted voice engine we are building underneath it. Telephony, speech, and LLM orchestration on our own infrastructure.',
    highlight: 'tworing.ai',
  },
  {
    slug: 'knee-ledger',
    kind: 'Competition',
    title: 'The Knee Ledger',
    summary:
      'Teaching one machine to read knee MRIs against 2,300 teams in the RSNA AI Challenge - with a rule that every claim needs a receipt and nothing ships without clearing an automated gate.',
    highlight: '0.899 public AUC',
  },
  {
    slug: 'quantum-benchmarking',
    kind: 'Research',
    title: 'Quantum Benchmarking',
    summary:
      'Longitudinal noise-model validation on IBM Quantum hardware. A fixed battery of entangling circuits, run for months, asking whether learned noise models can predict future hardware.',
    highlight: 'Pre-registered protocol',
  },
  {
    slug: 'allspark',
    kind: 'Systems',
    title: 'AllSpark',
    summary:
      'An autonomous algorithmic trading platform for currency futures: ML signal generation behind hard risk gates, live market data, and monitoring that assumes things go wrong.',
    highlight: 'ML + risk engineering',
  },
  {
    slug: 'homelab',
    kind: 'Infrastructure',
    title: 'The Lab Itself',
    summary:
      'Everything above runs on servers we own and operate: a virtualized production environment with local LLM inference, automated provisioning, secrets discipline, and tested restores.',
    highlight: 'Self-hosted production',
  },
]

export default function LabsPage() {
  return (
    <div>
      <section className="relative section-padding bg-surface-secondary border-b border-rule overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
        <GridPattern />
        <div className="container-wide relative">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Bilco Labs</p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.08]">
              The workshop behind the{' '}
              <span className="text-gradient">consultancy</span>
            </h1>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed">
              When we tell clients we test before go-live, document everything,
              and verify every AI result, this is where that discipline comes
              from. Labs is the work we do with our own hands and on our own
              hardware: products we ship, research we publish, competitions we
              enter, and the infrastructure that carries all of it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Reveal
                as="article"
                key={project.slug}
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
                  <Link
                    href={`/labs/${project.slug}`}
                    className="hover:text-accent transition-colors"
                  >
                    {project.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed flex-1">
                  {project.summary}
                </p>
                <Link
                  href={`/labs/${project.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink link-underline self-start"
                >
                  Read the story
                  <svg
                    className="w-4 h-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-elevated section-padding">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-medium text-ink">
              Why a consulting firm runs a lab
            </h2>
            <p className="mt-4 text-body">
              Our{' '}
              <Link
                href="/services#ai-augmented-delivery"
                className="text-accent link-underline"
              >
                AI-Augmented Delivery
              </Link>{' '}
              practice is not built on vendor demos. The receipts-first
              experiment discipline we use in a Kaggle medical-imaging
              campaign, the provider-failover patterns in our voice engine, and
              the runbooks that keep our own servers boring are the same
              muscles we bring to client payroll cutovers and integration
              rescues. Labs is where we earn the right to say &ldquo;we have
              done this before.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-medium">
              Want to talk shop?
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#A8B8C8' }}>
              Whether it is an HRIS program or something stranger, we are happy
              to compare notes.
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
