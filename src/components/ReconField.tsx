'use client'

import { useEffect, useRef } from 'react'

/**
 * The site's signature motif: a field of ledger ticks, a handful of them out of
 * true, and a scan line that sweeps across and snaps each one back into
 * alignment. It is the one idea the whole firm sells — things that reconcile —
 * drawn rather than described.
 *
 * Deterministic: the same seed produces the same field on every render, so the
 * screenshot in a review matches the screenshot in the next one.
 *
 * Reduced motion, or no canvas: paints the settled field once and stops.
 */

const CELL = 17
const TICK_W = 2

// Mulberry32 — small, seeded, and stable across engines.
function rng(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

interface Tick {
  col: number
  row: number
  /** How far out of true this tick starts, in px. 0 for most of them. */
  drift: number
  /** 0 = still adrift, 1 = reconciled. */
  settled: number
  len: number
}

export default function ReconField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let ticks: Tick[] = []
    let cols = 0
    let rows = 0
    let width = 0
    let height = 0

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      cols = Math.ceil(width / CELL)
      rows = Math.ceil(height / CELL)

      const rand = rng(0x5eed)
      ticks = []
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const r = rand()
          // Most cells are empty — the field should read as sparse, not as a grid.
          if (r > 0.62) continue
          const outOfTrue = rand() < 0.13
          ticks.push({
            col,
            row,
            drift: outOfTrue ? (rand() < 0.5 ? -1 : 1) * (5 + rand() * 8) : 0,
            settled: reduced ? 1 : 0,
            len: 7 + rand() * 10,
          })
        }
      }
    }

    // Scan position in columns; advances left to right, then wraps.
    let scan = -4
    let raf = 0

    const paint = () => {
      ctx.clearRect(0, 0, width, height)

      for (const t of ticks) {
        const x = t.col * CELL + CELL / 2
        const y = t.row * CELL + CELL / 2
        const offset = t.drift * (1 - t.settled)
        const reconciled = t.drift === 0 || t.settled > 0.98

        // Ticks near the scan line glow; everything else is quiet structure.
        const dist = Math.abs(t.col - scan)
        const heat = dist < 5 ? 1 - dist / 5 : 0

        let alpha = reconciled ? 0.30 : 0.66
        if (t.drift !== 0) alpha = 0.66 - 0.36 * t.settled
        alpha += heat * 0.34

        ctx.strokeStyle =
          t.drift !== 0 && t.settled < 0.98
            ? `rgba(78, 216, 200, ${Math.min(alpha, 0.95)})`
            : `rgba(234, 240, 241, ${Math.min(alpha, 0.9)})`
        ctx.lineWidth = TICK_W
        ctx.beginPath()
        ctx.moveTo(x, y - t.len / 2 + offset)
        ctx.lineTo(x, y + t.len / 2 + offset)
        ctx.stroke()
      }

      if (!reduced) {
        // The scan line itself: a soft vertical gradient wipe.
        const sx = scan * CELL + CELL / 2
        const g = ctx.createLinearGradient(sx - 90, 0, sx + 14, 0)
        g.addColorStop(0, 'rgba(78, 216, 200, 0)')
        g.addColorStop(1, 'rgba(78, 216, 200, 0.30)')
        ctx.fillStyle = g
        ctx.fillRect(sx - 90, 0, 104, height)
      }
    }

    const step = () => {
      scan += 0.13
      if (scan > cols + 6) {
        scan = -4
        // New pass: knock a fresh handful back out of true so the field keeps working.
        const rand = rng(Math.floor(performance.now()))
        for (const t of ticks) {
          if (t.drift !== 0 && rand() < 0.5) t.settled = 0
        }
      }
      for (const t of ticks) {
        if (t.drift !== 0 && t.col < scan && t.settled < 1) {
          t.settled = Math.min(1, t.settled + 0.045)
        }
      }
      paint()
      raf = requestAnimationFrame(step)
    }

    build()
    if (reduced) {
      paint()
    } else {
      raf = requestAnimationFrame(step)
    }

    const onResize = () => {
      build()
      paint()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none h-full w-full ${className}`}
    />
  )
}
