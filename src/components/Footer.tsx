import Link from 'next/link'
import Wordmark from './Wordmark'

const columns = [
  {
    heading: 'Practices',
    links: [
      { name: 'HR & Payroll Systems', href: '/hris' },
      { name: 'AI Engineering', href: '/ai' },
      { name: 'Quantum & Research', href: '/research' },
      { name: 'Servers & Infrastructure', href: '/infrastructure' },
    ],
  },
  {
    heading: 'HR practice detail',
    links: [
      { name: 'Service lines', href: '/services' },
      { name: 'Delivery methodology', href: '/approach' },
      { name: 'Questions', href: '/faq' },
    ],
  },
  {
    heading: 'Firm',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hair bg-ground-2">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-chalk">
              <Wordmark className="h-5 w-5 text-signal" />
              <span className="font-display text-[0.9375rem] tracking-tight">
                Bilco Works
              </span>
            </Link>
            <p className="copy mt-5 max-w-[34ch]">
              Enterprise HR systems, AI engineering, quantum research, and the
              infrastructure underneath — from Calgary, for clients anywhere.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h2 className="eyebrow-quiet">{col.heading}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-chalk-2 transition-colors duration-300 hover:text-signal"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline mt-14" />

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-micro-2 uppercase text-chalk-3">
            {/* The ops dashboard hides behind the B, as it always has. */}
            <Link href="/ops" className="transition-colors hover:text-chalk-2">
              B
            </Link>
            ilco Works Incorporated · {year}
          </p>
          <p className="font-mono text-micro-2 uppercase text-chalk-3">
            Calgary, Alberta · Canada
          </p>
        </div>
      </div>
    </footer>
  )
}
