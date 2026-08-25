import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Contact | Bilco Works',
  description:
    'Contact Bilco Works about HR systems consulting, AI engineering, research, or infrastructure. One business day response with honest assessment.',
  alternates: {
    canonical: 'https://bilcoworks.com/contact',
  },
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

export default function ContactPage() {
  return (
    <div>
      <section className="relative section-padding bg-surface-secondary border-b border-rule overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
        <div className="container-wide">
          <Reveal>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.08]">
              Contact
            </h1>
            <p className="mt-5 text-lg text-ink-muted max-w-2xl leading-relaxed">
              We respond within one business day. Send us your situation and
              we&apos;ll let you know if we can help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <h2 className="text-xl font-medium text-ink">
                Send us a message
              </h2>
              <p className="mt-3 text-body">
                Tell us about your situation - an HR system, an AI project, or
                something stranger - and we&apos;ll get back to you with an
                honest assessment of whether we can help.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="p-6 bg-surface-elevated border-l-2 border-l-accent/40 border border-rule rounded-xl shadow-card">
                <h3 className="text-sm font-medium text-ink uppercase tracking-wide">
                  What happens next
                </h3>
                <ol className="mt-4 space-y-4">
                  {[
                    'We review your message and assess fit',
                    'If we can help, we schedule a 30-minute discovery call',
                    'After the call, we provide a written scope and estimate',
                    'No obligation at any step',
                  ].map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm text-ink-muted">
                      <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center text-xs font-medium rounded-full ${
                        index === 3 ? 'bg-teal/10 text-teal' : 'bg-accent-muted text-ink'
                      }`}>
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
