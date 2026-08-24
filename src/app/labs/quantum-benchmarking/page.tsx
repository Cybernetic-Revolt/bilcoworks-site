import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Quantum Benchmarking | NISQ Noise Models | Bilco Labs',
  description:
    'Longitudinal benchmarking and noise-model validation on IBM Quantum hardware: can learned noise models beat calibration models - and keep that edge when predicting future hardware?',
  alternates: {
    canonical: 'https://bilcoworks.com/labs/quantum-benchmarking',
  },
  openGraph: {
    title: 'Quantum Benchmarking | Bilco Labs',
    description:
      'Longitudinal noise-model validation on IBM Quantum NISQ hardware, run as pre-registered research.',
    url: 'https://bilcoworks.com/labs/quantum-benchmarking',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantum Benchmarking | Bilco Labs',
    description:
      'Longitudinal noise-model validation on IBM Quantum NISQ hardware.',
  },
}

const findings = [
  {
    heading: 'Calibration models are ~3× pessimistic',
    text: 'Chip-averaged calibration noise models predict far more error than the hardware actually produces on shallow entangling circuits. The published spec sheet and the device you get are different machines.',
  },
  {
    heading: 'Per-qubit models beat noiseless',
    text: 'Models built from per-qubit calibration data predict real GHZ-state output with a Hellinger distance of 0.043 - better than the 0.055 the vendor publishes for comparable hardware, and better than assuming no noise at all.',
  },
  {
    heading: 'No staleness penalty at four months',
    text: 'The surprise so far: noise-model predictions did not measurably degrade across a four-month gap between runs. If that holds, "how often must you recalibrate?" has a cheaper answer than the field assumes.',
  },
]

const disciplines = [
  {
    heading: 'Pre-registered protocol',
    text: 'Hypotheses, metrics, and the analysis plan were fixed in writing before the later data points - the protocol can be amended, never rewritten. The same rule we apply to client test plans: decide what passing looks like before you run the test.',
  },
  {
    heading: 'Every claim traces to a receipt',
    text: 'All results trace back to a recorded job ID and archived calibration snapshot. Three retrospective hardware runs are analysed so far, with the battery frozen so future runs stay comparable.',
  },
  {
    heading: 'An honest ceiling',
    text: 'This is not peer-reviewed work, and we say so. The stated ambition is an arXiv note or workshop paper after at least six monthly runs - no sooner, because the forward-transfer question needs the time series.',
  },
]

export default function QuantumBenchmarkingPage() {
  return (
    <div>
      <section className="relative section-padding bg-surface-secondary border-b border-rule overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
        <div className="container-wide">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Labs / Research</p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.08]">
              Quantum Benchmarking
            </h1>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed">
              Longitudinal benchmarking and noise-model validation on IBM
              Quantum hardware: a fixed battery of shallow entangling circuits,
              run for months on the same device, asking a question the
              literature has not answered.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink">
              The research question
            </h2>
            <p className="mt-4 text-body">
              Today&apos;s quantum computers are noisy, and simulating that
              noise well matters for everything built on them. The standard
              approach derives a noise model from the device&apos;s published
              calibration data. Ours asks: for shallow entangling circuits on
              a fixed superconducting device, is calibration-model prediction
              error dominated by <em>model form</em> or by{' '}
              <em>parameter staleness</em>? And can a <em>learned</em> noise
              model beat the calibration models - and retain that edge when
              predicting <em>future</em> hardware behaviour?
            </p>
            <p className="mt-4 text-body">
              That forward-transfer angle - how long a noise model stays good,
              its half-life - is the unclaimed niche, verified against the
              existing literature before we committed to it. The instrument is
              deliberately modest: Bell, GHZ, W, and product states on four
              qubits, measured in five tomography bases, submitted on
              IBM&apos;s free tier. Rigour over scale.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink">Early results</h2>
            <p className="mt-4 text-body max-w-2xl">
              Three hardware runs analysed across seven months, with the
              circuit battery frozen so every future run stays comparable.
            </p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {findings.map((item, index) => (
              <Reveal
                key={item.heading}
                delay={index * 70}
                className="card"
              >
                <h3 className="font-medium text-ink">{item.heading}</h3>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink">
              Run like an engagement, not a hobby
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-x-12 gap-y-10">
            {disciplines.map((item, index) => (
              <Reveal
                key={item.heading}
                delay={index * 70}
                className="relative pl-6 border-l-2 border-rule transition-colors duration-300 hover:border-accent"
              >
                <h3 className="font-medium text-ink">{item.heading}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link href="/labs" className="text-ink font-medium link-underline">
              Back to Labs
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
