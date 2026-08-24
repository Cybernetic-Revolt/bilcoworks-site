import type { Metadata } from 'next'
import Link from 'next/link'
import GridPattern from '@/components/GridPattern'
import Reveal from '@/components/Reveal'
import { HeroIllustration } from '@/components/illustrations'
import {
  ImplementationIcon,
  AIIcon,
  ArchitectureIcon,
} from '@/components/illustrations'

export const metadata: Metadata = {
  title: 'HRIS Consulting, AI Products & Infrastructure | Bilco Works',
  description:
    'Bilco Works is an engineering practice: enterprise HRIS implementation and integration consulting, AI products of our own, and the infrastructure both run on.',
  alternates: {
    canonical: 'https://bilcoworks.com',
  },
  openGraph: {
    title: 'Bilco Works | Systems That Earn Their Keep',
    description:
      'Enterprise HR systems consulting, AI products, and self-run infrastructure. Tested, documented, accountable.',
    url: 'https://bilcoworks.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bilco Works | Systems That Earn Their Keep',
    description:
      'Enterprise HR systems consulting, AI products, and self-run infrastructure.',
  },
}

export default function HomePage() {
  const pillars = [
    {
      id: 'hr-systems',
      title: 'Enterprise HR systems',
      description:
        'Our deepest practice. HRIS implementation, rescue, integrations, global payroll, and unionized workforce support across Workday, UKG, SAP, and Oracle HCM.',
      href: '/services',
      linkLabel: 'Explore HR services',
      icon: ImplementationIcon,
    },
    {
      id: 'ai-products',
      title: 'AI & products',
      description:
        'We build and operate our own AI: TwoRing, a 24/7 receptionist for trade businesses, plus AI-augmented delivery on every engagement - a practitioner verifies every result.',
      href: '/labs/tworing',
      linkLabel: 'Meet TwoRing',
      icon: AIIcon,
    },
    {
      id: 'infrastructure',
      title: 'Servers & infrastructure',
      description:
        'Our products run on infrastructure we own and operate - virtualized, monitored, restorable. The runbook standard we hand clients is the one we live with.',
      href: '/labs/homelab',
      linkLabel: 'See the lab',
      icon: ArchitectureIcon,
    },
  ]

  const proof = [
    {
      kind: 'Competition',
      value: '0.899',
      text: 'Public macro-AUC in the RSNA knee MRI AI Challenge - every experiment gated and receipted.',
      href: '/labs/knee-ledger',
    },
    {
      kind: 'Product',
      value: '2 rings',
      text: 'How fast TwoRing answers a forwarded call, books the job, and emails the lead summary.',
      href: '/labs/tworing',
    },
    {
      kind: 'Research',
      value: '0.043',
      text: 'Hellinger distance our per-qubit noise models hit predicting real quantum hardware output.',
      href: '/labs/quantum-benchmarking',
    },
  ]

  const phases = [
    {
      phase: '01',
      name: 'Diagnose',
      detail:
        'Map current state, identify gaps, define success criteria. Understand the real requirements, not just the RFP.',
    },
    {
      phase: '02',
      name: 'Design',
      detail:
        'Document configurations, integration specs, data mappings, and security model. Everything written down before building.',
    },
    {
      phase: '03',
      name: 'Build',
      detail:
        'Configure systems, develop integrations, prepare test data. Iterative builds with stakeholder checkpoints.',
    },
    {
      phase: '04',
      name: 'Prove',
      detail:
        'User acceptance testing, integration testing, parallel payroll runs. Problems found here, not in production.',
    },
    {
      phase: '05',
      name: 'Launch',
      detail:
        'Cutover execution with rollback plan. Data validation, integration verification, and go/no-go checkpoints.',
    },
    {
      phase: '06',
      name: 'Harden',
      detail:
        'Monitoring, runbooks, knowledge transfer. Your team owns it; we make sure they can.',
    },
  ]

  const credibility = [
    {
      heading: 'We finish what we start',
      text: "Engagements have defined scope, acceptance criteria, and end dates. We do not create dependency; we create capability.",
    },
    {
      heading: 'We document everything',
      text: "Requirements, decisions, configurations, test results, runbooks. If it is not written down, it did not happen.",
    },
    {
      heading: 'We test before go-live',
      text: 'Integration testing, parallel runs, reconciliation. The week before launch should be boring.',
    },
    {
      heading: 'We transfer knowledge',
      text: "Your team should be able to operate without us. That is the goal from day one.",
    },
  ]

  return (
    <div>
      <section className="relative section-padding bg-surface-secondary border-b border-rule overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
        <GridPattern />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal className="max-w-xl">
              <p className="eyebrow">Consulting · Products · Research</p>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-ink leading-[1.05]">
                We engineer systems that{' '}
                <span className="text-gradient">earn their keep</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-ink-muted leading-relaxed">
                Bilco Works is an engineering practice from Calgary: we
                implement enterprise HR systems for clients, ship AI products
                of our own, and run the infrastructure both depend on. Same
                discipline everywhere - tested, documented, accountable.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="btn-primary group">
                  See what we do
                  <svg className="w-4 h-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Start a conversation
                </Link>
              </div>
            </Reveal>
            <Reveal className="hidden lg:block" delay={120}>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated ring-1 ring-rule/70">
                <HeroIllustration />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-medium text-ink">
              Three practices, one standard
            </h2>
            <p className="mt-4 text-body max-w-2xl">
              Everything we take on - a payroll cutover, a voice agent, a
              research protocol - ships with the same rules: written down,
              tested before launch, handed over with receipts.
            </p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon
              return (
                <Reveal
                  as="article"
                  key={pillar.id}
                  delay={index * 70}
                  className="card group flex flex-col"
                >
                  <div className="inline-flex self-start p-2.5 rounded-lg bg-accent-muted/60 ring-1 ring-rule/60 transition-colors duration-300 group-hover:bg-accent-muted">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-ink">
                    <Link href={pillar.href} className="hover:text-accent transition-colors">
                      {pillar.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                  <Link
                    href={pillar.href}
                    className="mt-5 text-sm font-medium text-accent link-underline self-start"
                  >
                    {pillar.linkLabel}
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-elevated section-padding">
        <div className="container-wide">
          <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-medium text-ink">
              Proof, not promises
            </h2>
            <Link href="/labs" className="text-sm font-medium text-accent link-underline">
              All Labs projects
            </Link>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {proof.map((item, index) => (
              <Reveal
                as="article"
                key={item.kind}
                delay={index * 70}
                className="card"
              >
                <p className="eyebrow">{item.kind}</p>
                <p className="mt-3 text-3xl font-mono text-accent">
                  <Link href={item.href} className="hover:text-accent-hover transition-colors">
                    {item.value}
                  </Link>
                </p>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-medium text-ink">
              How we work
            </h2>
            <p className="mt-4 text-body max-w-2xl">
              Every engagement follows our{' '}
              <Link href="/approach" className="text-accent link-underline">
                six-phase methodology
              </Link>
              . No methodology theater - just the activities that prevent failed implementations.
            </p>
          </Reveal>
          <div className="mt-12 relative">
            <div className="hidden lg:block absolute top-[52px] left-[88px] right-[88px] h-px bg-gradient-to-r from-transparent via-rule-strong to-transparent" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {phases.map((item, index) => (
                <Reveal
                  key={item.phase}
                  delay={index * 60}
                  className="group flex gap-4 p-5 bg-surface-elevated border border-rule rounded-xl relative shadow-subtle transition-all duration-300 ease-out-expo hover:shadow-card hover:-translate-y-0.5 hover:border-rule-strong"
                >
                  <span className="text-2xl font-mono text-accent/30 select-none transition-colors duration-300 group-hover:text-accent/70">
                    {item.phase}
                  </span>
                  <div>
                    <h3 className="font-medium text-ink">{item.name}</h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="mt-12">
            <Link
              href="/approach"
              className="text-ink font-medium link-underline"
            >
              Our full approach
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-medium text-ink">
              Why clients work with us
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl">
            {credibility.map((item, index) => (
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
              Bring us the hard part
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#A8B8C8' }}>
              An HRIS that will not reconcile, a process that needs a machine
              on it, a system that has to run itself. We respond within one
              business day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 mt-8 px-6 py-3 bg-surface-elevated text-ink font-medium rounded-lg shadow-elevated hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
            >
              Contact us
            </Link>
            <p className="mt-4 text-sm" style={{ color: '#8896A6' }}>
              We will tell you if we are not the right fit.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
