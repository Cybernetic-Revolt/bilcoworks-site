import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import {
  bestScore,
  climb,
  climbLabel,
  runsOn,
  stats,
  teamsExact,
} from '@/content/knee'
import { Chapter, Narrative, SectionHead, TileGrid } from '@/components/Section'

export const metadata: Metadata = {
  title: 'The Knee Ledger | RSNA AI Challenge | Bilco Works',
  description:
    'Teaching one machine to read knee MRIs against 2,300 teams in the RSNA AI Challenge — with a rule that every claim needs a receipt and nothing ships without clearing an automated gate.',
  alternates: { canonical: 'https://bilcoworks.com/ai/knee-ledger' },
  openGraph: {
    title: 'The Knee Ledger | Bilco Works',
    description:
      'Machine learning under competition pressure, with an evidence ledger for every claim.',
    url: 'https://bilcoworks.com/ai/knee-ledger',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Knee Ledger | Bilco Works',
    description: 'Machine learning under competition pressure, receipted.',
  },
}

const pillars = [
  {
    title: 'Evidence discipline',
    body: 'Every experiment declares its hypothesis and kill-band before running. Every result — including the ~40 that failed — lives in a ledger with a verdict. Noise bands gate every claim, so a lucky wiggle never gets promoted to a finding.',
  },
  {
    title: 'The model',
    body: "A large vision transformer adapted to knee anatomy using 1,250 externally sourced, expert-labeled MRIs — supervision most of the field never touched — plus scan physics recovered from DICOM headers, and knowledge distilled from the community's strongest public ensembles.",
  },
  {
    title: 'The machine',
    body: 'Inference engineered for the efficiency prize: both scoring GPUs in parallel, decoding hidden behind computation, cold-start halved. A full 1,300-exam evaluation runs in about twenty minutes while comparable-accuracy rivals take hours. Deploys drive themselves: push, verify on-image, gate, submit, watch.',
  },
]

const fieldNotes = [
  {
    tag: 'CAUGHT',
    text: 'A celebrated public notebook’s "0.906 configuration" turned out to be a hardcoded three-row stub that could never fire on the hidden test set. Verified before we bet a submission on it.',
  },
  {
    tag: 'CAUGHT',
    text: 'Our 58-exam gold standard was silently memorized by public models that trained on it — inflating offline scores by 7× the real gain. Quantified, ledgered, and the metric retired for that lineage.',
  },
  {
    tag: 'CAUGHT',
    text: 'A "grand master" model bundle with impressive naming and gigabytes of weights: the author’s actual leaderboard best was 0.780. Refuted from public records in minutes.',
  },
  {
    tag: 'BURNED',
    text: 'Two early submissions scored 0.500 — one hardcoded tensor dimension, one filename mismatch — while their logs plainly said so. Both post-mortems became permanent automated gates; neither failure mode has recurred.',
  },
  {
    tag: 'CAUGHT',
    text: 'The efficiency leaderboard only scores explicitly selected submissions — a stale checkbox graded a week-old model at rank 870 while the real one sat unscored. One selection later: rank 136.',
  },
]

export default function KneeLedgerPage() {
  return (
    <>
      <PageHero
        eyebrow="AI engineering · Competition"
        plate="interference"
        title="The Knee Ledger."
        lede="Teaching one machine to read knee MRIs against 2,300 teams in the RSNA AI Challenge — with a rule that every claim needs a receipt, every experiment states its pass-bar before it runs, and nothing ships without clearing an automated gate."
      >
        <a
          href="https://www.kaggle.com/competitions/rsna-knee-abnormality-detection"
          className="pill"
          target="_blank"
          rel="noopener noreferrer"
        >
          The competition
          <span aria-hidden="true">↗</span>
        </a>
      </PageHero>

      <section className="border-t border-hair bg-ground-2 py-14">
        <div className="shell">
          <dl className="grid gap-px border border-hair bg-chalk/10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ground-2 p-7">
                <dt className="figures font-display text-2xl font-light text-signal">
                  {stat.value}
                </dt>
                <dd className="mt-3 font-mono text-micro-2 uppercase leading-4 text-chalk-3">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Chapter tone="paper">
        <Narrative
          tone="paper"
          label="The problem"
          statement="Twelve findings, fifty-eight answers."
        >
          <p>
            A knee MRI arrives as a stack of cross-sections in three planes. The
            model must score twelve abnormalities per exam — ligament tears,
            meniscal damage, arthritis in three compartments, fluid, fractures —
            scored by macro-averaged AUC across all twelve.
          </p>
          <p>
            The defining constraint: of 4,407 training exams, only 58 carry
            expert radiologist labels. Everything else is machine-extracted from
            written radiology reports in ten languages. The competition is less
            about bigger models than about squeezing truth out of noisy
            supervision — and measuring honestly enough not to fool yourself,
            when your entire validation set fits in a waiting room.
          </p>
        </Narrative>
      </Chapter>

      <Chapter tone="paper-2">
        <SectionHead
          tone="paper-2"
          eyebrow="The climb"
          title="Every rung, gated and receipted."
        />
        <p className="mt-4 font-mono text-micro-2 uppercase text-ink-3">
          Public leaderboard · Macro-AUC · Aug 06 → Aug 24
        </p>

        <Reveal className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:items-end">
          <div
            className="flex h-52 items-end gap-5"
            role="img"
            aria-label={climbLabel}
          >
            {climb.map((step) => (
              <div
                key={step.label}
                className="flex h-full flex-1 flex-col items-center justify-end"
              >
                <span className="figures font-mono text-sm text-ink">
                  {step.score}
                </span>
                <div
                  className="mt-3 w-full bg-signal-deep"
                  style={{ height: step.height }}
                />
                <span className="mt-3 text-center text-xs leading-tight text-ink-2">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
          <p className="copy-ink text-base leading-[1.8]">
            Ten scored submissions, each testing exactly one structural change.
            Two early slots burned on silent failures became the reason every
            later submission passes a hard automated gate first — the gate has
            since blocked six bad submissions at a cost of zero.
          </p>
        </Reveal>
      </Chapter>

      <Chapter tone="ground-2">
        <SectionHead
          eyebrow="The approach"
          title="Three pillars, one shared GPU."
        />
        <TileGrid items={pillars} />
      </Chapter>

      <Chapter tone="ground">
        <SectionHead
          eyebrow="Field notes"
          title="What the gates caught."
        />
        <ul className="mt-12 max-w-4xl border-t border-hair">
          {fieldNotes.map((note, i) => (
            <Reveal
              as="li"
              key={note.text}
              delay={i * 50}
              className="flex flex-col gap-3 border-b border-hair py-6 sm:flex-row sm:gap-6"
            >
              <span
                className={`shrink-0 self-start border px-2 py-1 font-mono text-micro-2 uppercase ${
                  note.tag === 'BURNED'
                    ? 'border-chalk-3 text-chalk-3'
                    : 'border-signal/50 text-signal'
                }`}
              >
                {note.tag}
              </span>
              <p className="text-sm leading-[1.8] text-chalk-2">{note.text}</p>
            </Reveal>
          ))}
        </ul>
      </Chapter>

      <Chapter tone="paper">
        <Narrative
          tone="paper"
          label="Status"
          statement="Live, and still climbing."
        >
          <p>
            The campaign runs continuously: an hourly loop harvests results, logs
            the leaderboards, and scans the community for newly published models
            worth converting — because in a field this fast, standing still costs
            about ten ranks a day. As of late August the main entry stands at{' '}
            {bestScore} — top 3% of {teamsExact} teams — and that pipeline&apos;s
            ensemble is being distilled into the twenty-minute model to push the
            efficiency entry deeper into the top 100.
          </p>
          <p className="!text-sm !leading-[1.75] text-ink-3">
            A note on timing: this page tells the story; the full technical
            write-up — architectures, training recipes, and the complete
            experiment ledger — publishes after the competition closes on October
            22, per good sportsmanship and the open-source winners&apos;
            obligations.
          </p>
          <p className="!text-sm font-mono !leading-[1.75] text-ink-3">
            {runsOn}
          </p>
          <p>
            <Link href="/ai" className="link-ink">
              Back to AI Engineering
            </Link>
          </p>
        </Narrative>
      </Chapter>
    </>
  )
}
