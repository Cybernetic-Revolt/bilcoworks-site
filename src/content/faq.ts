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
      'Yes. Our HRIS Rescue and Stabilization service is specifically designed for implementations that have stalled, failed, or are running unreliably. We diagnose root causes, prioritize fixes, and establish a path to stable operations.',
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
      'Yes. Every country has its own gross-to-net logic; there is no universal formula. We run the new system alongside the incumbent for one or more cycles and reconcile outputs to the cent before cutover, with variance reports, tolerance thresholds, and sign-off sheets. The parallel run is the standard de-risking gate. We do not recommend going live on a country that has not passed it.',
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
      'No. AI does the first pass. It clusters and explains payroll variances, surfaces migration records that do not reconcile, drafts a configuration mapping from a collective bargaining agreement, and turns workshop notes into structured requirements. A senior practitioner reviews the output, and you approve what ships. AI output is never written to your system of record - a practitioner applies approved changes, and low-confidence results are held for review rather than acted on. The model supports the work; you stay the responsible party.',
  },
  {
    question: 'What happens when the AI gets something wrong?',
    answer:
      "We design for that. Low-confidence results are held for review rather than acted on, and AI output is never written to your system of record. Every AI output is logged and reviewed, and each flag is traceable to who signed off. Nothing fails silently and nothing ships on the model's word alone. AI does not make a configuration correct; observability, review, and sign-off do. If you removed the AI, the controls around it would still tell you what was checked and by whom.",
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
      'TwoRing is our 24/7 AI receptionist for trade businesses - HVAC, plumbing, electrical, lawn care, real estate. It answers forwarded calls within two rings, books appointments into your calendar mid-call, and emails you every lead. Visit tworing.ai for details.',
  },
  {
    question: 'What is the Research section about?',
    answer:
      'Ongoing work we publish for scrutiny: longitudinal noise-model research on IBM Quantum hardware and competition machine learning. It is how we keep our engineering honest - every claim traces to a receipt.',
  },
]
