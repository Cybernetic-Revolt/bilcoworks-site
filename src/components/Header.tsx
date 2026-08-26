'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Wordmark from './Wordmark'

/**
 * Four practices and one emphasised control. Everything secondary — services,
 * approach, about, FAQ — lives in the footer, so the header never becomes a
 * site map.
 */
const practices = [
  { name: 'HR & Payroll', href: '/hris' },
  { name: 'AI', href: '/ai' },
  { name: 'Research', href: '/research' },
  { name: 'Infrastructure', href: '/infrastructure' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-out-expo ${
        scrolled || open
          ? 'border-b border-hair bg-ground/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav
        className="shell flex h-[72px] items-center justify-between"
        aria-label="Main"
      >
        <Link
          href="/"
          className="group flex items-center gap-3 text-chalk"
          aria-label="Bilco Works — home"
        >
          <Wordmark className="h-5 w-5 text-signal transition-transform duration-500 ease-out-expo group-hover:rotate-90" />
          <span className="font-display text-[0.9375rem] font-normal tracking-tight">
            Bilco Works
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-7 lg:flex">
            {practices.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`font-mono text-micro-2 uppercase transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-signal'
                      : 'text-chalk-2 hover:text-chalk'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="pill hidden sm:inline-flex">
            Contact
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-mr-2 p-2 text-chalk-2 transition-colors hover:text-chalk lg:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  fill="none"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6h14M3 10h14M3 14h14"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  fill="none"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-hair bg-ground lg:hidden">
          <ul className="shell divide-y divide-chalk/5 py-2">
            {practices.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-baseline gap-4 py-4 text-chalk"
                >
                  <span className="index text-chalk-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-lg font-light">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="flex items-baseline gap-4 py-4 text-signal"
              >
                <span className="index text-chalk-3">→</span>
                <span className="font-display text-lg font-light">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
