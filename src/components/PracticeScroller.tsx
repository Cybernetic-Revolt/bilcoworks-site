'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Dither, { Plate } from './Dither'

export interface Practice {
  number: string
  name: string
  href: string
  lede: string
  proof: string[]
  plate: Plate
}

/**
 * Four full-height panels scrolling over one plate that stays pinned and
 * changes with them, plus a rail on the right saying where you are. The panels
 * are ordinary stacked sections in the DOM, so with no JavaScript you still
 * read all four in order — the crossfade and the rail are the enhancement, not
 * the content.
 */
export default function PracticeScroller({
  practices,
}: {
  practices: Practice[]
}) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [active, setActive] = useState(0)
  const [enhanced, setEnhanced] = useState(false)

  useEffect(() => {
    setEnhanced(true)
    const section = sectionRef.current
    if (!section) return

    let frame = 0
    const measure = () => {
      frame = 0
      const rect = section.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) return
      const progress = Math.min(Math.max(-rect.top / total, 0), 0.9999)
      setActive(Math.floor(progress * practices.length))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [practices.length])

  return (
    <section ref={sectionRef} className="relative bg-ground" aria-label="Practices">
      {/* Pinned plate */}
      <div className="pointer-events-none sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {practices.map((p, i) => (
            <Dither
              key={p.number}
              plate={p.plate}
              cols={52}
              aspect={0.86}
              tone="currentColor"
              className={`absolute h-[min(78vh,46rem)] w-auto text-signal/25 transition-opacity duration-700 ease-out-expo ${
                enhanced
                  ? i === active
                    ? 'opacity-100'
                    : 'opacity-0'
                  : i === 0
                    ? 'opacity-100'
                    : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ground via-ground/70 to-ground/20" />

        {/* Scroll rail */}
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 items-center gap-4 md:flex md:right-10">
          <span className="index rotate-180 text-chalk-3 [writing-mode:vertical-rl]">
            Practices
          </span>
          <div className="flex flex-col gap-3">
            {practices.map((p, i) => (
              <span
                key={p.number}
                className={`block h-px transition-all duration-500 ease-out-expo ${
                  enhanced && i === active
                    ? 'w-10 bg-signal'
                    : 'w-5 bg-chalk/25'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Panels — pulled up over the pinned plate */}
      <div className="-mt-[100vh]">
        {practices.map((p) => (
          <div
            key={p.number}
            className="relative flex min-h-screen items-center"
          >
            <div className="shell">
              <div className="max-w-xl">
                <p className="eyebrow">
                  Practice
                  <span className="ml-3 text-chalk-3">{p.number}</span>
                </p>
                <h2 className="mt-6 text-d2 text-chalk">
                  <Link
                    href={p.href}
                    className="transition-colors duration-300 hover:text-signal"
                  >
                    {p.name}
                  </Link>
                </h2>
                <p className="lede mt-6">{p.lede}</p>

                <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                  {p.proof.map((line) => (
                    <li key={line} className="flex items-center gap-2">
                      <span className="h-1 w-1 shrink-0 bg-signal" aria-hidden="true" />
                      <span className="font-mono text-xs text-chalk-2">{line}</span>
                    </li>
                  ))}
                </ul>

                <Link href={p.href} className="pill mt-10">
                  Open practice
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
