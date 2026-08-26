import type { Metadata } from 'next'
import Link from 'next/link'
import ContactCta from '@/components/ContactCta'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { Chapter, SectionHead, TileGrid } from '@/components/Section'
import { artifacts, phases, principles } from '@/content/hr'

export const metadata: Metadata = {
  title: 'HRIS Implementation Methodology',
  description:
    'Our six-phase HRIS delivery methodology: diagnose, design, build, prove, launch, harden — with the activities and artifacts each phase produces.',
  alternates: { canonical: 'https://bilcoworks.com/approach' },
  openGraph: {
    title: 'HRIS Implementation Methodology | Bilco Works',
    description:
      'Six phases, each with defined activities and artifacts. Disciplined execution, not methodology theater.',
    url: 'https://bilcoworks.com/approach',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRIS Implementation Methodology',
    description: 'Six phases, each with defined activities and artifacts.',
  },
}

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="HR practice detail"
        plate="lattice"
        title="Six phases, in full."
        lede="Not because process is the goal, but because disciplined execution prevents the failures we have seen too many times. It grew up in enterprise HR delivery — and it now governs everything we ship, from client systems to our own products and research."
      >
        <Link href="/hris" className="pill">
          Back to the HR practice
        </Link>
      </PageHero>

      {phases.map((phase, i) => {
        const light = i % 2 === 0
        return (
          <section
            key={phase.number}
            id={phase.name.toLowerCase()}
            className={`scroll-mt-24 border-t py-20 md:py-24 ${
              light ? 'border-hair-ink bg-paper' : 'border-hair-ink bg-paper-2'
            }`}
          >
            <div className="shell">
              <Reveal className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
                <div>
                  <span className="index text-signal-deep">{phase.number}</span>
                  <h2 className="mt-5 text-d3 text-ink">{phase.name}</h2>
                  <p className="copy-ink mt-5">{phase.description}</p>
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <h3 className="eyebrow-ink">Activities</h3>
                    <ul className="mt-5 space-y-3">
                      {phase.activities.map((a) => (
                        <li
                          key={a}
                          className="flex gap-3 text-sm leading-[1.7] text-ink-2"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.55rem] h-1 w-1 shrink-0 bg-signal-deep"
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="eyebrow-ink">Artifacts produced</h3>
                    <ul className="mt-5 space-y-3">
                      {phase.artifacts.map((a) => (
                        <li
                          key={a}
                          className="flex gap-3 text-sm leading-[1.7] text-ink-2"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.55rem] h-1 w-1 shrink-0 bg-ink-3"
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}

      <Chapter tone="ground-2">
        <SectionHead
          eyebrow="Risk posture"
          title="Four positions we hold."
        />
        <TileGrid
          columns={4}
          items={principles.map((p) => ({ title: p.title, body: p.description }))}
        />
      </Chapter>

      <Chapter tone="ground">
        <SectionHead
          eyebrow="Standard artifacts"
          title="What you are left holding."
          lede="Every engagement ends with documents your team owns, not a consultant who remembers how it works."
        />

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-hair">
                <th scope="col" className="pb-4 pr-6 eyebrow-quiet font-normal">
                  Artifact
                </th>
                <th scope="col" className="pb-4 pr-6 eyebrow-quiet font-normal">
                  What it is
                </th>
                <th scope="col" className="pb-4 eyebrow-quiet font-normal">
                  Phase
                </th>
              </tr>
            </thead>
            <tbody>
              {artifacts.map(([name, what, phase]) => (
                <tr key={name} className="border-b border-hair">
                  <th
                    scope="row"
                    className="py-4 pr-6 align-top text-sm font-normal text-chalk"
                  >
                    {name}
                  </th>
                  <td className="py-4 pr-6 align-top text-sm text-chalk-2">
                    {what}
                  </td>
                  <td className="py-4 align-top font-mono text-micro-2 uppercase text-signal">
                    {phase}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Chapter>

      <ContactCta
        heading="Questions about our process?"
        body="If you are evaluating whether this method fits your program, ask. We would rather talk it through than have you find out mid-engagement."
        note="We reply within one business day"
      />
    </>
  )
}
