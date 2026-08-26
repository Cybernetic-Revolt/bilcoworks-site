/** Questions and answers, shared by the page render and its FAQPage structured data. */
export interface Faq {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'How long does a typical HRIS implementation take?',
    answer:
      'Implementation timelines vary by scope and complexity. A focused implementation for a mid-size organization typically spans 4-6 months. Enterprise implementations with multiple integrations may require 9-12 months. We define timeline during the Diagnose phase based on your specific requirements.',
  },
  {
    question: 'Which HRIS platforms do you specialize in?',
    answer:
      'We specialize in UKG HRIS implementations and integrations, with 15+ years supporting UKG Pro/UKG Dimensions environments. Our deep platform expertise means faster implementations and fewer issues.',
  },
  {
    question: 'Can you help with a failed or troubled HRIS implementation?',
    answer:
      'Yes — that is a distinct service line rather than a variation on implementation, because the first job is working out what is actually wrong. See HRIS Rescue and Stabilization on the services page for what the engagement produces.',
  },
  {
    question: 'Do you provide ongoing support after go-live?',
    answer:
      'We provide Post-Go-Live Hardening services to establish monitoring, documentation, and knowledge transfer. Our goal is to transfer capability to your team, not create dependency. After handoff, your team operates independently.',
  },
  {
    question: 'What geographic regions do you serve?',
    answer:
      'Bilco Works is based in Canada and serves clients globally. We work remotely and have experience with global payroll implementations across multiple countries and regulatory environments.',
  },
  {
    question: 'Do you support global payroll implementations?',
    answer:
      'Yes. We have hands-on experience with multi-country payroll integrations and understand the complexities of global payroll including local compliance, currency handling, and country-specific integrations.',
  },
  {
    question: 'Do you run gross-to-net validation across multiple countries before go-live?',
    answer:
      "Yes. Each country is proved against a parallel run before anyone is paid from the new system, and the reconciliation pack that comes out of it is listed under Global Payroll and Compliance on the services page.",
  },
  {
    question: 'How do you handle retro pay when a collective bargaining agreement is ratified?',
    answer:
      'When a new CBA is ratified after the prior one expired, we recalculate the delta back to the effective date across all affected earnings. The hard part is the cascade. Retro flows into overtime, premiums, and pension and benefit bases, and missing that cascade is the classic error that triggers grievances. We build the methodology as test scenarios per CBA so the calculation is proven before it pays across the bargaining unit.',
  },
  {
    question: 'Do you work with multiple bargaining units that each have their own rules?',
    answer:
      "Yes. Each unit is driven by its own CBA, so an employee's unit membership decides which pay rules, seniority logic, dues basis, and premiums apply. We keep the units separate in configuration and test the mid-period transfers between them. Treating multiple units as one applies the wrong rules to the wrong population, and one config error scales to the whole group.",
  },
  {
    question: 'Does AI make decisions about my payroll or configuration?',
    answer:
      'No. AI does the first pass on the slow, repetitive passes — variance clustering, migration reconciliation, CBA parsing, requirements drafting — and a senior practitioner reviews every result before it goes anywhere. What the model may and may not touch, and the record each step leaves, is set out on the about page.',
  },
  {
    question: 'What happens when the AI gets something wrong?',
    answer:
      "By putting the same controls around it that we would put around any other integration — bounded scope, observable output, a defined failure path. Every flag is explainable and traceable to whoever signed it off, so removing the AI entirely would still leave you a record of what was checked and by whom.",
  },
  {
    question: 'What makes Bilco Works different from other HRIS consultancies?',
    answer:
      'We combine a disciplined delivery methodology with deep platform experience. Every engagement follows our six-phase approach with documented artifacts and clear success criteria. We focus on knowledge transfer so your team can operate independently after go-live.',
  },
  {
    question: 'Do you take on AI engineering projects?',
    answer:
      'Yes. We build voice agents, applied machine learning, and LLM systems - the same stack behind TwoRing, our 24/7 AI receptionist, and our RSNA AI Challenge work. Every AI system we ship has a named practitioner accountable for its output. See the AI Engineering section for what we have built.',
  },
  {
    question: 'Can my business use TwoRing?',
    answer:
      "TwoRing is our own product — a 24/7 AI receptionist answering real customers on a voice engine we built and host. It is the clearest evidence we run what we sell; its own page has the detail.",
  },
  {
    question: 'What is the Research section about?',
    answer:
      'Ongoing work we publish for scrutiny: longitudinal noise-model research on IBM Quantum hardware and competition machine learning. It is how we keep our engineering honest - every claim traces to a receipt.',
  },
]
