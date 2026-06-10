import type { Metadata } from 'next'
import Link from 'next/link'
import GridPattern from '@/components/GridPattern'
import Reveal from '@/components/Reveal'
import { HeroIllustration } from '@/components/illustrations'
import {
  ImplementationIcon,
  RescueIcon,
  IntegrationIcon,
  ArchitectureIcon,
  HardeningIcon,
  GlobalPayrollIcon,
  UnionIcon,
  AIIcon,
} from '@/components/illustrations'

export const metadata: Metadata = {
  title: 'HRIS Implementation Consultant | Enterprise HR Systems',
  description:
    'HRIS implementation, integration, and stabilization consulting. Workday, SAP SuccessFactors, Oracle HCM. Tested integrations, documented handoffs.',
  alternates: {
    canonical: 'https://bilcoworks.com',
  },
  openGraph: {
    title: 'HRIS Implementation Consultant | Bilco Works',
    description:
      'Enterprise HRIS implementation and integration consulting. Systems that work on day one.',
    url: 'https://bilcoworks.com',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRIS Implementation Consultant | Bilco Works',
    description: 'Enterprise HRIS implementation and integration consulting.',
  },
}

export default function HomePage() {
  const services = [
    {
      id: 'ai-augmented-delivery',
      title: 'AI-Augmented Delivery',
      description:
        'We use AI on the first pass: variance triage, migration reconciliation, CBA parsing, statutory monitoring. A practitioner verifies every result. You stay the responsible party.',
      icon: AIIcon,
    },
    {
      id: 'hris-implementation',
      title: 'HRIS Implementation',
      description:
        'New platform deployments with proper requirements, configuration, testing, and cutover planning. We handle the complexity so your team can focus on change management.',
      icon: ImplementationIcon,
    },
    {
      id: 'hris-rescue',
      title: 'HRIS Rescue',
      description:
        'Stabilization for troubled implementations. We diagnose root causes, fix integration failures, correct data quality issues, and establish sustainable operations.',
      icon: RescueIcon,
    },
    {
      id: 'integrations',
      title: 'Integration Development',
      description:
        'Payroll, benefits, finance, and identity integrations built with error handling, reconciliation, and monitoring. Not just working - observable and maintainable.',
      icon: IntegrationIcon,
    },
    {
      id: 'global-payroll-compliance',
      title: 'Global Payroll & Compliance',
      description:
        'Multi-country payroll configured and reconciled to the cent, with statutory filings, data residency, and currency handling built in. We keep each jurisdiction current as local rules change.',
      icon: GlobalPayrollIcon,
    },
    {
      id: 'union-workforce',
      title: 'Unionized Workforce Support',
      description:
        'Collective bargaining agreements encoded into payroll: dues, seniority, premiums, overtime, and retro on ratification. We configure the rules so the system pays people the way the contract reads.',
      icon: UnionIcon,
    },
    {
      id: 'architecture',
      title: 'Architecture Leadership',
      description:
        'Technical oversight for complex programs. We define integration patterns, establish controls, and ensure decisions are documented and defensible.',
      icon: ArchitectureIcon,
    },
    {
      id: 'hardening',
      title: 'Post-Go-Live Hardening',
      description:
        'Runbooks, monitoring, escalation paths, and documentation that lets your internal team take full ownership with confidence.',
      icon: HardeningIcon,
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
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-ink leading-[1.05]">
                HRIS implementations that work on{' '}
                <span className="text-gradient">day one</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-ink-muted leading-relaxed">
                We configure, integrate, and stabilize enterprise HR systems.
                Clear scope. Tested integrations. Documented handoff.
                No surprises at go-live.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="btn-primary group">
                  View services
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
              What we do
            </h2>
            <p className="mt-4 text-body max-w-2xl">
              We specialize in the hard parts of HRIS: the integrations that break,
              the data that does not reconcile, and the configurations that
              need to survive your next open enrollment.
            </p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Reveal
                  as="article"
                  key={service.id}
                  delay={index * 70}
                  className="card group"
                >
                  <div className="inline-flex p-2.5 rounded-lg bg-accent-muted/60 ring-1 ring-rule/60 transition-colors duration-300 group-hover:bg-accent-muted">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-ink">
                    <Link href={`/services#${service.id}`} className="hover:text-accent transition-colors">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                    {service.description}
                  </p>
                </Reveal>
              )
            })}
          </div>
          <Reveal className="mt-12">
            <Link
              href="/services"
              className="text-ink font-medium link-underline"
            >
              Full service details
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated section-padding">
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

      <section className="section-padding">
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
              Ready to discuss your project?
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#A8B8C8' }}>
              We respond within one business day. Send us your situation and we will
              let you know if we can help.
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
