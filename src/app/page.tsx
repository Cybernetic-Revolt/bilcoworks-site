import type { Metadata } from 'next'
import Link from 'next/link'
import GridPattern from '@/components/GridPattern'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'HRIS Consulting, AI Engineering & Quantum Research | Bilco Works',
  description:
    'Bilco Works solves hard problems on four fronts: enterprise HR and payroll systems, AI engineering, quantum research, and self-hosted infrastructure. Calgary-based, working globally.',
  alternates: {
    canonical: 'https://bilcoworks.com',
  },
  openGraph: {
    title: "Bilco Works | Systems That Can't Afford to Be Wrong",
    description:
      'Enterprise HR systems, AI engineering, quantum research, and the infrastructure underneath it all.',
    url: 'https://bilcoworks.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bilco Works',
    description:
      'Enterprise HR systems, AI engineering, quantum research, and the infrastructure underneath.',
  },
}

export default function HomePage() {
  const doors = [
    {
      number: '01',
      title: 'Enterprise HR & Payroll Systems',
      description:
        'Our deepest practice: HRIS and payroll implementation, rescue, and integration across Workday, UKG, SAP, and Oracle HCM. Global payroll, unionized workforces, and cutovers that work on day one.',
      proof: ['8 service lines', '6-phase methodology'],
      href: '/hris',
    },
    {
      number: '02',
      title: 'AI Engineering',
      description:
        'Voice agents, applied machine learning, and LLM systems that ship - built, hosted, and verified by us. TwoRing, our 24/7 AI receptionist, answers real customers on our own voice engine.',
      proof: ['0.899 AUC · RSNA AI Challenge', '2 rings · TwoRing answer time'],
      href: '/ai',
    },
    {
      number: '03',
      title: 'Quantum & Research',
      description:
        'Longitudinal noise-model research on IBM Quantum hardware, run as pre-registered science - plus competition ML where the leaderboard keeps us honest.',
      proof: ['0.043 Hellinger · beats published baseline', 'protocol pre-registered'],
      href: '/research',
    },
    {
      number: '04',
      title: 'Servers & Infrastructure',
      description:
        'Self-hosted production: virtualization, local AI inference, provider failover, monitoring, and tested restores. Our systems run on hardware we rack and operate ourselves.',
      proof: ['self-hosted voice + inference', 'runbooks, not luck'],
      href: '/infrastructure',
    },
  ]

  return (
    <div>
      <section className="relative section-padding bg-surface-secondary border-b border-rule overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
        <GridPattern />
        <div className="container-wide relative">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Calgary · Consulting &amp; Engineering</p>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-ink leading-[1.06]">
              We build systems that{' '}
              <span className="text-gradient">can&apos;t afford to be wrong</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-muted leading-relaxed max-w-2xl">
              Bilco Works builds and runs serious systems: enterprise HR
              platforms that reconcile to the cent, AI that does real work,
              quantum research with receipts, and the infrastructure
              underneath it all. Pick the problem you came with.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="flex flex-col gap-5">
            {doors.map((door, index) => (
              <Reveal
                as="article"
                key={door.number}
                delay={index * 70}
                className="card group grid md:grid-cols-[72px_minmax(0,1fr)_220px_auto] gap-x-6 gap-y-4 items-center md:p-7"
              >
                <span className="text-2xl font-mono text-accent/30 select-none transition-colors duration-300 group-hover:text-accent/70">
                  {door.number}
                </span>
                <div>
                  <h2 className="text-xl font-medium text-ink">
                    <Link href={door.href} className="hover:text-accent transition-colors">
                      {door.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                    {door.description}
                  </p>
                </div>
                <div className="hidden md:flex flex-col gap-1">
                  {door.proof.map((line) => (
                    <span key={line} className="text-xs font-mono text-teal">
                      {line}
                    </span>
                  ))}
                </div>
                <Link
                  href={door.href}
                  className="text-sm font-medium text-accent link-underline justify-self-start md:justify-self-end"
                >
                  Explore
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-elevated section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-medium text-ink">
                The same rules on every front
              </h2>
              <p className="mt-4 text-body">
                A payroll cutover, a voice agent, a research protocol -
                everything ships written down, tested before launch, and
                handed over with receipts. If it is not documented, it did
                not happen.
              </p>
            </Reveal>
            <Reveal delay={100} className="flex gap-10 md:justify-end">
              <div className="flex flex-col gap-1 md:items-end">
                <a
                  href="https://tworing.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-mono text-accent hover:text-accent-hover transition-colors"
                >
                  tworing.ai
                </a>
                <span className="text-sm text-ink-subtle">
                  our product, in production
                </span>
              </div>
              <div className="flex flex-col gap-1 md:items-end">
                <span className="text-2xl font-mono text-accent">1 day</span>
                <span className="text-sm text-ink-subtle">
                  response time, always
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-medium">
              Not sure which door?
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#A8B8C8' }}>
              Describe the problem. We will tell you which practice it
              belongs to - and honestly, whether we are the right fit at all.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 mt-8 px-6 py-3 bg-surface-elevated text-ink font-medium rounded-lg shadow-elevated hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
            >
              Contact us
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
