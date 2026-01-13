import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Realistic HRIS opportunities based on actual government/enterprise patterns
const opportunities = [
  {
    title: 'Human Resources Information System (HRIS) Implementation Services',
    buyer: 'Government of Alberta - Service Alberta',
    source: 'sample-gov',
    url: 'https://purchasing.alberta.ca/sample/hris-impl-2024',
    summary: 'The Government of Alberta is seeking qualified vendors to provide HRIS implementation services including configuration, data migration, integration development, and training. Experience with UKG, Workday, or SAP SuccessFactors required.',
    publishedAt: new Date('2024-01-10'),
    closeAt: new Date('2024-02-15'),
    matchScore: 95,
    tags: JSON.stringify(['HRIS', 'implementation', 'UKG', 'Workday', 'Alberta']),
    status: 'new',
  },
  {
    title: 'Payroll System Integration and Support Services RFP',
    buyer: 'City of Calgary',
    source: 'sample-gov',
    url: 'https://calgary.ca/tenders/payroll-integration-2024',
    summary: 'RFP for payroll system integration services to connect existing HR systems with new payroll platform. Includes API development, data reconciliation, and ongoing support.',
    publishedAt: new Date('2024-01-08'),
    closeAt: new Date('2024-02-01'),
    matchScore: 85,
    tags: JSON.stringify(['payroll', 'integration', 'Calgary', 'Alberta']),
    status: 'new',
  },
  {
    title: 'UKG Pro Configuration and Optimization Consultant',
    buyer: 'Alberta Health Services',
    source: 'sample-gov',
    url: 'https://ahs.ca/procurement/ukg-consultant-2024',
    summary: 'Seeking experienced UKG Pro consultant to optimize existing implementation, resolve integration issues, and provide staff training. Minimum 5 years UKG experience required.',
    publishedAt: new Date('2024-01-05'),
    closeAt: new Date('2024-01-25'),
    matchScore: 100,
    tags: JSON.stringify(['UKG', 'consultant', 'Alberta', 'implementation']),
    status: 'new',
  },
  {
    title: 'Workforce Management System Implementation',
    buyer: 'BC Hydro',
    source: 'sample-enterprise',
    url: 'https://bchydro.com/suppliers/workforce-mgmt-2024',
    summary: 'BC Hydro seeks vendor for workforce management system implementation including time and attendance, scheduling, and integration with existing SAP HR module.',
    publishedAt: new Date('2024-01-03'),
    closeAt: new Date('2024-02-10'),
    matchScore: 75,
    tags: JSON.stringify(['workforce management', 'implementation', 'British Columbia']),
    status: 'new',
  },
  {
    title: 'HR System Stabilization and Rescue Services',
    buyer: 'Confidential Energy Client',
    source: 'sample-enterprise',
    url: 'https://example.com/hr-rescue-2024',
    summary: 'Urgent: Failed Workday implementation requires experienced consultant to diagnose issues, stabilize system, and complete go-live. Remote work possible.',
    publishedAt: new Date('2024-01-12'),
    closeAt: new Date('2024-01-20'),
    matchScore: 90,
    tags: JSON.stringify(['Workday', 'HRIS', 'implementation', 'Remote']),
    status: 'new',
  },
]

async function seed() {
  console.log('Adding realistic HRIS sample opportunities...')

  for (const opp of opportunities) {
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

  console.log(`\nAdded ${opportunities.length} sample opportunities`)
  console.log('\nNote: These are realistic examples. Real opportunities come from:')
  console.log('- Government procurement portals (when HRIS tenders are posted)')
  console.log('- UKG/Workday partner networks')
  console.log('- LinkedIn job postings')
  console.log('- Direct referrals')

  await prisma.$disconnect()
}

seed().catch((e) => {
  console.error(e)
  process.exit(1)
})
