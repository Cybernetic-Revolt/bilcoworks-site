import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'

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
        url: '/og-image.svg',
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
    images: ['/og-image.svg'],
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
      ],
      sameAs: [],
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
              name: 'Global Payroll Implementation',
              description:
                'Multi-country payroll implementations with local compliance.',
              url: 'https://bilcoworks.com/services#integrations',
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
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
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
