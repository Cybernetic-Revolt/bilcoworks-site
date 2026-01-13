import Link from 'next/link'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Approach', href: '/approach' },
  { name: 'FAQ', href: '/faq' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink/5 border-t border-rule">
      <div className="container-wide py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-medium text-ink"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="12" height="12" fill="currentColor" />
                <rect x="18" y="6" width="12" height="12" fill="currentColor" opacity="0.6" />
                <rect x="6" y="18" width="12" height="12" fill="currentColor" opacity="0.35" />
              </svg>
              <span>Bilco Works</span>
            </Link>
            <p className="mt-3 text-sm text-ink-muted max-w-xs">
              HRIS implementation, stabilization, and integration consulting
              for enterprise organizations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-ink">Navigation</h3>
            <ul className="mt-3 space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-rule">
          <p className="text-sm text-ink-muted">
            {currentYear} <Link href="/ops" className="hover:text-ink-muted">B</Link>ilco Works Incorporated - HRIS & Systems Consulting
          </p>
        </div>
      </div>
    </footer>
  )
}
