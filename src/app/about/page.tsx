import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | HRIS Consulting Firm | Global Payroll',
  description:
    'HRIS consulting firm based in Canada serving clients globally. Experienced practitioners for enterprise HR implementations and global payroll.',
  alternates: {
    canonical: 'https://bilcoworks.com/about',
  },
  openGraph: {
    title: 'About Bilco Works | HRIS Consulting Firm',
    description:
      'Enterprise HRIS consulting firm. Global payroll implementations.',
    url: 'https://bilcoworks.com/about',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Bilco Works | HRIS Consulting',
    description: 'Enterprise HRIS consulting firm serving clients globally.',
  },
}

export default function AboutPage() {
  return (
    <div>
      <section className="section-padding bg-surface-secondary border-b border-rule">
        <div className="container-wide">
          <h1 className="text-3xl md:text-4xl font-medium text-ink">
            About Bilco Works
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-medium text-ink mt-0">
              Why we exist
            </h2>
            <p className="text-body mt-4">
              Bilco Works was founded after seeing too many HRIS implementations
              fail for preventable reasons: unclear requirements, untested
              integrations, missing documentation, and no plan for what happens
              after go-live.
            </p>
            <p className="text-body mt-4">
              These failures are not caused by bad intentions. They are caused by
              teams moving fast without the right controls, by vendors incentivized
              to close deals rather than ensure success, and by organizations that
              underestimate the complexity of enterprise HR systems.
            </p>
            <p className="text-body mt-4">
              We do the work that prevents those failures. We write things down.
              We test before go-live. We build integrations that are observable
              and recoverable. We transfer knowledge so your team can operate
              independently.
            </p>

            <h2 className="text-2xl font-medium text-ink mt-12">
              What we believe
            </h2>

            <div className="mt-6 space-y-6">
              <div className="p-5 bg-surface-secondary border-l-2 border-l-accent/30 border border-rule rounded-lg">
                <h3 className="text-lg font-medium text-ink mt-0">
                  Systems thinking over heroics
                </h3>
                <p className="text-body mt-2 mb-0">
                  Good outcomes come from good systems, not from individuals
                  working nights and weekends. If success depends on heroic
                  effort, the design is wrong.
                </p>
              </div>

              <div className="p-5 bg-surface-secondary border-l-2 border-l-accent/30 border border-rule rounded-lg">
                <h3 className="text-lg font-medium text-ink mt-0">
                  Accountability requires clarity
                </h3>
                <p className="text-body mt-2 mb-0">
                  You cannot hold someone accountable for vague outcomes. We
                  define success criteria, document decisions, and make
                  ownership explicit.
                </p>
              </div>

              <div className="p-5 bg-surface-secondary border-l-2 border-l-accent/30 border border-rule rounded-lg">
                <h3 className="text-lg font-medium text-ink mt-0">
                  Documentation is a feature
                </h3>
                <p className="text-body mt-2 mb-0">
                  Well-documented systems are easier to operate, easier to
                  audit, and easier to change. We write things down because
                  it makes everything else easier.
                </p>
              </div>

              <div className="p-5 bg-surface-secondary border-l-2 border-l-accent/30 border border-rule rounded-lg">
                <h3 className="text-lg font-medium text-ink mt-0">
                  Done means done
                </h3>
                <p className="text-body mt-2 mb-0">
                  We do not walk away until the work is complete and your team
                  is equipped to operate. Handoff is not just a meeting - it is a
                  documented transfer of capability.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-medium text-ink mt-12">
              How we work
            </h2>
            <p className="text-body mt-4">
              Bilco Works is a remote-first consultancy based in Canada. We
              work with enterprise clients globally, including{' '}
              <Link href="/services#integrations" className="underline hover:no-underline">
                multi-country payroll implementations
              </Link>
              . Engagements are typically structured as fixed-scope projects
              following our{' '}
              <Link href="/approach" className="underline hover:no-underline">
                six-phase methodology
              </Link>
              .
            </p>
            <p className="text-body mt-4">
              We are small by design. We do not scale by adding junior resources.
              Every engagement is staffed by experienced practitioners who have
              done this work before.
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-medium">
            Let us discuss your project
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: '#A8B8C8' }}>
            If what you have read resonates, we should talk. No obligation, no
            sales pitch - just a conversation about your situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-surface-elevated text-ink font-medium rounded hover:bg-surface transition-colors"
          >
            Contact us
          </Link>
          <p className="mt-4 text-sm" style={{ color: '#8896A6' }}>
            No obligation, no sales pitch.
          </p>
        </div>
      </section>
    </div>
  )
}
