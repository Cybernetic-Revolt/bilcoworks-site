import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { PhaseFlow } from '@/components/illustrations'

export const metadata: Metadata = {
  title: 'HRIS Implementation Methodology | 6-Phase Delivery',
  description:
    'Structured HRIS implementation methodology: Diagnose, Design, Build, Prove, Launch, Harden. Risk controls and documented artifacts at each phase.',
  alternates: {
    canonical: 'https://bilcoworks.com/approach',
  },
  openGraph: {
    title: 'HRIS Implementation Methodology | Bilco Works',
    description:
      'Six-phase HRIS delivery methodology preventing failed implementations.',
    url: 'https://bilcoworks.com/approach',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRIS Implementation Methodology',
    description: 'Six-phase delivery methodology for enterprise HRIS.',
  },
}

const phases = [
  {
    name: 'Diagnose',
    number: '01',
    description:
      'Understand the current state, define success criteria, and identify risks before committing to a plan.',
    activities: [
      'Stakeholder interviews and requirements workshops',
      'Current-state system and process documentation',
      'Gap analysis against target state',
      'Risk identification and initial mitigation planning',
      'Success criteria definition with measurable acceptance',
    ],
    artifacts: [
      'Stakeholder map',
      'Current-state assessment',
      'Requirements document',
      'Risk register (initial)',
    ],
  },
  {
    name: 'Design',
    number: '02',
    description:
      'Document everything before building. Configuration decisions, integration specifications, data mappings, and security model - all written down and approved.',
    activities: [
      'Configuration design aligned to requirements',
      'Integration specification and sequencing',
      'Data mapping with transformation rules',
      'Security and access model design',
      'Test strategy and scenario development',
    ],
    artifacts: [
      'Configuration workbook',
      'Integration specifications',
      'Data mapping document',
      'Security model documentation',
      'Test plan',
    ],
  },
  {
    name: 'Build',
    number: '03',
    description:
      'Iterative configuration and development with regular checkpoints. No surprises at the end.',
    activities: [
      'System configuration per approved design',
      'Integration development with error handling',
      'Data migration scripting and dry runs',
      'Unit testing of components',
      'Regular demo and feedback cycles',
    ],
    artifacts: [
      'Configured system (non-production)',
      'Working integrations (test environment)',
      'Migration scripts with validation',
      'Unit test results',
    ],
  },
  {
    name: 'Prove',
    number: '04',
    description:
      'Testing happens here, not in production. User acceptance, integration testing, parallel runs, and reconciliation.',
    activities: [
      'User acceptance testing with business users',
      'End-to-end integration testing',
      'Parallel payroll runs with reconciliation',
      'Performance and load testing (if applicable)',
      'Defect triage and resolution',
    ],
    artifacts: [
      'UAT sign-off',
      'Integration test results',
      'Parallel run reconciliation reports',
      'Defect log with resolution status',
    ],
  },
  {
    name: 'Launch',
    number: '05',
    description:
      'Cutover execution with go/no-go checkpoints. Rollback plan ready. Data validated. Integrations verified.',
    activities: [
      'Cutover rehearsal in production-like environment',
      'Go/no-go checkpoint with stakeholders',
      'Data migration execution with validation',
      'Integration activation and verification',
      'Hypercare support during initial operations',
    ],
    artifacts: [
      'Cutover plan with timing and owners',
      'Rollback procedures',
      'Go-live checklist',
      'Data validation reports',
      'Hypercare log',
    ],
  },
  {
    name: 'Harden',
    number: '06',
    description:
      'Transition to steady-state operations. Monitoring, runbooks, and knowledge transfer so your team owns it.',
    activities: [
      'Monitoring implementation and threshold tuning',
      'Runbook development for operations and incidents',
      'Knowledge transfer sessions with internal team',
      'Handoff documentation and sign-off',
      'Post-implementation review',
    ],
    artifacts: [
      'Monitoring dashboard or checklist',
      'Operations runbook',
      'Incident response procedures',
      'Knowledge transfer materials',
      'Handoff acceptance',
    ],
  },
]

const principles = [
  {
    title: 'Ownership is explicit',
    description:
      'Every decision, risk, and deliverable has a named owner. Ambiguity in ownership is a project risk we eliminate early.',
  },
  {
    title: 'Controls before velocity',
    description:
      'We establish checkpoints and approval gates. Moving fast without controls creates technical debt and audit exposure.',
  },
  {
    title: 'Change is managed',
    description:
      'Scope changes go through a defined process. Impact is assessed, documented, and approved before implementation.',
  },
  {
    title: 'Decisions are auditable',
    description:
      'We maintain decision logs with rationale. When someone asks why something is built a certain way, there is a documented answer.',
  },
]

const artifacts = [
  ['Requirements Document', 'Defines what needs to be built', 'Diagnose'],
  ['Configuration Workbook', 'Documents all system settings', 'Design'],
  ['Data Mapping', 'Source-to-target field mapping with rules', 'Design'],
  ['Integration Specifications', 'Technical specs for each integration', 'Design'],
  ['Test Plan', 'Scenarios, data, and acceptance criteria', 'Design'],
  ['Cutover Plan', 'Sequenced activities with timing and rollback', 'Prove'],
  ['Reconciliation Reports', 'Proof that data matches expected state', 'Prove'],
  ['Operations Runbook', 'Day-to-day procedures for steady state', 'Harden'],
  ['Monitoring Checklist', 'What to watch and when to escalate', 'Harden'],
]

export default function ApproachPage() {
  return (
    <div>
      <section className="relative section-padding bg-surface-secondary border-b border-rule overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
        <div className="container-wide">
          <Reveal>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.08]">
              HRIS Implementation Methodology
            </h1>
            <p className="mt-5 text-lg text-ink-muted max-w-2xl leading-relaxed">
              Every engagement follows a structured methodology. Not because
              process is the goal, but because disciplined execution prevents
              the failures we have seen too many times.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-10 bg-surface-elevated border border-rule rounded-xl p-6 overflow-x-auto shadow-card">
            <PhaseFlow />
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-2xl font-medium text-ink">
            Delivery Phases
          </h2>
          <p className="mt-4 text-body max-w-2xl">
            Six phases, each with defined activities and artifacts.
            Phases can be compressed or expanded based on scope, but the
            structure remains consistent.
          </p>

          <div className="mt-12 space-y-12 relative">
            <div className="hidden lg:block absolute left-[50px] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-rule-strong to-transparent" />
            {phases.map((phase, index) => (
              <Reveal
                key={phase.number}
                delay={index * 50}
                className="grid lg:grid-cols-[100px_1fr] gap-6"
              >
                <div className="flex lg:flex-col items-baseline lg:items-start gap-3 relative">
                  <span className="text-4xl font-mono text-accent/30">
                    {phase.number}
                  </span>
                  <h3 className="text-xl font-medium text-ink">
                    {phase.name}
                  </h3>
                </div>

                <div className="group p-6 bg-surface-elevated border border-rule rounded-xl shadow-subtle transition-all duration-300 ease-out-expo hover:shadow-card hover:border-rule-strong">
                  <p className="text-ink-muted">{phase.description}</p>

                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-ink uppercase tracking-wide">
                        Key Activities
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {phase.activities.map((activity) => (
                          <li
                            key={activity}
                            className="flex gap-3 text-sm text-ink-muted"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-ink-subtle rounded-full" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-ink uppercase tracking-wide">
                        Artifacts
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {phase.artifacts.map((artifact) => (
                          <li
                            key={artifact}
                            className="flex gap-3 text-sm text-ink-muted"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-teal rounded-full" />
                            {artifact}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink-muted">
            See how we apply this methodology across our <Link href="/services" className="text-ink underline hover:no-underline">HRIS consulting services</Link>.
          </p>
        </div>
      </section>

      <section className="section-elevated section-padding">
        <div className="container-wide">
          <h2 className="text-2xl font-medium text-ink">
            Risk Management Posture
          </h2>
          <p className="mt-4 text-body max-w-2xl">
            We build controls into the delivery process. These are not overhead - they are
            how we prevent the failures that derail projects.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl">
            {principles.map((principle, index) => (
              <Reveal
                as="div"
                key={principle.title}
                delay={index * 60}
                className="card"
              >
                <h3 className="font-medium text-ink">{principle.title}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {principle.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-2xl font-medium text-ink">
            Standard Artifacts
          </h2>
          <p className="mt-4 text-body max-w-2xl">
            These documents are produced on every engagement. The format adapts
            to client standards, but the content is non-negotiable.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-rule">
                  <th className="py-3 pr-6 font-medium text-ink">
                    Artifact
                  </th>
                  <th className="py-3 pr-6 font-medium text-ink">
                    Purpose
                  </th>
                  <th className="py-3 font-medium text-ink">Phase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule-subtle">
                {artifacts.map(([artifact, purpose, phase]) => (
                  <tr key={artifact} className="text-ink-muted transition-colors duration-200 hover:bg-surface-secondary/70">
                    <td className="py-3 pr-6 font-medium text-ink">
                      {artifact}
                    </td>
                    <td className="py-3 pr-6">{purpose}</td>
                    <td className="py-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent-muted/60 text-accent">
                        {phase}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <h2 className="text-2xl md:text-3xl font-medium">
            Questions about our process?
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: '#A8B8C8' }}>
            We are happy to walk through how this applies to your specific
            situation. No commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 mt-8 px-6 py-3 bg-surface-elevated text-ink font-medium rounded-lg shadow-elevated hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
          >
            Start a conversation
          </Link>
          <p className="mt-4 text-sm" style={{ color: '#8896A6' }}>
            We will tell you if we are not the right fit.
          </p>
        </div>
      </section>
    </div>
  )
}
