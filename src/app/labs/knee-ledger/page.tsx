import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'The Knee Ledger | RSNA AI Challenge | Bilco Labs',
  description:
    'Teaching one machine to read knee MRIs against 2,300 teams in the RSNA AI Challenge - with a rule that every claim needs a receipt and nothing ships without clearing an automated gate.',
  alternates: {
    canonical: 'https://bilcoworks.com/labs/knee-ledger',
  },
  openGraph: {
    title: 'The Knee Ledger | Bilco Labs',
    description:
      'A receipts-first campaign in the RSNA knee MRI AI Challenge: 0.899 public AUC, twenty-minute inference, 50+ gated experiments.',
    url: 'https://bilcoworks.com/labs/knee-ledger',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Knee Ledger | Bilco Labs',
    description:
      'A receipts-first campaign in the RSNA knee MRI AI Challenge.',
  },
}

const stats = [
  { value: '0.899', label: 'best public score' },
  { value: '~20 min', label: 'full inference run' },
  { value: 'Top 8%', label: 'efficiency track, peak' },
  { value: '50+', label: 'gated experiments' },
]

const climb = [
  { score: '.777', label: 'baseline', height: '18%' },
  { score: '.833', label: 'adapted backbone', height: '52%' },
  { score: '.874', label: '+expert data', height: '78%' },
  { score: '.899', label: '+distillation', height: '93%' },
]

const pillars = [
  {
    number: '01',
    heading: 'Evidence discipline',
    text: 'Every experiment declares its hypothesis and kill-band before running. Every result - including the ~40 that failed - lives in a ledger with a verdict. Noise bands gate every claim, so a lucky wiggle never gets promoted to a finding.',
  },
  {
    number: '02',
    heading: 'The model',
    text: "A large vision transformer adapted to knee anatomy using 1,250 externally sourced, expert-labeled MRIs - supervision most of the field never touched - plus scan physics recovered from DICOM headers, and knowledge distilled from the community's strongest public ensembles.",
  },
  {
    number: '03',
    heading: 'The machine',
    text: 'Inference engineered for the efficiency prize: both scoring GPUs in parallel, decoding hidden behind computation, cold-start halved. A full 1,300-exam evaluation runs in about twenty minutes while comparable-accuracy rivals take hours. Deploys drive themselves: push, verify on-image, gate, submit, watch.',
  },
]

const fieldNotes = [
  {
    tag: 'CAUGHT',
    text: 'A celebrated public notebook’s "0.906 configuration" turned out to be a hardcoded three-row stub that could never fire on the hidden test set. Verified before we bet a submission on it.',
  },
  {
    tag: 'CAUGHT',
    text: 'Our 58-exam gold standard was silently memorized by public models that trained on it - inflating offline scores by 7× the real gain. Quantified, ledgered, and the metric retired for that lineage.',
  },
  {
    tag: 'CAUGHT',
    text: 'A "grand master" model bundle with impressive naming and gigabytes of weights: the author’s actual leaderboard best was 0.780. Refuted from public records in minutes.',
  },
  {
    tag: 'BURNED',
    text: 'Two early submissions scored 0.500 - one hardcoded tensor dimension, one filename mismatch - while their logs plainly said so. Both post-mortems became permanent automated gates; neither failure mode has recurred.',
  },
  {
    tag: 'CAUGHT',
    text: 'The efficiency leaderboard only scores explicitly selected submissions - a stale checkbox graded a week-old model at rank 870 while the real one sat unscored. One selection later: rank 136.',
  },
]

export default function KneeLedgerPage() {
  return (
    <div>
      <section className="relative section-padding bg-surface-secondary border-b border-rule overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
        <div className="container-wide">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Labs / Competition</p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.08]">
              The Knee Ledger
            </h1>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed">
              Teaching one machine to read knee MRIs against 2,300 teams in
              the{' '}
              <a
                href="https://www.kaggle.com/competitions/rsna-knee-abnormality-detection"
                className="text-accent link-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                RSNA AI Challenge
              </a>{' '}
              - with a rule that every claim needs a receipt, every experiment
              states its pass-bar before it runs, and nothing ships without
              clearing an automated gate.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 60}>
                <p className="text-3xl font-mono text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow">The problem</p>
            <h2 className="mt-3 text-2xl font-medium text-ink">
              Twelve findings, fifty-eight answers
            </h2>
            <p className="mt-4 text-body">
              A knee MRI arrives as a stack of cross-sections in three planes.
              The model must score twelve abnormalities per exam - ligament
              tears, meniscal damage, arthritis in three compartments, fluid,
              fractures - scored by macro-averaged AUC across all twelve.
            </p>
            <p className="mt-4 text-body">
              The defining constraint: of 4,407 training exams, only 58 carry
              expert radiologist labels. Everything else is machine-extracted
              from written radiology reports in ten languages. The competition
              is less about bigger models than about squeezing truth out of
              noisy supervision - and measuring honestly enough not to fool
              yourself, when your entire validation set fits in a waiting
              room.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated section-padding">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow">The climb</p>
            <h2 className="mt-3 text-2xl font-medium text-ink">
              Every rung, gated and receipted
            </h2>
            <p className="mt-2 text-sm font-mono text-ink-subtle">
              PUBLIC LEADERBOARD &middot; MACRO-AUC &middot; AUG 06 &rarr; AUG 24
            </p>
          </Reveal>
          <Reveal className="mt-8" delay={80}>
            <div className="flex items-end gap-4 h-48 max-w-xl" role="img" aria-label="Leaderboard progression: baseline 0.777, adapted backbone 0.833, plus expert data 0.874, plus distillation 0.899">
              {climb.map((step) => (
                <div key={step.label} className="flex-1 flex flex-col items-center justify-end h-full">
                  <span className="text-sm font-mono text-ink">{step.score}</span>
                  <div
                    className="mt-2 w-full rounded-t-md bg-gradient-to-t from-accent/30 to-accent"
                    style={{ height: step.height }}
                  />
                  <span className="mt-2 text-xs text-ink-muted text-center leading-tight">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-body max-w-xl">
              Ten scored submissions, each testing exactly one structural
              change - and a verified 0.935 pipeline reproduction now in the
              scoring queue. Two early slots burned on silent failures became
              the reason every later submission passes a hard automated gate
              first. The gate has since blocked six bad submissions at a cost
              of zero.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow">The approach</p>
            <h2 className="mt-3 text-2xl font-medium text-ink">
              Three pillars, one shared GPU
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <Reveal
                key={pillar.number}
                delay={index * 70}
                className="group flex gap-4 p-5 bg-surface-elevated border border-rule rounded-xl shadow-subtle transition-all duration-300 ease-out-expo hover:shadow-card hover:-translate-y-0.5 hover:border-rule-strong"
              >
                <span className="text-2xl font-mono text-accent/30 select-none transition-colors duration-300 group-hover:text-accent/70">
                  {pillar.number}
                </span>
                <div>
                  <h3 className="font-medium text-ink">{pillar.heading}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-elevated section-padding">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow">Field notes</p>
            <h2 className="mt-3 text-2xl font-medium text-ink">
              What the gates caught
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {fieldNotes.map((note, index) => (
              <Reveal
                key={index}
                delay={index * 60}
                className="flex gap-4 items-start"
              >
                <span
                  className={`shrink-0 mt-0.5 px-2 py-0.5 rounded text-xs font-mono ${
                    note.tag === 'BURNED'
                      ? 'bg-red-50 text-red-700 ring-1 ring-red-200'
                      : 'bg-accent-muted/60 text-accent ring-1 ring-rule'
                  }`}
                >
                  {note.tag}
                </span>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {note.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <p className="eyebrow">Status</p>
            <h2 className="mt-3 text-2xl font-medium text-ink">
              Live, and still climbing
            </h2>
            <p className="mt-4 text-body">
              The campaign runs continuously: an hourly loop harvests results,
              logs the leaderboards, and scans the community for newly
              published models worth converting - because in a field this
              fast, standing still costs about ten ranks a day. As of late
              August: a verified-0.935 pipeline reproduction is in the scoring
              queue, and its ensemble is being distilled into the
              twenty-minute model to push the efficiency entry back into the
              visible top 100.
            </p>
            <p className="mt-4 text-sm text-ink-subtle leading-relaxed">
              A note on timing: this page tells the story; the full technical
              write-up - architectures, training recipes, and the complete
              experiment ledger - publishes after the competition closes on
              October 22, per good sportsmanship and the open-source
              winners&apos; obligations.
            </p>
            <div className="mt-8">
              <Link href="/labs" className="text-ink font-medium link-underline">
                Back to Labs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
