/**
 * Authored 1-bit imagery.
 *
 * Each practice gets a monochrome dot-matrix plate generated from a field
 * function and a 4x4 ordered-dither (Bayer) threshold — the same technique a
 * newspaper used to print a photograph, and the reason these read as printed
 * rather than as clip art. Nothing here is a stock icon and nothing is a photo.
 *
 * Pure and deterministic, so it renders on the server with no client JS and
 * looks identical in every screenshot.
 */

const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map((row) => row.map((v) => (v + 0.5) / 16))

export type Plate = 'ledger' | 'bloom' | 'interference' | 'lattice'

/** Returns ink coverage in 0..1 at normalised coordinates. */
function field(plate: Plate, x: number, y: number): number {
  switch (plate) {
    // Ruled columns of a ledger, with one column that does not reconcile.
    case 'ledger': {
      const col = Math.abs(Math.sin(x * Math.PI * 8))
      const band = col > 0.35 ? 1 : 0.06
      const rule = Math.abs(Math.sin(y * Math.PI * 26)) > 0.82 ? 1 : 0.55
      const short = x > 0.6 && x < 0.71 ? (y > 0.45 ? 0.05 : 1) : 1
      const fall = Math.max(0, 1 - Math.abs(y - 0.5) * 1.5)
      return band * rule * short * fall
    }
    // A signal blooming out of a point source: a hot core, spokes, and a halo.
    case 'bloom': {
      const dx = x - 0.5
      const dy = y - 0.5
      const r = Math.sqrt(dx * dx + dy * dy)
      const theta = Math.atan2(dy, dx)
      const spokes = Math.abs(Math.cos(theta * 6)) ** 2
      const core = Math.max(0, 1 - r * 5)
      const halo = Math.max(0, 1 - Math.abs(r - 0.33) * 7) * spokes
      return Math.min(1, core + halo * 0.9)
    }
    // Two sources interfering: concentric fringes crossing, not a blob.
    case 'interference': {
      const a = Math.hypot(x - 0.26, y - 0.5)
      const b = Math.hypot(x - 0.74, y - 0.5)
      const fringe = Math.cos((a - b) * Math.PI * 34) * 0.5 + 0.5
      const rings = (Math.cos(a * Math.PI * 20) * 0.5 + 0.5) * 0.35
      const env = Math.max(0, 1 - Math.hypot(x - 0.5, (y - 0.5) * 1.3) * 1.8)
      return Math.min(1, (fringe ** 2 + rings) * env * 1.5)
    }
    // Racked hardware seen head-on: full-width shelves, gaps between them,
    // and a column of drive bays down one side.
    case 'lattice': {
      const shelf = (y * 9) % 1
      const inShelf = shelf < 0.62 ? 1 : 0.04
      const bays = x < 0.18 ? (((x * 26) % 1) < 0.55 ? 1 : 0.1) : 1
      const vents = x > 0.24 ? (((x * 34) % 1) < 0.5 ? 1 : 0.28) : 1
      const frame = x < 0.03 || x > 0.97 ? 1 : 0
      return Math.min(1, Math.max(frame, inShelf * bays * vents * 0.92))
    }
  }
}

interface DitherProps {
  plate: Plate
  /** Cells across. Cells down is derived from the aspect ratio. */
  cols?: number
  aspect?: number
  className?: string
  /** Fill colour for the dots. */
  tone?: string
}

export default function Dither({
  plate,
  cols = 44,
  aspect = 1,
  className = '',
  tone = 'currentColor',
}: DitherProps) {
  const rows = Math.round(cols * aspect)
  const dots: string[] = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const v = field(plate, (c + 0.5) / cols, (r + 0.5) / rows)
      if (v <= 0) continue
      if (v <= BAYER[r % 4][c % 4]) continue
      dots.push(`${c} ${r}`)
    }
  }

  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      className={className}
      role="presentation"
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      {dots.map((d) => {
        const [c, r] = d.split(' ')
        return <rect key={d} x={c} y={r} width="1" height="1" fill={tone} />
      })}
    </svg>
  )
}
