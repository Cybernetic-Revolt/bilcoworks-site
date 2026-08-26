import { ReactNode } from 'react'
import Dither, { Plate } from './Dither'
import Reveal from './Reveal'

/**
 * The opening of every page except the homepage. One shape, one type scale, one
 * plate — so a visitor moving between practices knows they never left.
 */
export default function PageHero({
  index,
  eyebrow,
  title,
  lede,
  plate,
  children,
}: {
  /** Practice number, e.g. "01". Omitted on pages outside the four practices. */
  index?: string
  eyebrow: string
  title: ReactNode
  lede: string
  plate: Plate
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-hair bg-ground pb-20 pt-[calc(72px+5rem)] md:pb-28 md:pt-[calc(72px+7rem)]">
      {/* Masked, not cropped: a hard-edged field reads as a texture swatch laid
          on top of the page rather than as part of it. */}
      <div
        className="pointer-events-none absolute -right-24 top-0 h-full w-[36rem] max-w-[55%] opacity-60"
        aria-hidden="true"
        style={{
          maskImage:
            'radial-gradient(70% 60% at 60% 45%, black 0%, black 35%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(70% 60% at 60% 45%, black 0%, black 35%, transparent 78%)',
        }}
      >
        <Dither
          plate={plate}
          cols={48}
          aspect={1.2}
          className="h-full w-full text-signal/20"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ground via-ground/80 to-transparent" />

      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            {eyebrow}
            {index && <span className="ml-3 text-chalk-3">{index}</span>}
          </p>
          <h1 className="mt-6 text-d1 text-chalk">{title}</h1>
          <p className="lede mt-8">{lede}</p>
          {children && <div className="mt-10">{children}</div>}
        </Reveal>
      </div>
    </section>
  )
}
