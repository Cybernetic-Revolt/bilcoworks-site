import type { Metadata } from 'next'
import Link from 'next/link'
import ContactCta from '@/components/ContactCta'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { hrServices } from '@/content/hr'

export const metadata: Metadata = {
  title: 'HRIS Implementation & Integration Services',
  description:
    'HRIS implementation, rescue, payroll integration, and stabilization services. Workday, SuccessFactors, Oracle HCM consulting with documented deliverables.',
  alternates: { canonical: 'https://bilcoworks.com/services' },
  openGraph: {
    title: 'HRIS Implementation & Integration Services | Bilco Works',
    description:
      'HRIS implementation, rescue, and integration services with documented deliverables. UKG Pro specialists.',
    url: 'https://bilcoworks.com/services',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRIS Implementation & Integration Services',
    description: 'Enterprise HRIS consulting with documented deliverables.',
  },
}

/** Two-column list used for outcomes, deliverables and failure modes. */
function Column({
  heading,
  items,
  marker,
}: {
  heading: string
  items: string[]
  marker: 'tick' | 'cross'
}) {
  return (
    <div>
      <h4 className="eyebrow-ink">{heading}</h4>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-[1.7] text-ink-2">
            <span
              aria-hidden="true"
              className={`mt-[0.55rem] h-1 w-1 shrink-0 ${
                marker === 'tick' ? 'bg-signal-deep' : 'bg-ink-3'
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="HR practice detail"
        plate="ledger"
        title="Eight service lines, in full."
        lede="Each has defined outcomes, documented deliverables, and stated success criteria. This is the long form — the one-line version lives on the HR practice page."
      >
        <div className="flex flex-wrap gap-4">
          <Link href="/hris" className="pill">
            Back to the HR practice
          </Link>
          <Link href="/faq" className="pill">
            Common questions
          </Link>
        </div>
      </PageHero>

      {/* Index rail: eight anchors, so a long page stays navigable. */}
      <nav
        aria-label="Service lines"
        className="sticky top-[72px] z-30 border-b border-hair bg-ground/90 backdrop-blur-md"
      >
        <ol className="shell flex gap-6 overflow-x-auto py-4">
          {hrServices.map((service, i) => (
            <li key={service.id} className="shrink-0">
              <a
                href={`#${service.id}`}
                className="flex items-baseline gap-2 font-mono text-micro-2 uppercase text-chalk-3 transition-colors hover:text-signal"
              >
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span className="whitespace-nowrap">{service.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {hrServices.map((service, i) => {
        const light = i % 2 === 1
        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-[8.5rem] border-t py-20 md:py-24 ${
              light
                ? 'border-hair-ink bg-paper'
                : 'border-hair-ink bg-paper-2'
            }`}
          >
            <div className="shell">
              <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
                <div>
                  <span className="index text-ink-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-5 text-d3 text-ink">{service.title}</h2>
                </div>
                <div>
                  <p className="copy-ink !max-w-none text-base leading-[1.8]">
                    {service.description}
                  </p>

                  <div className="mt-12 grid gap-10 md:grid-cols-2">
                    <Column
                      heading="Outcomes"
                      items={service.outcomes}
                      marker="tick"
                    />
                    <Column
                      heading="Typical deliverables"
                      items={service.deliverables}
                      marker="tick"
                    />
                  </div>

                  <div className="mt-12 border-l-2 border-signal-deep pl-6">
                    <h4 className="eyebrow-ink">What success looks like</h4>
                    <p className="mt-4 text-sm leading-[1.8] text-ink-2">
                      {service.success}
                    </p>
                  </div>

                  <div className="mt-12">
                    <Column
                      heading="Failure modes avoided"
                      items={service.failuresAvoided}
                      marker="cross"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}

      <ContactCta
        heading="Need something specific?"
        body="Not every engagement fits one of these eight. Describe the situation and we will tell you whether it is ours, and how we would scope it."
        note="We reply within one business day"
      />
    </>
  )
}
