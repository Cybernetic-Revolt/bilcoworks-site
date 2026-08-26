import type { Metadata } from 'next'
import Link from 'next/link'
import ContactCta from '@/components/ContactCta'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { Chapter, SectionHead, TileGrid } from '@/components/Section'

export const metadata: Metadata = {
  title: 'About Bilco Works',
  description:
    'A small, senior, remote-first consultancy in Calgary. Why we exist, what we believe, and how a handful of experienced practitioners covers enterprise scope.',
  alternates: { canonical: 'https://bilcoworks.com/about' },
  openGraph: {
    title: 'About Bilco Works',
    description:
      'A small, senior, remote-first consultancy in Calgary. Why we exist and how we work.',
    url: 'https://bilcoworks.com/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Bilco Works',
    description: 'A small, senior, remote-first consultancy in Calgary.',
  },
}

const beliefs = [
  {
    title: 'Systems thinking over heroics',
    body: 'Good outcomes come from good systems, not from individuals working nights and weekends. If success depends on heroic effort, the design is wrong.',
  },
  {
    title: 'Accountability requires clarity',
    body: 'You cannot hold someone accountable for vague outcomes. We define success criteria, document decisions, and make ownership explicit.',
  },
  {
    title: 'Documentation is a feature',
    body: 'Well-documented systems are easier to operate, easier to audit, and easier to change. We write things down because it makes everything else easier.',
  },
  {
    title: 'Done means done',
    body: 'We do not walk away until the work is complete and your team is equipped to operate. Handoff is not just a meeting — it is a documented transfer of capability.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The firm"
        plate="ledger"
        title="Small by design."
        lede="Bilco Works is a remote-first consultancy based in Calgary, working with enterprise clients globally. We do not scale by adding junior resources — every engagement is staffed by experienced practitioners who have done this work before."
      />

      <Chapter tone="paper">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,18rem)_minmax(0,40rem)]">
          <Reveal>
            <p className="eyebrow-ink">Why we exist</p>
            <p className="mt-6 font-display text-d4 font-light text-ink">
              Too many implementations fail for preventable reasons.
            </p>
          </Reveal>
          <Reveal delay={100} className="space-y-5">
            <p className="copy-ink text-base leading-[1.8]">
              Bilco Works was founded after seeing too many HRIS implementations
              fail the same way: unclear requirements, untested integrations,
              missing documentation, and no plan for what happens after go-live.
            </p>
            <p className="copy-ink text-base leading-[1.8]">
              These failures are not caused by bad intentions. They are caused by
              teams moving fast without the right controls, by vendors
              incentivized to close deals rather than ensure success, and by
              organizations that underestimate the complexity of enterprise HR
              systems.
            </p>
            <p className="copy-ink text-base leading-[1.8]">
              We do the work that prevents those failures. We write things down.
              We test before go-live. We build integrations that are observable
              and recoverable. We transfer knowledge so your team can operate
              independently.
            </p>
            <p className="copy-ink text-base leading-[1.8]">
              The same discipline runs the things we build for ourselves:{' '}
              <Link href="/ai/tworing" className="link-ink">
                TwoRing
              </Link>
              , our 24/7 AI receptionist for trade businesses; machine learning
              proven in open competition;{' '}
              <Link href="/research" className="link-ink">
                quantum noise-model research
              </Link>
              ; and the{' '}
              <Link href="/infrastructure" className="link-ink">
                self-hosted infrastructure
              </Link>{' '}
              it all runs on. We consult the way we build — and we build the way
              we tell clients to.
            </p>
          </Reveal>
        </div>
      </Chapter>

      <Chapter tone="ground-2">
        <SectionHead eyebrow="What we believe" title="Four positions." />
        <TileGrid items={beliefs} columns={4} />
      </Chapter>

      <Chapter tone="ground">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,18rem)_minmax(0,40rem)]">
          <Reveal>
            <p className="eyebrow">How AI fits</p>
            <p className="mt-6 font-display text-d4 font-light text-chalk">
              The machine takes the first pass. A person signs it.
            </p>
          </Reveal>
          <Reveal delay={100} className="space-y-5">
            <p className="copy text-base leading-[1.8]">
              Being small by design has a limit: enterprise scope means thousands
              of records, hundreds of clauses, and statutory rules that change
              without notice. We close that gap with AI, not with junior or
              offshore resources. The machine does the first pass on the slow,
              repetitive work: clustering payroll variances, reconciling migration
              data, parsing a CBA into a draft mapping, watching legislation per
              jurisdiction. That is how a handful of experienced practitioners
              covers the scope of a much larger team.
            </p>
            <p className="copy text-base leading-[1.8]">
              AI does not change who is accountable. We treat every AI component
              like an integration: we know what it does, how we know it is
              working, and what happens when it is wrong. AI output is never
              written to your system of record — a practitioner applies approved
              changes, and low-confidence results are held for review rather than
              acted on. Every flag is explainable. A practitioner reviews the edge
              cases. You approve what ships. The model supports the work; it does
              not own the outcome. Every AI step leaves a record of what it
              drafted, who reviewed it, and what changed — if there is no record,
              we treat it as not done.
            </p>
            <p className="copy text-base leading-[1.8]">
              Engagements are typically structured as fixed-scope projects
              following our{' '}
              <Link href="/approach" className="link-quiet">
                six-phase methodology
              </Link>
              , including multi-country payroll implementations.
            </p>
          </Reveal>
        </div>
      </Chapter>

      <ContactCta
        heading="If what you have read resonates, we should talk."
        body="No obligation, no sales pitch — just a conversation about your situation."
        note="We reply within one business day"
      />
    </>
  )
}
