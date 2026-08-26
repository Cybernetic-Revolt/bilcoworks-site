/**
 * What the contact form asks, per practice.
 *
 * The form used to ask every visitor for their HRIS platform and their payroll
 * and benefits providers — questions that make sense for one of the four
 * practices and are noise for the other three. Someone enquiring about a voice
 * agent was being asked which payroll system they run.
 *
 * Each practice now brings its own two follow-up questions. The four practice
 * ids match the routes so an enquiry can be traced back to the page it came from.
 */

export interface EnquiryField {
  name: string
  label: string
  hint?: string
  placeholder?: string
}

export interface Practice {
  id: string
  label: string
  /** The route this practice is described on. */
  href: string
  /** Sits under the radio label, so the picker is self-explanatory. */
  blurb: string
  fields: EnquiryField[]
}

export const practices: Practice[] = [
  {
    id: 'hris',
    label: 'HR & payroll systems',
    href: '/hris',
    blurb: 'Implementation, rescue, integration, global payroll, unionized workforces.',
    fields: [
      {
        name: 'hrisPlatform',
        label: 'HRIS platform',
        hint: 'e.g. Workday, SuccessFactors, UKG, Oracle HCM',
      },
      {
        name: 'payrollBenefits',
        label: 'Payroll / benefits providers',
        hint: 'and how many countries, if more than one',
      },
    ],
  },
  {
    id: 'ai',
    label: 'AI engineering',
    href: '/ai',
    blurb: 'Voice agents, applied machine learning, LLM systems in production.',
    fields: [
      {
        name: 'aiJob',
        label: 'What should it do?',
        hint: 'the work you want off a human’s plate',
        placeholder: 'Answer inbound calls, triage tickets, read documents…',
      },
      {
        name: 'aiConstraints',
        label: 'Where does it have to run?',
        hint: 'cloud, on your hardware, or no preference — and anything it must not touch',
      },
    ],
  },
  {
    id: 'research',
    label: 'Research',
    href: '/research',
    blurb: 'Quantum benchmarking, noise-model validation, competition ML.',
    fields: [
      {
        name: 'researchQuestion',
        label: 'What is the question?',
        hint: 'what you are trying to find out, not the method',
      },
      {
        name: 'researchEvidence',
        label: 'What would count as an answer?',
        hint: 'the result that would settle it, and who has to be convinced',
      },
    ],
  },
  {
    id: 'infrastructure',
    label: 'Servers & infrastructure',
    href: '/infrastructure',
    blurb: 'Virtualization, self-hosting, failover, monitoring, tested restores.',
    fields: [
      {
        name: 'infraEstate',
        label: 'What are you running now?',
        hint: 'cloud, colo, on-prem, or a mix — and roughly how much of it',
      },
      {
        name: 'infraGoal',
        label: 'What is prompting the change?',
        hint: 'cost, reliability, control, an audit, a migration…',
      },
    ],
  },
]

/** Fields that apply whichever practice is chosen. */
export const commonFields: EnquiryField[] = [
  { name: 'timeline', label: 'Timeline / key dates', placeholder: 'e.g. Q2 2026, ASAP' },
  { name: 'decisionOwner', label: 'Decision owner', placeholder: 'Name and role' },
]

/** Every practice-specific field name, for building an empty payload. */
export const allPracticeFieldNames = practices.flatMap((p) =>
  p.fields.map((f) => f.name)
)
