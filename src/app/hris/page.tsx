import type { Metadata } from 'next'
import Link from 'next/link'
import ContactCta from '@/components/ContactCta'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { Chapter, SectionHead, TileGrid } from '@/components/Section'
import { hrServices, phases } from '@/content/hr'

export const metadata: Metadata = {
  title: 'HRIS & Payroll Implementation Consultant | Enterprise HR Systems',
  description:
    'HRIS and payroll implementation, integration, and stabilization consulting. Workday, UKG, SAP SuccessFactors, Oracle HCM. Tested integrations, documented handoffs.',
  alternates: { canonical: 'https://bilcoworks.com/hris' },
  openGraph: {
    title: 'HRIS & Payroll Implementation Consultant | Bilco Works',
    description:
      'Enterprise HRIS and payroll implementation and integration consulting. Systems that work on day one.',
    url: 'https://bilcoworks.com/hris',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRIS & Payroll Implementation Consultant | Bilco Works',
    description:
      'Enterprise HRIS and payroll implementation and integration consulting.',
  },
}

const credibility = [
  {
    title: 'We finish what we start',
    body: 'Engagements have defined scope, acceptance criteria, and end dates. We do not create dependency; we create capability.',
  },
  {
    title: 'We document everything',
    body: 'Requirements, decisions, configurations, test results, runbooks. If it is not written down, it did not happen.',
  },
  {
    title: 'We test before go-live',
    body: 'Integration testing, parallel runs, reconciliation. The week before launch should be boring.',
  },
  {
    title: 'We transfer knowledge',
    body: 'Your team should be able to operate without us. That is the goal from day one.',
  },
]

export default function HrisPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Practice"
        plate="ledger"
        title={
          <>
            HRIS and payroll implementations that work on day one.
          </>
        }
        lede="We configure, integrate, and stabilize enterprise HR systems across Workday, UKG, SAP SuccessFactors, and Oracle HCM. Clear scope. Tested integrations. Documented handoff. No surprises at go-live."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/services" className="pill">
            The eight service lines
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/approach" className="pill">
            The six-phase method
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </PageHero>

      {/* An index, not a restatement. Each line's full write-up lives on /services. */}
      <Chapter tone="paper" id="services">
        <SectionHead
          tone="paper"
          eyebrow="Service lines"
          title="Eight ways we are useful."
          lede="We specialize in the hard parts: the integrations that break, the data that does not reconcile, and the configurations that need to survive your next open enrollment."
        />

        <ol className="mt-14 border-t border-hair-ink">
          {hrServices.map((service, i) => (
            <Reveal
              as="li"
              key={service.id}
              delay={i * 40}
              className="group border-b border-hair-ink"
            >
              <Link
                href={`/services#${service.id}`}
                className="grid items-baseline gap-x-8 gap-y-3 py-7 transition-colors duration-300 md:grid-cols-[3rem_minmax(0,18rem)_minmax(0,1fr)_auto]"
              >
                <span className="index text-ink-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-d4 text-ink transition-colors duration-300 group-hover:text-signal-deep">
                  {service.title}
                </h3>
                <p className="copy-ink !max-w-none text-[0.9375rem]">
                  {service.summary}
                </p>
                <span
                  className="hidden font-mono text-micro-2 uppercase text-ink-3 transition-colors duration-300 group-hover:text-signal-deep md:inline"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ol>
      </Chapter>

      {/* Same treatment for the method: the numbers and names only. */}
      <Chapter tone="ground-2" id="approach">
        <SectionHead
          eyebrow="Delivery method"
          title="Six phases, every engagement."
          lede="No methodology theater — just the activities that prevent failed implementations. Phases compress or expand with scope; the structure does not change."
        />

        <ol className="mt-14 grid gap-px border border-hair bg-chalk/10 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase, i) => (
            <Reveal
              as="li"
              key={phase.number}
              delay={i * 60}
              className="bg-ground-2 p-8"
            >
              <span className="index text-signal">{phase.number}</span>
              <h3 className="mt-5 text-d4 text-chalk">{phase.name}</h3>
              <p className="copy mt-4">{phase.summary}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12">
          <Link href="/approach" className="pill">
            Activities and artifacts per phase
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </Chapter>

      <Chapter tone="ground">
        <SectionHead
          eyebrow="Why clients work with us"
          title="Four commitments."
        />
        <TileGrid items={credibility} columns={4} />
      </Chapter>

      <ContactCta
        heading="Ready to discuss your project?"
        body="Send us your situation and we will let you know if we can help — and tell you if we are not the right fit."
        note="We reply within one business day"
      />
    </>
  )
}
