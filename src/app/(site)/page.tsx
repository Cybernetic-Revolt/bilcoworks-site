import type { Metadata } from 'next'
import Link from 'next/link'
import ContactCta from '@/components/ContactCta'
import Dither from '@/components/Dither'
import PracticeScroller, { Practice } from '@/components/PracticeScroller'
import ReconField from '@/components/ReconField'
import { bestScore } from '@/content/knee'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'HRIS Consulting, AI Engineering & Quantum Research | Bilco Works',
  description:
    'Bilco Works solves hard problems on four fronts: enterprise HR and payroll systems, AI engineering, quantum research, and self-hosted infrastructure. Calgary-based, working globally.',
  alternates: { canonical: 'https://bilcoworks.com' },
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

const practices: Practice[] = [
  {
    number: '01',
    name: 'Enterprise HR & Payroll Systems',
    href: '/hris',
    plate: 'ledger',
    lede: 'Our deepest practice: HRIS and payroll implementation, rescue, and integration across Workday, UKG, SAP, and Oracle HCM. Global payroll, unionized workforces, and cutovers that work on day one.',
    proof: ['8 service lines', '6-phase methodology'],
  },
  {
    number: '02',
    name: 'AI Engineering',
    href: '/ai',
    plate: 'bloom',
    lede: 'Voice agents, applied machine learning, and LLM systems that ship — built, hosted, and verified by us. TwoRing, our 24/7 AI receptionist, answers real customers on our own voice engine.',
    proof: [`${bestScore} AUC · RSNA AI Challenge`, '2 rings · TwoRing answer time'],
  },
  {
    number: '03',
    name: 'Quantum & Research',
    href: '/research',
    plate: 'interference',
    lede: 'Longitudinal noise-model research on IBM Quantum hardware, run as pre-registered science — plus competition ML where the leaderboard keeps us honest.',
    proof: ['0.043 Hellinger · beats published baseline', 'protocol pre-registered'],
  },
  {
    number: '04',
    name: 'Servers & Infrastructure',
    href: '/infrastructure',
    plate: 'lattice',
    lede: 'Self-hosted production: virtualization, local AI inference, provider failover, monitoring, and tested restores. Our systems run on hardware we rack and operate ourselves.',
    proof: ['self-hosted voice + inference', 'runbooks, not luck'],
  },
]

const standards = [
  {
    title: 'Written down first',
    body: 'Requirements, configurations, decisions, and test results exist as documents before they exist as systems. If it is not documented, it did not happen.',
  },
  {
    title: 'Proved before launch',
    body: 'Integration testing, parallel runs, reconciliation. Problems get found in the rehearsal, not in production. The week before launch should be boring.',
  },
  {
    title: 'Handed over completely',
    body: 'Runbooks, monitoring, escalation paths, and knowledge transfer with sign-off. Your team should be able to operate without us. That is the goal from day one.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ---- Hero ---------------------------------------------------------- */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ground pt-[72px]">
        <div className="absolute inset-0 opacity-70" aria-hidden="true">
          <ReconField />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ground via-ground/55 to-ground/85" />

        <div className="shell relative w-full">
          <div className="max-w-4xl">
            <p className="eyebrow animate-fade-up">Bilco Works · Calgary</p>
            <h1
              className="mt-7 text-d1 text-chalk animate-fade-up"
              style={{ animationDelay: '90ms' }}
            >
              We build systems that can&apos;t afford to be wrong.
            </h1>
            <p
              className="lede mt-9 animate-fade-up md:text-xl"
              style={{ animationDelay: '180ms' }}
            >
              Enterprise HR platforms that reconcile to the cent, AI that does
              real work, quantum research with receipts, and the infrastructure
              underneath it all.
            </p>
            <div
              className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: '270ms' }}
            >
              <Link href="/contact" className="cta">
                Start a conversation
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/hris"
                className="font-mono text-micro-2 uppercase text-chalk-2 transition-colors hover:text-signal"
              >
                Or start with the HR practice
              </Link>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-10"
          aria-hidden="true"
        >
          <svg viewBox="0 0 12 22" className="h-5 w-3 animate-cue text-chalk-3">
            <path
              d="M6 1v19M1.5 15L6 20l4.5-5"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>

      {/* ---- Practices (pinned) -------------------------------------------- */}
      <PracticeScroller practices={practices} />

      {/* ---- The standard (light chapter) ---------------------------------- */}
      <section className="border-y border-hair-ink bg-paper py-24 md:py-32">
        <div className="shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow-ink">The standard</p>
            <h2 className="mt-6 text-d2 text-ink">
              The same rules on every front.
            </h2>
            <p className="lede-ink mt-6">
              A payroll cutover, a voice agent, a research protocol — the work
              differs, the discipline does not.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px border border-hair-ink bg-ink/10 md:mt-20 md:grid-cols-3">
            {standards.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 90}
                className="bg-paper-3 p-8 md:p-10"
              >
                <span className="index text-ink-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 text-d4 text-ink">{s.title}</h3>
                <p className="copy-ink mt-4">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Proof (dark chapter, figures) --------------------------------- */}
      <section className="relative overflow-hidden bg-ground-2 py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-[28rem] max-w-[45%] opacity-40"
          aria-hidden="true"
        >
          <Dither plate="bloom" cols={40} aspect={1.4} className="h-full w-full text-signal/25" />
        </div>

        <div className="shell relative">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">In production</p>
            <h2 className="mt-6 text-d3 text-chalk">
              We run what we sell.
            </h2>
            <p className="copy mt-5">
              The AI practice is not a slide deck. TwoRing answers real
              customers, on our own voice engine, on hardware we operate.
            </p>
          </Reveal>

          <dl className="mt-14 grid gap-px border border-hair bg-chalk/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                figure: 'tworing.ai',
                label: 'Our product, in production',
                href: 'https://tworing.ai',
              },
              { figure: bestScore, label: 'AUC · RSNA AI Challenge' },
              { figure: '0.043', label: 'Hellinger · beats published baseline' },
              { figure: '1 day', label: 'Response time, always' },
            ].map((stat) => (
              <div key={stat.figure} className="bg-ground-2 p-7 md:p-8">
                <dt className="figures font-display text-[2.25rem] font-light leading-none text-signal md:text-[2.75rem]">
                  {stat.href ? (
                    <a
                      href={stat.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-70"
                    >
                      {stat.figure}
                    </a>
                  ) : (
                    stat.figure
                  )}
                </dt>
                <dd className="mt-3 font-mono text-micro-2 uppercase leading-4 text-chalk-3">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactCta
        heading="Describe the problem. We will tell you which practice it belongs to."
        body="And honestly, whether we are the right fit at all. If the work is not ours, we will say so rather than take it."
        note="We reply within one business day"
      />
    </>
  )
}
