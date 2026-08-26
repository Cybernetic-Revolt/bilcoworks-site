import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Contact | Bilco Works',
  description:
    'Contact Bilco Works about HR systems consulting, AI engineering, research, or infrastructure. One business day response with honest assessment.',
  alternates: { canonical: 'https://bilcoworks.com/contact' },
  openGraph: {
    title: 'Contact Bilco Works',
    description:
      'HR systems, AI engineering, research, infrastructure. One business day response.',
    url: 'https://bilcoworks.com/contact',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Bilco Works',
    description: 'HR systems, AI engineering, research, infrastructure.',
  },
}

const steps = [
  'We review your message and assess fit',
  'If we can help, we schedule a 30-minute discovery call',
  'After the call, we provide a written scope and estimate',
  'No obligation at any step',
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        plate="bloom"
        title="Tell us the situation."
        lede="An HR system, an AI project, a research question, or a rack that needs rethinking. Tell us which and we will come back with an honest assessment of whether we can help — including if the answer is no."
      />

      <section className="border-t border-hair-ink bg-paper py-20 md:py-28">
        <div className="shell grid gap-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-20">
          <Reveal>
            <h2 className="eyebrow-ink">Send a message</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:pt-1">
            <h2 className="eyebrow-ink">What happens next</h2>
            <ol className="mt-8 border-t border-hair-ink">
              {steps.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-5 border-b border-hair-ink py-5 text-sm leading-[1.7] text-ink-2"
                >
                  <span className="index shrink-0 pt-1 text-signal-deep">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-8 font-mono text-micro-2 uppercase leading-4 text-ink-3">
              We reply within one business day
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
