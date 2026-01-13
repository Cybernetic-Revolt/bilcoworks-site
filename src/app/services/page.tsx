import type { Metadata } from 'next'
import Link from 'next/link'
import { IntegrationDiagram } from '@/components/illustrations'
import {
  ImplementationIcon,
  RescueIcon,
  IntegrationIcon,
  ArchitectureIcon,
  HardeningIcon,
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
      'Triage and recovery for implementations that have stalled, failed, or are running but unreliable. We diagnose root causes, prioritize fixes, and establish a path to stable operations.',
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
      'Design, build, and harden integrations between HRIS and payroll, benefits, finance, identity, and other enterprise systems. We build integrations that are observable, recoverable, and maintainable.',
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
]

export default function ServicesPage() {
  return (
    <div>
        <section className="section-padding bg-surface-secondary border-b border-rule">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-medium text-ink">
                  HRIS Implementation & Consulting Services
                </h1>
                <p className="mt-4 text-lg text-ink-muted max-w-xl">
                  We offer a focused set of services for enterprise HR systems.
                  Each engagement has defined outcomes, documented deliverables,
                  and clear success criteria. Have questions? <Link href="/faq" className="text-accent hover:underline">See our FAQ</Link>.
                </p>
              </div>
            <div className="hidden lg:block">
              <IntegrationDiagram />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-16">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className={`scroll-mt-24 pb-16 border-b border-rule last:border-0 last:pb-0 ${
                    service.id === 'hris-implementation' || service.id === 'hris-rescue' ? 'relative' : ''
                  }`}
                >
                  {(service.id === 'hris-implementation' || service.id === 'hris-rescue') && (
                    <div className="absolute -left-4 top-0 bottom-16 w-1 bg-accent/20 rounded-full hidden lg:block" />
                  )}
                  <div className="flex items-start gap-4">
                    <IconComponent className={`w-14 h-14 flex-shrink-0 ${
                      service.id === 'hris-implementation' || service.id === 'hris-rescue' ? 'opacity-100' : 'opacity-75'
                    }`} />
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

                  <div className="mt-8 p-5 bg-surface-secondary border border-rule rounded-lg">
                    <h3 className="text-sm font-medium text-ink uppercase tracking-wide">
                      What Success Looks Like
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted">{service.success}</p>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-ink uppercase tracking-wide">
                      Common Failure Modes Avoided
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {service.failuresAvoided.map((failure) => (
                        <li
                          key={failure}
                          className="px-3 py-1 bg-surface-secondary text-ink-muted text-sm rounded-full"
                        >
                          {failure}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
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
              className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-surface-elevated text-ink font-medium rounded hover:bg-surface transition-colors"
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
