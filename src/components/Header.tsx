'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navigation = [
  { name: 'HR Systems', href: '/hris' },
  { name: 'AI Engineering', href: '/ai' },
  { name: 'Research', href: '/research' },
  { name: 'Infrastructure', href: '/infrastructure' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-out-expo ${
        scrolled
          ? 'bg-surface-elevated/80 backdrop-blur-md border-b border-rule shadow-header'
          : 'bg-surface-elevated/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <nav
        className="container-wide flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-display font-medium text-ink hover:text-accent transition-colors"
          aria-label="Bilco Works home"
        >
          <svg
            width="28"
            height="28"
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

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors py-1 ${
                    active ? 'text-accent' : 'text-ink-muted hover:text-ink'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-px w-full origin-left bg-gradient-to-r from-accent to-teal transition-transform duration-300 ease-out-expo ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-ink-muted hover:text-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-rule bg-surface-elevated"
        >
          <ul className="container-wide py-4 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block py-2 text-base font-medium transition-colors ${
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                      ? 'text-ink'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                      ? 'page'
                      : undefined
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
