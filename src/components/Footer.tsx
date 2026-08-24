import Link from 'next/link'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Approach', href: '/approach' },
  { name: 'Labs', href: '/labs' },
  { name: 'FAQ', href: '/faq' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative section-elevated border-t border-rule">
      <div className="container-wide py-14">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 font-display font-medium text-ink"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="text-accent transition-transform duration-500 ease-out-expo group-hover:rotate-[6deg]"
              >
                <rect x="2" y="2" width="12" height="12" fill="currentColor" />
                <rect x="18" y="6" width="12" height="12" fill="currentColor" opacity="0.6" />
                <rect x="6" y="18" width="12" height="12" fill="currentColor" opacity="0.35" />
              </svg>
              <span className="tracking-tight">Bilco Works</span>
            </Link>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-xs">
              HRIS implementation, stabilization, and integration consulting
              for enterprise organizations.
            </p>
          </div>

          <div className="md:justify-self-end">
            <h3 className="eyebrow">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-muted hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-rule">
          <p className="text-sm text-ink-subtle">
            {currentYear} <Link href="/ops" className="hover:text-ink-muted">B</Link>ilco Works Incorporated - HRIS &amp; Systems Consulting
          </p>
        </div>
      </div>
    </footer>
  )
}
