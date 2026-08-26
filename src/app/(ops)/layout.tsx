/**
 * The ops dashboard renders with no marketing chrome at all.
 *
 * Before this existed, /ops inherited the site header. The header is `fixed`, so
 * it left no space in flow and sat on top of the dashboard title and the "Run
 * ingestion" button — a click at the button's centre hit the header, not the
 * button. Its text colours are also chosen against the dark ground and rendered
 * at 1.1:1 over this page's light one. Both problems come from the same cause,
 * and this removes it.
 */
export default function OpsLayout({ children }: { children: React.ReactNode }) {
  return (
    // The root <body> paints the site's dark ground; the dashboard is light.
    <div className="flex min-h-screen flex-1 flex-col bg-gray-50 text-gray-900">
      {children}
    </div>
  )
}
