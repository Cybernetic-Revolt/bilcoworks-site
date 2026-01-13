export interface RSSSource {
  type: 'rss'
  name: string
  url: string
}

export interface AdzunaSource {
  type: 'adzuna'
  name: string
  country: string // 'ca' for Canada, 'us' for US, 'gb' for UK
  searches: string[] // Search queries to run
}

export interface JoobleSource {
  type: 'jooble'
  name: string
  searches: Array<{
    keywords: string
    location?: string
  }>
}

export interface CareerjetSource {
  type: 'careerjet'
  name: string
  locale: string // 'en_US', 'en_CA', 'en_GB', etc.
  searches: Array<{
    keywords: string
    location?: string
  }>
}

export type Source = RSSSource | AdzunaSource | JoobleSource | CareerjetSource

// Scoring keywords - focused on HRIS/HR tech consulting
export const KEYWORDS = {
  // Highest-value: UKG-specific terms (50 points each)
  ukgSpecific: [
    'UKG Pro', 'UKG Dimensions', 'UKG Ready', 'UKG Workforce',
    'Kronos Workforce', 'Kronos WFC', 'Ultimate Software',
  ],
  // High-value: Direct HRIS/HR platform mentions (30 points each)
  primary: [
    'HRIS', 'HCM', 'UKG', 'Workday', 'ADP', 'SuccessFactors', 'SAP HR',
    'Oracle HCM', 'Ceridian', 'Dayforce', 'PeopleSoft', 'Kronos',
    'human capital management', 'HR system', 'HR software',
  ],
  // Medium-value: HR-related terms (20 points each)
  secondary: [
    'payroll', 'human resources', 'talent management', 'workforce management',
    'time and attendance', 'benefits administration', 'employee self-service',
    'HR analyst', 'HR consultant', 'HRIS analyst', 'HRIS consultant',
    'payroll consultant', 'payroll specialist', 'HR technology',
  ],
  // Context keywords (10 points each)
  technical: [
    'implementation', 'integration', 'data migration', 'configuration',
  ],
}

export const BOOSTS = {
  // Location boosts
  'Canada': 15,
  'Canadian': 15,
  'Alberta': 25,
  'Calgary': 30,
  'Edmonton': 20,
  'British Columbia': 15,
  'Vancouver': 20,
  'Ontario': 10,
  'Toronto': 15,
  'Remote': 20,
  // Role type boosts
  'Contract': 15,
  'Consultant': 15,
  // HCM Staffing agencies - boost their job postings
  'HRchitect': 25,
  'Huron': 20,
  'Cognizant': 15,
  'Collaborative Solutions': 20,
  'ROCKCREST': 20,
  'Deloitte': 15,
  'Accenture': 15,
  'KPMG': 15,
  'Raven Intel': 15,
}

// Sources configuration
export const sources: Source[] = [
  // Adzuna - Canada job search
  {
    type: 'adzuna',
    name: 'adzuna-ca',
    country: 'ca',
    searches: [
      'UKG Pro',
      'UKG Dimensions',
      'UKG Ready',
      'UKG consultant',
      'UKG implementation',
      'UKG analyst',
      'Kronos consultant',
      'Kronos implementation',
      'HRIS consultant',
      'HRIS implementation',
      'HCM implementation',
    ],
  },

  // Jooble - aggregates from multiple job boards (Canada focused)
  {
    type: 'jooble',
    name: 'jooble',
    searches: [
      // UKG-specific searches - Canada
      { keywords: 'UKG Pro consultant', location: 'Canada' },
      { keywords: 'UKG Dimensions', location: 'Canada' },
      { keywords: 'UKG Ready', location: 'Canada' },
      { keywords: 'UKG implementation', location: 'Canada' },
      { keywords: 'UKG configuration', location: 'Canada' },
      { keywords: 'Kronos consultant', location: 'Canada' },
      { keywords: 'Kronos implementation', location: 'Canada' },
      { keywords: 'HRIS consultant', location: 'Canada' },
      { keywords: 'HRIS implementation', location: 'Canada' },
      { keywords: 'HCM consultant', location: 'Canada' },
      // Remote opportunities (can work from Canada)
      { keywords: 'UKG remote consultant' },
      { keywords: 'HRIS remote Canada' },
    ],
  },

]

// Rate limiting configuration
export const RATE_LIMIT = {
  concurrency: 1,
  delayMs: 2000, // 2 second delay between requests
}
