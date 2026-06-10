'use client'

import { useEffect, useRef, useState, ElementType, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Render element. Defaults to a div. */
  as?: ElementType
  /** Stagger delay in milliseconds. */
  delay?: number
  className?: string
  id?: string
}

/**
 * Fades and lifts children into view the first time they enter the viewport.
 * Falls back to fully visible when IntersectionObserver is unavailable or the
 * user prefers reduced motion (handled in CSS).
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  )
}
