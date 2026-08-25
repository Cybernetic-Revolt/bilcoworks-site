import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bilcoworks.com'),
  title: {
    default: 'Bilco Works — HRIS & Systems Consulting',
    template: '%s — Bilco Works',
  },
  description:
    'Enterprise HRIS implementation, stabilization, and integration consulting. We deliver systems that work on day one and stay working.',
  keywords: [
    'HRIS implementation',
    'HRIS consulting',
    'payroll integration',
    'Workday implementation',
    'HR systems consulting',
    'HRIS stabilization',
    'enterprise HR technology',
    'global payroll implementation',
    'multi-country payroll compliance',
    'gross-to-net validation',
    'statutory payroll filings',
    'payroll parallel run reconciliation',
    'GDPR payroll data residency',
    'in-country payroll provider integration',
    'collective bargaining agreement payroll',
    'union dues remittance configuration',
    'retro pay on ratification',
    'CBA HRIS configuration',
    'seniority and step progression',
    'shift differential pay rules',
    'bargaining unit payroll',
    'AI-assisted HRIS delivery',
    'payroll variance triage',
    'data migration anomaly detection',
    'collective bargaining agreement parsing',
    'statutory change monitoring',
    'human-in-the-loop payroll',
  ],
  authors: [{ name: 'Bilco Works Incorporated' }],
  creator: 'Bilco Works Incorporated',
  publisher: 'Bilco Works Incorporated',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://bilcoworks.com',
    siteName: 'Bilco Works',
    title: 'Bilco Works — HRIS & Systems Consulting',
    description:
      'Enterprise HRIS implementation, stabilization, and integration consulting. We deliver systems that work on day one and stay working.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bilco Works — HRIS & Systems Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bilco Works — HRIS & Systems Consulting',
    description:
      'Enterprise HRIS implementation, stabilization, and integration consulting.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://bilcoworks.com',
  },
  icons: {
    icon: { url: '/favicon.svg', type: 'image/svg+xml' },
    apple: '/favicon.svg',
  },
  other: {
    'format-detection': 'telephone=no',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://bilcoworks.com/#organization',
      name: 'Bilco Works Incorporated',
      url: 'https://bilcoworks.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bilcoworks.com/favicon.svg',
        width: 512,
        height: 512,
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CA',
        addressLocality: 'Calgary',
        addressRegion: 'AB',
      },
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide',
      },
      knowsAbout: [
        'HRIS Implementation',
        'UKG Pro Implementation',
        'UKG Dimensions',
        'Global Payroll',
        'HR Systems Integration',
        'HRIS Stabilization',
        'Payroll Integration',
        'Multi-country payroll implementation',
        'Gross-to-net validation and parallel runs',
        'Statutory filings and social contributions',
        'GDPR and payroll data residency',
        'Multi-currency payroll and FX handling',
        'Collective bargaining agreement configuration',
        'Union dues, arrears, and remittance reporting',
        'Retro pay on contract ratification',
        'Seniority, bumping, and step progression',
        'Shift differentials and premium pyramiding rules',
        'Multiple bargaining unit configuration',
        'AI-assisted HRIS and payroll delivery with human verification',
        'Payroll variance triage and parallel-run clustering',
        'Data-migration anomaly detection and reconciliation',
        'Collective bargaining agreement parsing to first-draft configuration',
        'Statutory and regulatory change monitoring per jurisdiction',
        'Human-in-the-loop review and accountability',
        'AI voice agents and LLM systems',
        'Applied machine learning',
        'Quantum computing noise-model research',
        'Self-hosted infrastructure and virtualization',
      ],
      sameAs: ['https://tworing.ai', 'https://github.com/Cybernetic-Revolt'],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://bilcoworks.com/#service',
      name: 'Bilco Works Incorporated',
      description:
        'Enterprise HRIS implementation, stabilization, and integration consulting.',
      url: 'https://bilcoworks.com',
      priceRange: '$$$',
      areaServed: { '@type': 'Place', name: 'Worldwide' },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CA',
        addressLocality: 'Calgary',
        addressRegion: 'AB',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'HRIS Consulting Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'HRIS Implementation',
              description:
                'End-to-end deployment of Workday, SAP SuccessFactors, Oracle HCM, and other enterprise HR platforms.',
              url: 'https://bilcoworks.com/services#hris-implementation',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'HRIS Rescue & Stabilization',
              description:
                'Recovery for failed or troubled HRIS implementations.',
              url: 'https://bilcoworks.com/services#hris-rescue',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Integration Development',
              description:
                'HRIS integrations with payroll, benefits, finance, and identity systems.',
              url: 'https://bilcoworks.com/services#integrations',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Global Payroll & Compliance',
              description:
                'Multi-country payroll implementation and statutory compliance. We configure gross-to-net per jurisdiction, validate it against parallel runs reconciled to the cent, produce statutory filings in the right format and calendar, and keep each configuration current as local tax and social-contribution rules change. Data residency, cross-border transfers, and multi-currency handling included.',
              url: 'https://bilcoworks.com/services#global-payroll-compliance',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Unionized Workforce Support',
              description:
                'HRIS and payroll configuration for organizations with collective bargaining agreements. We encode CBA rules - union dues and arrears, seniority and bumping, shift and premium differentials, overtime and call-back, retro on ratification, grievance and step-progression tracking, and remittance back to the unions - and test them per bargaining unit so the system pays people the way the contract reads.',
              url: 'https://bilcoworks.com/services#union-workforce',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AI-Augmented Delivery',
              description:
                'AI-assisted HRIS and payroll delivery from a small senior team, with a human accountable for every result. We use machine learning to cluster and explain gross-to-net and parallel-run variances, detect anomalies and fuzzy-match duplicates in data migration, language models to parse collective bargaining agreements into first-draft configuration mappings and generate requirements, runbooks, and integration test cases from specs, and monitor statutory changes per jurisdiction. The AI does the first pass; an experienced practitioner verifies it; the client approves what ships and remains the responsible party.',
              url: 'https://bilcoworks.com/services#ai-augmented-delivery',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Architecture & Delivery Leadership',
              description:
                'Technical leadership for complex HR technology programs.',
              url: 'https://bilcoworks.com/services#architecture',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Post-Go-Live Hardening',
              description:
                'Monitoring, runbooks, and knowledge transfer after go-live.',
              url: 'https://bilcoworks.com/services#hardening',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://bilcoworks.com/#website',
      url: 'https://bilcoworks.com',
      name: 'Bilco Works',
      publisher: {
        '@id': 'https://bilcoworks.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://bilcoworks.com/?s={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-CA"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Without JS, Reveal never adds .is-visible — keep content readable */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-slate-900 focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
