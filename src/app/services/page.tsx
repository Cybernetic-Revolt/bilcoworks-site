import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { IntegrationDiagram } from '@/components/illustrations'
import {
  ImplementationIcon,
  RescueIcon,
  IntegrationIcon,
  ArchitectureIcon,
  HardeningIcon,
  GlobalPayrollIcon,
  UnionIcon,
  AIIcon,
} from '@/components/illustrations'

export const metadata: Metadata = {
  title: 'HRIS Implementation & Integration Services',
  description:
    'HRIS implementation, rescue, payroll integration, and stabilization services. Workday, SuccessFactors, Oracle HCM consulting with documented deliverables.',
  alternates: {
    canonical: 'https://bilcoworks.com/services',
  },
  openGraph: {
    title: 'HRIS Implementation & Integration Services | Bilco Works',
    description:
      'HRIS implementation, rescue, and integration services with documented deliverables. UKG Pro specialists.',
    url: 'https://bilcoworks.com/services',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRIS Implementation & Integration Services',
    description: 'Enterprise HRIS consulting with documented deliverables.',
  },
}

const services = [
  {
    id: 'hris-implementation',
    title: 'HRIS Implementation',
    icon: ImplementationIcon,
    description:
      'End-to-end deployment of new HR platforms. We handle requirements gathering, configuration, integration development, testing, and cutover. Your team focuses on change management and stakeholder readiness while we handle the technical execution.',
    outcomes: [
      'Configured HRIS aligned to documented requirements',
      'Working integrations with payroll, benefits, and downstream systems',
      'Validated data migration with audit trail',
      'Trained internal team capable of day-to-day operations',
    ],
    deliverables: [
      'Requirements traceability matrix',
      'Configuration workbook',
      'Integration specifications and test plans',
      'Data migration mapping and validation reports',
      'Cutover plan with rollback procedures',
      'Operations runbook',
    ],
    success:
      'Go-live happens on schedule. First payroll runs without escalation. Integration errors are caught by monitoring, not users.',
    failuresAvoided: [
      'Scope gaps discovered at UAT',
      'Untested integrations failing in production',
      'Data quality issues blocking go-live',
      'Knowledge concentrated in one person',
    ],
  },
  {
    id: 'hris-rescue',
    title: 'HRIS Rescue & Stabilization',
    icon: RescueIcon,
    description:
      'Triage and recovery for implementations that have stalled, failed, or are running but unreliable. We diagnose root causes, prioritize fixes, and establish a path to stable operations. We use anomaly detection to surface migration records that do not reconcile and flag duplicates before go-live; the model finds the suspects, a person makes the call.',
    outcomes: [
      'Root cause analysis of current failures',
      'Prioritized remediation plan',
      'Stabilized integrations with proper error handling',
      'Documented current-state configuration',
    ],
    deliverables: [
      'Current-state assessment report',
      'Issue log with severity and remediation status',
      'Integration health dashboard or monitoring checklist',
      'Updated runbook reflecting actual operations',
    ],
    success:
      "Integration failures become exceptions, not the norm. The team knows what is running, what can break, and what to do when it does.",
    failuresAvoided: [
      'Chronic firefighting without root cause resolution',
      'Undocumented workarounds becoming permanent',
      'Vendor finger-pointing without clear ownership',
      'Staff burnout from constant escalations',
    ],
  },
  {
    id: 'integrations',
    title: 'Integration Development',
    icon: IntegrationIcon,
    description:
      'Design, build, and harden integrations between HRIS and payroll, benefits, finance, identity, and other enterprise systems. We build integrations that are observable, recoverable, and maintainable. We monitor integration health with anomaly detection and generate test cases from the specs with a language model; alerts route to a human and nothing fails silently.',
    outcomes: [
      'Production-ready integrations with error handling',
      'Reconciliation logic to catch data drift',
      'Monitoring and alerting for integration health',
      'Documentation sufficient for internal support',
    ],
    deliverables: [
      'Integration specification document',
      'Field mapping with transformation rules',
      'Error handling and retry logic',
      'Test plan with sample payloads',
      'Monitoring checklist and alert thresholds',
      'Troubleshooting guide',
    ],
    success:
      'Integrations run without manual intervention. When errors occur, alerts fire before downstream impact. Recovery is documented and tested.',
    failuresAvoided: [
      'Silent failures corrupting downstream data',
      'Manual reconciliation after every run',
      'No visibility into integration status',
      'Errors discovered by payroll or finance',
    ],
  },
  {
    id: 'global-payroll-compliance',
    title: 'Global Payroll & Compliance',
    icon: GlobalPayrollIcon,
    description:
      'Configure, reconcile, and maintain payroll across multiple countries and the statutory rules that govern each one. We map gross-to-net per jurisdiction, prove it against a parallel run reconciled to the cent, and keep the configuration patched as tax and contribution rules change. The work supports your compliance obligations; you stay the responsible party. We cluster gross-to-net and parallel-run variances with machine learning so people chase the real exceptions, and a practitioner signs off before reconciliation closes.',
    outcomes: [
      'Gross-to-net validated per country against a parallel run, reconciled to the cent',
      'Statutory filings produced in the right format on the right calendar',
      'Data residency and cross-border transfers handled for special-category data',
      'Configuration patched and tested before each legislative effective date',
    ],
    deliverables: [
      'Country-by-country statutory requirements matrix with filings, formats, authorities, and deadlines',
      'Earnings and deductions catalog mapped to statutory categories per country',
      'Gross-to-net mapping and test cases covering retro, proration, and mid-period hires and leavers',
      'Parallel-run reconciliation packs with variance reports, tolerance thresholds, and sign-off sheets',
      'Integration specs for HRIS inbound and GL, bank file, and authority outbound',
      'Data residency design, data processing agreements, and records of processing (GDPR Article 30)',
    ],
    success:
      'Each country runs to schedule without a scramble. Filings land on time in the right format for the right authority. When a rate or threshold changes, the configuration is patched and tested before its effective date, not after employees are paid wrong.',
    failuresAvoided: [
      'Late or malformed statutory filings',
      'Legislative update missed before its effective date',
      'Parallel-run variances that cannot be reconciled',
      'Cross-border transfer of special-category data',
    ],
  },
  {
    id: 'union-workforce',
    title: 'Unionized Workforce Support',
    icon: UnionIcon,
    description:
      'Encode collective bargaining agreements into HRIS and payroll so the system pays people the way the contract reads. We translate each clause into pay rules, dues and remittance logic, seniority, and retro on ratification, then test it per bargaining unit. One config error scales to a whole unit, so most of the work is in the testing. We parse the CBA into a first-draft pay-rule mapping with a language model, each clause cited to article and section and human-verified before it configures anything.',
    outcomes: [
      'CBA clauses encoded as pay rules with citations back to article and section',
      'Dues, arrears, and remittance files calculated and reported per union',
      'Retro on ratification computed across earnings, overtime, and pension bases',
      'Seniority, step progression, and premiums applied on the right effective date',
    ],
    deliverables: [
      'CBA-to-configuration mapping with each clause cited back to article and section',
      'Pay-rule and earnings-code design for differentials, call-back, overtime, double-time, and pyramiding logic',
      'Wage-scale and step tables with date- or hours-based progression triggers and effective-dating',
      'Dues configuration and remittance file specs per union, with arrears handling and deduction priority',
      'Seniority calculation specification covering multiple seniority types, leave bridging, and bumping and recall',
      'Retro-pay methodology and test scenarios per CBA, including ratification and downstream effects on overtime and pension',
    ],
    success:
      "The system pays people the way the contract reads. Dues are deducted and remitted in the union's format on cadence. When a contract is ratified, retro is calculated across overtime and pension bases, not just base pay. A premium combination that misfires is an exception caught in testing, not a grievance across the unit.",
    failuresAvoided: [
      'Premium or pyramiding rules paying the unit wrong',
      'Retro on ratification that misses the cascade',
      'Dues mis-deducted, arrears missed, or remittance wrong',
      'Agency or fair-share fees deducted where unlawful',
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & Delivery Leadership',
    icon: ArchitectureIcon,
    description:
      'Technical leadership for complex HR technology programs. We define integration patterns, establish decision frameworks, and ensure architectural choices are documented and defensible for audit and procurement.',
    outcomes: [
      'Documented integration architecture',
      'Decision log with rationale',
      'Defined patterns for common scenarios',
      'Technical risk register with mitigations',
    ],
    deliverables: [
      'Architecture overview document',
      'Integration pattern library',
      'Decision log (Architecture Decision Records)',
      'Risk register with owners and controls',
      'Vendor evaluation criteria (if applicable)',
    ],
    success:
      'Technical decisions are traceable. New team members can understand why things are built the way they are. Auditors get clear answers.',
    failuresAvoided: [
      'Inconsistent integration approaches across workstreams',
      'Undocumented decisions creating tech debt',
      'Architecture by accident or vendor default',
      'Inability to answer procurement security questionnaires',
    ],
  },
  {
    id: 'hardening',
    title: 'Post-Go-Live Hardening',
    icon: HardeningIcon,
    description:
      'Transition support after go-live. We establish monitoring, document operations, build runbooks, and ensure your internal team is equipped to operate independently.',
    outcomes: [
      'Operational monitoring with defined thresholds',
      'Runbooks for common scenarios and incidents',
      'Escalation paths documented',
      'Knowledge transfer completed with sign-off',
    ],
    deliverables: [
      'Monitoring dashboard or checklist',
      'Operations runbook',
      'Incident response procedures',
      'Knowledge transfer sessions (recorded)',
      'Handoff acceptance document',
    ],
    success:
      'Your team handles day-to-day operations confidently. Escalations to vendors or consultants are exception cases, not the default.',
    failuresAvoided: [
      'Post-go-live dependency on implementation consultants',
      'Tribal knowledge with no documentation',
      'No monitoring until something breaks',
      'Support contracts without clear scope',
    ],
  },
  {
    id: 'ai-augmented-delivery',
    title: 'AI-Augmented Delivery',
    icon: AIIcon,
    description:
      'AI is how a small senior team covers enterprise scope without an army of junior staff. We use it for the slow, repetitive passes: clustering payroll variances, reconciling migrated data, parsing collective bargaining agreements into a first-draft mapping, turning workshop notes into structured requirements, and watching for statutory changes per jurisdiction. Each use is bounded and observable. AI does the first pass. A practitioner who has done this work verifies it. You approve what ships.',
    outcomes: [
      'Every payroll line and migrated record screened for anomalies, not just a sample',
      'Migration records that do not reconcile surfaced before go-live, with duplicates and outliers flagged for review',
      'CBA clauses extracted into a first-draft configuration mapping, every line cited and human-verified',
      'Statutory changes flagged per jurisdiction, with time to confirm and test before effective dates',
    ],
    deliverables: [
      'Variance triage output: gross-to-net and parallel-run differences clustered by likely cause, explained in plain language and traced to source records, reviewed by a practitioner',
      'Migration reconciliation report: non-reconciling records, fuzzy-matched duplicate candidates, and outliers, ranked for analyst review before cutover',
      'CBA-to-configuration first draft: pay rules extracted and cited to article and section, human-verified before build',
      'Requirements, workbooks, and runbook drafts generated from workshop notes and configs, then edited by a practitioner before sign-off',
      'Statutory change watch log per jurisdiction, with effective dates, affected configuration, and a verification step before any patch',
      'A written record of what AI drafted, who reviewed it, and what changed',
    ],
    success:
      "The week before launch should be boring. AI has screened every record, not a sample, and a person chased down the exceptions it surfaced. Records that do not reconcile are caught before cutover, not after payroll runs wrong. AI output never writes to your system of record; a practitioner applies approved changes, and low-confidence results wait for review. Nothing ships on the model's word alone, and you stay the responsible party.",
    failuresAvoided: [
      'AI output shipped without human review',
      'Variances re-keyed by hand record by record',
      'Migration errors found after go-live',
      'Statutory changes tracked without per-jurisdiction review',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
        <section className="relative section-padding bg-surface-secondary border-b border-rule overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.08]">
                  HRIS Implementation &amp; Consulting Services
                </h1>
                <p className="mt-5 text-lg text-ink-muted max-w-xl leading-relaxed">
                  We offer a focused set of services for enterprise HR systems.
                  Each engagement has defined outcomes, documented deliverables,
                  and clear success criteria. Have questions? <Link href="/faq" className="text-accent link-underline">See our FAQ</Link>.
                </p>
              </Reveal>
            <Reveal className="hidden lg:block" delay={120}>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated ring-1 ring-rule/70">
                <IntegrationDiagram />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-16">
            {services.map((service) => {
              const IconComponent = service.icon
              const featured =
                service.id === 'hris-implementation' || service.id === 'hris-rescue'
              return (
                <Reveal
                  as="article"
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-24 pb-16 border-b border-rule last:border-0 last:pb-0 relative`}
                >
                  {featured && (
                    <div className="absolute -left-4 top-0 bottom-16 w-1 bg-gradient-to-b from-accent to-teal rounded-full hidden lg:block" />
                  )}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 inline-flex p-2.5 rounded-xl bg-accent-muted/60 ring-1 ring-rule/60">
                      <IconComponent className={`w-12 h-12 ${featured ? 'opacity-100' : 'opacity-80'}`} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-medium text-ink">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-body max-w-3xl">{service.description}</p>
                    </div>
                  </div>

                  <div className="mt-8 grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-medium text-ink uppercase tracking-wide">
                        Outcomes
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {service.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex gap-3 text-sm text-ink-muted"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-teal rounded-full" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-ink uppercase tracking-wide">
                        Typical Deliverables
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {service.deliverables.map((deliverable) => (
                          <li
                            key={deliverable}
                            className="flex gap-3 text-sm text-ink-muted"
                          >
                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-ink-subtle rounded-full" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-5 bg-accent-muted/40 border border-rule rounded-xl">
                    <h3 className="eyebrow">
                      What Success Looks Like
                    </h3>
                    <p className="mt-3 text-sm text-ink-muted leading-relaxed">{service.success}</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-ink uppercase tracking-wide">
                      Common Failure Modes Avoided
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {service.failuresAvoided.map((failure) => (
                        <li
                          key={failure}
                          className="px-3 py-1 bg-surface-secondary border border-rule/70 text-ink-muted text-sm rounded-full transition-colors duration-300 hover:border-rule-strong hover:text-ink"
                        >
                          {failure}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
        </section>

        <section className="section-dark section-padding">
          <div className="container-wide text-center">
            <h2 className="text-2xl md:text-3xl font-medium">
              Need something specific?
            </h2>
            <p className="mt-4 max-w-xl mx-auto" style={{ color: '#A8B8C8' }}>
              These services can be combined or scoped to your situation.
              Contact us to discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 mt-8 px-6 py-3 bg-surface-elevated text-ink font-medium rounded-lg shadow-elevated hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
            >
              Get in touch
            </Link>
            <p className="mt-4 text-sm" style={{ color: '#8896A6' }}>
              Have questions? See our <Link href="/faq" className="underline hover:no-underline">FAQ</Link> or <Link href="/contact" className="underline hover:no-underline">contact us</Link>.
            </p>
          </div>
        </section>
    </div>
  )
}
