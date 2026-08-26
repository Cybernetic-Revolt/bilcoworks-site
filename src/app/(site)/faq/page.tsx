import type { Metadata } from 'next'
import ContactCta from '@/components/ContactCta'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { faqs } from '@/content/faq'

export const metadata: Metadata = {
  title: 'HRIS Implementation FAQ',
  description:
    'Common questions about HRIS implementation timelines, platforms, global payroll, unionized workforces, engagement structure, and how we use AI.',
  alternates: { canonical: 'https://bilcoworks.com/faq' },
  openGraph: {
    title: 'HRIS Implementation FAQ | Bilco Works',
    description:
      'Common questions about HRIS implementation, global payroll, unions, and engagement structure.',
    url: 'https://bilcoworks.com/faq',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRIS Implementation FAQ | Bilco Works',
    description: 'Common questions about HRIS implementation and engagement structure.',
  },
}

// Generated from the same array the page renders, so the two can never drift.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="HR practice detail"
        plate="interference"
        title="Questions we get asked."
        lede="Timelines, platforms, geography, unions, global payroll, and how AI fits. If yours is not here, ask it directly."
      />

      <section className="border-t border-hair-ink bg-paper py-20 md:py-28">
        <div className="shell">
          <dl className="border-t border-hair-ink">
            {faqs.map((faq, i) => (
              <Reveal
                key={faq.question}
                delay={Math.min(i, 6) * 50}
                className="grid gap-x-10 gap-y-4 border-b border-hair-ink py-10 md:grid-cols-[3rem_minmax(0,24rem)_minmax(0,1fr)]"
              >
                <span className="index text-ink-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <dt className="font-display text-lg font-light leading-snug text-ink">
                  {faq.question}
                </dt>
                <dd className="max-w-measure text-sm leading-[1.8] text-ink-2">
                  {faq.answer}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <ContactCta
        heading="Have a different question?"
        body="Ask it directly. We would rather answer a specific question about your situation than have you guess from a general one."
        note="We reply within one business day"
      />
    </>
  )
}
