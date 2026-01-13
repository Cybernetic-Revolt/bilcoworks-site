import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const sampleOpportunities = [
  {
    title: 'HRIS Implementation Consultant - UKG Pro',
    buyer: 'Government of Alberta',
    source: 'manual',
    url: 'https://example.com/opp/1',
    summary: 'Looking for experienced UKG Pro implementation consultant for payroll integration project. Remote work available.',
    matchScore: 85,
    tags: JSON.stringify(['UKG', 'Implementation', 'payroll', 'Alberta', 'Remote']),
    status: 'new',
  },
  {
    title: 'Workday Integration Developer',
    buyer: 'City of Calgary',
    source: 'manual',
    url: 'https://example.com/opp/2',
    summary: 'Seeking Workday integration specialist for HCM and payroll integration with existing ERP systems.',
    matchScore: 75,
    tags: JSON.stringify(['Workday', 'Integration', 'HCM', 'Calgary']),
    status: 'new',
  },
  {
    title: 'HRIS Stabilization Project - SuccessFactors',
    buyer: 'Energy Company',
    source: 'manual',
    url: 'https://example.com/opp/3',
    summary: 'HRIS rescue engagement needed. Current SuccessFactors implementation has integration issues requiring expert intervention.',
    matchScore: 70,
    tags: JSON.stringify(['HRIS', 'SuccessFactors', 'Integration', 'Canada']),
    status: 'new',
  },
  {
    title: 'Payroll System Integration RFP',
    buyer: 'Provincial Health Authority',
    source: 'manual',
    url: 'https://example.com/opp/4',
    summary: 'RFP for payroll system integration services. Multi-year contract for integration between HRIS and payroll systems.',
    matchScore: 65,
    tags: JSON.stringify(['payroll', 'RFP', 'Integration', 'HRIS']),
    status: 'new',
  },
  {
    title: 'HR Technology Consultant',
    buyer: 'Mining Corporation',
    source: 'manual',
    url: 'https://example.com/opp/5',
    summary: 'Consultant needed for HR technology assessment and implementation roadmap. Experience with UKG or Workday preferred.',
    matchScore: 55,
    tags: JSON.stringify(['consultant', 'Implementation', 'UKG', 'Workday']),
    status: 'new',
  },
]

async function seed() {
  console.log('Seeding database...')

  for (const opp of sampleOpportunities) {
    await prisma.opportunity.upsert({
      where: {
        source_url: {
          source: opp.source,
          url: opp.url,
        },
      },
      create: opp,
      update: opp,
    })
    console.log(`Added: ${opp.title}`)
  }

  // Add a source run record
  await prisma.sourceRun.create({
    data: {
      source: 'manual-seed',
      startedAt: new Date(),
      finishedAt: new Date(),
      itemCount: sampleOpportunities.length,
      errorCount: 0,
    },
  })

  console.log('Seeding complete!')
  await prisma.$disconnect()
}

seed().catch((e) => {
  console.error(e)
  process.exit(1)
})
