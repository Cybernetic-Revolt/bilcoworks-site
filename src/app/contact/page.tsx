import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | HRIS Implementation Consulting',
  description:
    'Contact Bilco Works for HRIS implementation, integration, or stabilization consulting. One business day response with honest assessment.',
  alternates: {
    canonical: 'https://bilcoworks.com/contact',
  },
  openGraph: {
    title: 'Contact Bilco Works | HRIS Consulting',
    description: 'Request HRIS consulting services. One business day response.',
    url: 'https://bilcoworks.com/contact',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | HRIS Consulting',
    description: 'Request HRIS consulting services.',
  },
}

export default function ContactPage() {
  return (
    <div>
      <section className="section-padding bg-surface-secondary border-b border-rule">
        <div className="container-wide">
          <h1 className="text-3xl md:text-4xl font-medium text-ink">
            Contact
          </h1>
          <p className="mt-4 text-lg text-ink-muted max-w-2xl">
            We respond within one business day. Send us your situation and
            we&apos;ll let you know if we can help.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-xl font-medium text-ink">
                Send us a message
              </h2>
              <p className="mt-3 text-body">
                Tell us about your HRIS situation and we&apos;ll get back to you
                with an honest assessment of whether we can help.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div>
              <div className="p-5 bg-surface-secondary border-l-2 border-l-accent/30 border border-rule rounded-lg">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
