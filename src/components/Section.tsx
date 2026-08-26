import { ReactNode } from 'react'
import Reveal from './Reveal'

type Tone = 'ground' | 'ground-2' | 'paper' | 'paper-2'

const toneClass: Record<Tone, string> = {
  ground: 'bg-ground border-hair',
  'ground-2': 'bg-ground-2 border-hair',
  paper: 'bg-paper border-hair-ink',
  'paper-2': 'bg-paper-2 border-hair-ink',
}

const isLight = (tone: Tone) => tone === 'paper' || tone === 'paper-2'

/**
 * A page chapter. Chapters alternate between the dark ground and the light
 * paper so a long page reads as distinct movements rather than one wash.
 */
export function Chapter({
  tone = 'ground',
  id,
  children,
  className = '',
}: {
  tone?: Tone
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`border-t ${toneClass[tone]} py-20 md:py-28 ${className}`}
    >
      <div className="shell">{children}</div>
    </section>
  )
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  tone = 'ground',
}: {
  eyebrow: string
  title: string
  lede?: string
  tone?: Tone
}) {
  const light = isLight(tone)
  return (
    <Reveal className="max-w-3xl">
      <p className={light ? 'eyebrow-ink' : 'eyebrow'}>{eyebrow}</p>
      <h2 className={`mt-5 text-d3 ${light ? 'text-ink' : 'text-chalk'}`}>
        {title}
      </h2>
      {lede && <p className={`mt-5 ${light ? 'lede-ink' : 'lede'}`}>{lede}</p>}
    </Reveal>
  )
}

/**
 * A pull-quote label beside a column of running prose. Used wherever a page has
 * something to explain rather than something to list.
 */
export function Narrative({
  tone = 'ground',
  label,
  statement,
  children,
}: {
  tone?: Tone
  label: string
  statement: string
  children: ReactNode
}) {
  const light = isLight(tone)
  return (
    // The prose track is fixed rather than fluid: at 1440px a 1fr track ran the
    // copy to ~95 characters, well past the 62ch the design system asks for.
    <div className="grid gap-14 lg:grid-cols-[minmax(0,18rem)_minmax(0,40rem)]">
      <Reveal>
        <p className={light ? 'eyebrow-ink' : 'eyebrow'}>{label}</p>
        <p
          className={`mt-6 font-display text-d4 font-light ${
            light ? 'text-ink' : 'text-chalk'
          }`}
        >
          {statement}
        </p>
      </Reveal>
      <Reveal
        delay={100}
        className={`space-y-5 [&>p]:text-base [&>p]:leading-[1.8] ${
          light ? '[&>p]:text-ink-2' : '[&>p]:text-chalk-2'
        }`}
      >
        {children}
      </Reveal>
    </div>
  )
}

/**
 * The numbered-tile grid used for principles and standards. Hairlines come from
 * the gap showing the container colour through, which is why the cells are
 * flush rather than floating cards.
 */
export function TileGrid({
  tone = 'ground',
  columns = 3,
  items,
}: {
  tone?: Tone
  columns?: 2 | 3 | 4
  items: { title: string; body: string }[]
}) {
  const light = isLight(tone)
  const cols =
    columns === 2
      ? 'md:grid-cols-2'
      : columns === 4
        ? 'sm:grid-cols-2 lg:grid-cols-4'
        : 'md:grid-cols-3'

  return (
    <div
      className={`mt-14 grid gap-px border ${cols} ${
        light ? 'border-hair-ink bg-ink/10' : 'border-hair bg-chalk/10'
      }`}
    >
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          delay={i * 80}
          className={`p-8 md:p-9 ${light ? 'bg-paper-3' : 'bg-ground'}`}
        >
          <span className={`index ${light ? 'text-ink-3' : 'text-chalk-3'}`}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className={`mt-6 text-d4 ${light ? 'text-ink' : 'text-chalk'}`}>
            {item.title}
          </h3>
          <p className={`mt-4 ${light ? 'copy-ink' : 'copy'}`}>{item.body}</p>
        </Reveal>
      ))}
    </div>
  )
}
