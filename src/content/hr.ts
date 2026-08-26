// Single source of truth for the HR practice.
//
// Before this module existed the same eight service lines and six delivery phases
// were written out on /hris, /services and /approach independently, so the three
// pages drifted apart and a reader met the same paragraph three times. Each field
// now renders in exactly one place:
//
//   summary  -> /hris   (index entry only)
//   the rest -> /services and /approach (the detail pages)
//
// Prose here is carried over verbatim from those pages; do not paraphrase it
// without checking the claims still hold.

export interface HrService {
  id: string
  title: string
  /** One line, /hris only. Never repeated on /services. */
  summary: string
  description: string
  outcomes: string[]
  deliverables: string[]
  success: string
  failuresAvoided: string[]
}

export interface Phase {
  number: string
  name: string
  /** One line, /hris only. Never repeated on /approach. */
  summary: string
  description: string
  activities: string[]
  artifacts: string[]
}

export interface Principle {
  title: string
  description: string
}

export const hrServices: HrService[] = [
  {
    id: 'hris-implementation',
    summary:
      'New platform deployments with proper requirements, configuration, testing, and cutover planning. We handle the complexity so your team can focus on change management.',
    title: 'HRIS Implementation',

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
    summary:
      'Stabilization for troubled implementations. We diagnose root causes, fix integration failures, correct data quality issues, and establish sustainable operations.',
    title: 'HRIS Rescue & Stabilization',

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
    summary:
      'Payroll, benefits, finance, and identity integrations built with error handling, reconciliation, and monitoring. Not just working - observable and maintainable.',
    title: 'Integration Development',

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
    summary:
      'Multi-country payroll configured and reconciled to the cent, with statutory filings, data residency, and currency handling built in. We keep each jurisdiction current as local rules change.',
    title: 'Global Payroll & Compliance',

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
    summary:
      'Collective bargaining agreements encoded into payroll: dues, seniority, premiums, overtime, and retro on ratification. We configure the rules so the system pays people the way the contract reads.',
    title: 'Unionized Workforce Support',

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
    summary:
      'Technical oversight for complex programs. We define integration patterns, establish controls, and ensure decisions are documented and defensible.',
    title: 'Architecture & Delivery Leadership',

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
    summary:
      'Runbooks, monitoring, escalation paths, and documentation that lets your internal team take full ownership with confidence.',
    title: 'Post-Go-Live Hardening',

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
    summary:
      'We use AI on the first pass: variance triage, migration reconciliation, CBA parsing, statutory monitoring. A practitioner verifies every result. You stay the responsible party.',
    title: 'AI-Augmented Delivery',

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

export const phases: Phase[] = [
  {
    name: 'Diagnose',
    summary:
      'Map current state, identify gaps, define success criteria. Understand the real requirements, not just the RFP.',
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
    summary:
      'Document configurations, integration specs, data mappings, and security model. Everything written down before building.',
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
    summary:
      'Configure systems, develop integrations, prepare test data. Iterative builds with stakeholder checkpoints.',
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
    summary:
      'User acceptance testing, integration testing, parallel payroll runs. Problems found here, not in production.',
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
    summary:
      'Cutover execution with rollback plan. Data validation, integration verification, and go/no-go checkpoints.',
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
    summary:
      'Monitoring, runbooks, knowledge transfer. Your team owns it; we make sure they can.',
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

export const principles: Principle[] = [
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

/** [artifact, what it is, phase it lands in] */
export const artifacts: [string, string, string][] = [
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
