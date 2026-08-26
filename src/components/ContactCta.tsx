import Link from 'next/link'
import Reveal from './Reveal'

/**
 * The site's only closing call to action, and it appears once per page. The
 * previous site stacked two or three near-identical dark "Contact us" blocks on
 * a single page; the copy is now the page's own, so it is worth reading.
 */
export default function ContactCta({
  heading,
  body,
  note,
}: {
  heading: string
  body: string
  note?: string
}) {
  return (
    <section className="border-t border-hair-ink bg-paper-2 py-20 md:py-28">
      <div className="shell">
        <Reveal className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="eyebrow-ink">Next step</p>
            <h2 className="mt-5 text-d3 text-ink">{heading}</h2>
            <p className="copy-ink mt-5">{body}</p>
          </div>
          <div className="md:justify-self-end md:text-right">
            <Link href="/contact" className="cta-ink">
              Start a conversation
              <span aria-hidden="true">→</span>
            </Link>
            {note && (
              <p className="mt-4 text-[0.8125rem] text-ink-2">
                {note}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
