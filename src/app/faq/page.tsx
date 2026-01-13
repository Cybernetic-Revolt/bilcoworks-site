import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ | HRIS Implementation & Global Payroll',
  description:
    'HRIS implementation FAQ: timelines, platforms (Workday, SuccessFactors, Oracle), global payroll, failed implementation recovery.',
  alternates: {
    canonical: 'https://bilcoworks.com/faq',
  },
  openGraph: {
    title: 'HRIS Implementation FAQ | Common Questions Answered',
    description: 'Common questions about HRIS implementation consulting.',
    url: 'https://bilcoworks.com/faq',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | HRIS Implementation',
    description: 'HRIS implementation questions answered.',
  },
}

const faqs = [
  {
    question: 'How long does a typical HRIS implementation take?',
    answer:
      'Implementation timelines vary by scope and complexity. A focused implementation for a mid-size organization typically spans 4-6 months. Enterprise implementations with multiple integrations may require 9-12 months. We define timeline during the Diagnose phase based on your specific requirements.',
  },
  {
    question: 'Which HRIS platforms do you specialize in?',
    answer:
      'We specialize in UKG HRIS implementations and integrations, with 15+ years supporting UKG Pro/UKG Dimensions environments. Our deep platform expertise means faster implementations and fewer issues.',
  },
  {
    question: 'Can you help with a failed or troubled HRIS implementation?',
    answer:
      'Yes. Our HRIS Rescue and Stabilization service is specifically designed for implementations that have stalled, failed, or are running unreliably. We diagnose root causes, prioritize fixes, and establish a path to stable operations.',
  },
  {
    question: 'Do you provide ongoing support after go-live?',
    answer:
      'We provide Post-Go-Live Hardening services to establish monitoring, documentation, and knowledge transfer. Our goal is to transfer capability to your team, not create dependency. After handoff, your team operates independently.',
  },
  {
    question: 'What geographic regions do you serve?',
    answer:
      'Bilco Works is based in Canada and serves clients globally. We work remotely and have experience with global payroll implementations across multiple countries and regulatory environments.',
  },
  {
    question: 'Do you support global payroll implementations?',
    answer:
      'Yes. We have hands-on experience with multi-country payroll integrations and understand the complexities of global payroll including local compliance, currency handling, and country-specific integrations.',
  },
  {
    question: 'What makes Bilco Works different from other HRIS consultancies?',
    answer:
      'We combine a disciplined delivery methodology with deep platform experience. Every engagement follows our six-phase approach with documented artifacts and clear success criteria. We focus on knowledge transfer so your team can operate independently after go-live.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div>
        <section className="section-padding bg-surface-secondary border-b border-rule">
          <div className="container-wide">
            <h1 className="text-3xl md:text-4xl font-medium text-ink">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-ink-muted max-w-2xl">
              Common questions about HRIS implementation, our services, and how we work.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-wide">
            <div className="space-y-8 max-w-3xl">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-rule pb-8 last:border-0">
                  <h2 className="text-xl font-medium text-ink">{faq.question}</h2>
                  <p className="mt-3 text-body">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-dark section-padding">
          <div className="container-wide text-center">
            <h2 className="text-2xl md:text-3xl font-medium">
              Have a different question?
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#A8B8C8' }}>
              We are happy to discuss your specific situation.
              No commitment required. You can also explore{' '}
              <Link href="/services" className="underline hover:no-underline">our services</Link>.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-surface-elevated text-ink font-medium rounded hover:bg-surface transition-colors"
            >
              Contact us
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
