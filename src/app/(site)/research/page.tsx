import type { Metadata } from "next";
import ContactCta from "@/components/ContactCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  Chapter,
  Narrative,
  SectionHead,
  TileGrid,
} from "@/components/Section";

export const metadata: Metadata = {
  title: "Quantum Benchmarking | NISQ Noise Models | Bilco Works",
  description:
    "Longitudinal benchmarking and noise-model validation on IBM Quantum hardware: can learned noise models beat calibration models - and keep that edge when predicting future hardware?",
  alternates: { canonical: "https://bilcoworks.com/research" },
  openGraph: {
    title: "Quantum Benchmarking | Bilco Works",
    description:
      "Longitudinal noise-model validation on IBM Quantum NISQ hardware, run as pre-registered research.",
    url: "https://bilcoworks.com/research",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantum Benchmarking | Bilco Works",
    description:
      "Longitudinal noise-model validation on IBM Quantum NISQ hardware.",
  },
};

const findings = [
  {
    title: "Calibration models are ~3× pessimistic",
    body: "Chip-averaged calibration noise models predict far more error than the hardware actually produces on shallow entangling circuits. The published spec sheet and the device you get are different machines.",
  },
  {
    title: "Per-qubit models beat noiseless",
    body: "Models built from per-qubit calibration data predict real GHZ-state output with a Hellinger distance of 0.043 — better than the 0.055 the vendor publishes for comparable hardware, and better than assuming no noise at all.",
  },
  {
    title: "No staleness penalty at four months",
    body: 'The surprise so far: noise-model predictions did not measurably degrade across a four-month gap between runs. If that holds, "how often must you recalibrate?" has a cheaper answer than the field assumes.',
  },
];

const disciplines = [
  {
    title: "Pre-registered protocol",
    body: "Hypotheses, metrics, and the analysis plan were fixed in writing before the later data points — the protocol can be amended, never rewritten. The same rule we apply to client test plans: decide what passing looks like before you run the test.",
  },
  {
    title: "Every claim traces to a receipt",
    body: "All results trace back to a recorded job ID and archived calibration snapshot. Three retrospective hardware runs are analysed so far, with the battery frozen so future runs stay comparable.",
  },
  {
    title: "An honest ceiling",
    body: "This is not peer-reviewed work, and we say so. The stated ambition is an arXiv note or workshop paper after at least six monthly runs — no sooner, because the forward-transfer question needs the time series.",
  },
];

export default function QuantumBenchmarkingPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Practice"
        plate="interference"
        title="Quantum benchmarking."
        lede="Longitudinal noise-model validation on IBM Quantum hardware: a fixed battery of shallow entangling circuits, run for months on the same device, asking a question the literature has not answered."
      />

      <Chapter tone="paper">
        <Narrative
          tone="paper"
          label="The research question"
          statement="How long does a noise model stay good?"
        >
          <p>
            Today&apos;s quantum computers are noisy, and simulating that noise
            well matters for everything built on them. The standard approach
            derives a noise model from the device&apos;s published calibration
            data. Ours asks: for shallow entangling circuits on a fixed
            superconducting device, is calibration-model prediction error
            dominated by <em>model form</em> or by <em>parameter staleness</em>?
            And can a <em>learned</em> noise model beat the calibration models —
            and retain that edge when predicting <em>future</em> hardware
            behaviour?
          </p>
          <p>
            That forward-transfer angle — how long a noise model stays good, its
            half-life — is the unclaimed niche, verified against the existing
            literature before we committed to it. The instrument is deliberately
            modest: Bell, GHZ, W, and product states on four qubits, measured in
            five tomography bases, submitted on IBM&apos;s free tier. Rigour
            over scale.
          </p>
        </Narrative>
      </Chapter>

      <Chapter tone="ground-2">
        <SectionHead
          eyebrow="Early results"
          title="Three runs, seven months, battery frozen."
          lede="Every future run stays comparable, because the circuits do not change."
        />
        <TileGrid items={findings} />
      </Chapter>

      <Chapter tone="ground">
        <SectionHead
          eyebrow="Discipline"
          title="Run like an engagement, not a hobby."
        />
        <TileGrid items={disciplines} />
      </Chapter>

      <ContactCta
        heading="Research discipline, applied to your system."
        body="The habits that make research honest — fix the success criteria first, trace every claim to a receipt, state the ceiling — are the same habits that make a payroll cutover boring."
        note="We reply within one business day"
      />
    </>
  );
}
