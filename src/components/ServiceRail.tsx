'use client'

import { useEffect, useState } from 'react'

/**
 * The index rail for /services.
 *
 * The first version listed all eight titles in a horizontal scroll strip. At
 * 1440px three of them were never visible and a fourth was severed mid-word with
 * no affordance saying the strip scrolled; at 390px six of eight were invisible.
 * It also never indicated position — it was byte-identical at the top of the page
 * and at the footer, eleven screens down.
 *
 * So it shows the eight indices, which always fit, and spells out only the
 * section you are actually in — the reference's own answer to the same problem.
 */
export default function ServiceRail({
  items,
}: {
  items: { id: string; title: string }[]
}) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el))
    if (!sections.length) return

    let frame = 0
    const measure = () => {
      frame = 0
      // The section whose top has most recently passed under the rail.
      const line = 160
      let current = 0
      sections.forEach((el, i) => {
        if (el.getBoundingClientRect().top <= line) current = i
      })
      setActive(current)
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
  }, [items])

  return (
    <nav
      aria-label="Service lines"
      className="sticky top-[72px] z-30 border-b border-hair bg-ground/90 backdrop-blur-md"
    >
      <div className="shell flex items-center gap-6 py-4">
        <ol className="flex shrink-0 items-center gap-3">
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={i === active ? 'true' : undefined}
                title={item.title}
                className={`block font-mono text-micro-2 tabular-nums transition-colors duration-300 ${
                  i === active
                    ? 'text-signal'
                    : 'text-chalk-3 hover:text-chalk-2'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
                <span
                  className={`mt-1.5 block h-px transition-colors duration-300 ${
                    i === active ? 'bg-signal' : 'bg-chalk/20'
                  }`}
                />
              </a>
            </li>
          ))}
        </ol>
        <span className="min-w-0 truncate font-mono text-micro-2 uppercase text-chalk-2">
          {items[active]?.title}
        </span>
      </div>
    </nav>
  )
}
