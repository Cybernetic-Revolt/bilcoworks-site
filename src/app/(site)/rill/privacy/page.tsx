import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import { rillPrivacyHtml } from '@/content/rill-privacy'

/**
 * Rill's privacy policy — the URL Google Play is given and the one the app's own
 * disclosure dialogs open.
 *
 * The text is generated from PRIVACY.md in the rill-launcher repo, where it sits beside
 * the code it describes; this page renders it and never restates it. Two copies of a
 * privacy policy is one copy too many, and the one that drifts is always the one on the
 * website.
 */
export const metadata: Metadata = {
  title: 'Rill — privacy policy',
  description:
    'What the Rill launcher reads, what leaves the phone, and what does not. No accounts, no analytics, no advertising.',
  alternates: { canonical: 'https://bilcoworks.com/rill/privacy' },
  openGraph: {
    title: 'Rill — privacy policy | Bilco Works',
    description: 'What the Rill launcher reads, what leaves the phone, and what does not.',
    url: 'https://bilcoworks.com/rill/privacy',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function RillPrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Rill · legal"
        plate="interference"
        title="What Rill reads, and what never leaves your phone."
        lede="Rill is a launcher. This page says exactly what it reads to do that, what it sends, and where. It is written to be checked against the code."
      />

      <section className="border-t border-hair-ink bg-paper py-20 md:py-28">
        <div className="shell">
          <div
            className="rill-policy max-w-measure text-sm leading-[1.8] text-ink-2"
            dangerouslySetInnerHTML={{ __html: rillPrivacyHtml }}
          />
        </div>
      </section>
    </>
  )
}
