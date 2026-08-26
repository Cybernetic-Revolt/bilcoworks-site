import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * The marketing shell. Everything public renders inside it.
 *
 * It exists as a route-group layout rather than as part of the root layout so
 * that /ops — a private dashboard, not part of the site — renders without it.
 * The header is `fixed`, so it reserves no space in flow; pages inside this
 * group pad their own top for it (`pt-[72px]`, or PageHero's larger value), and
 * pages outside it are unaffected.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:bg-signal focus:px-4 focus:py-2 focus:font-mono focus:text-micro-2 focus:uppercase focus:text-ground"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}
