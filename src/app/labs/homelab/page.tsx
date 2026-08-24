import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'The Lab Itself | Self-Hosted Infrastructure | Bilco Labs',
  description:
    'Every Labs project runs on servers we own and operate: a virtualized production environment with local LLM inference, automated provisioning, secrets discipline, and tested restores.',
  alternates: {
    canonical: 'https://bilcoworks.com/labs/homelab',
  },
  openGraph: {
    title: 'The Lab Itself | Bilco Labs',
    description:
      'The self-hosted production environment every Labs project runs on.',
    url: 'https://bilcoworks.com/labs/homelab',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Lab Itself | Bilco Labs',
    description:
      'The self-hosted production environment every Labs project runs on.',
  },
}

const practices = [
  {
    heading: 'Virtualized, not improvised',
    text: 'A Proxmox VE environment carves the hardware into isolated containers and virtual machines - one workload per guest, so a misbehaving experiment cannot take a product down with it.',
  },
  {
    heading: 'AI inference stays home',
    text: 'Local LLM inference via Ollama and local Whisper speech-to-text run alongside the cloud APIs they back up. Every AI-dependent system in the lab has an answer to "what if the provider is down?" - because the fallback is in the rack.',
  },
  {
    heading: 'Services, not sessions',
    text: 'Long-running systems are managed as proper system services with restart policies and health checks, provisioned by scripted, repeatable automation rather than by hand-typed history.',
  },
  {
    heading: 'Secrets live in one place',
    text: 'Credentials are never committed, never pasted into configs: they are fetched at runtime from a dedicated secrets manager under least-privilege, read-only automation tokens. Repositories hold the map, never the keys.',
  },
  {
    heading: 'Restores, not just backups',
    text: 'Backup jobs are boring; restore documents are the asset. Every important system has a written path back from bare metal - the same runbook standard we hand clients at go-live.',
  },
  {
    heading: 'Watched while we sleep',
    text: 'Dashboards, reconciliation jobs, and push alerts to a phone mean the lab reports its own failures. A system that requires someone to notice something is wrong is a system that is already down.',
  },
]

export default function HomelabPage() {
  return (
    <div>
      <section className="relative section-padding bg-surface-secondary border-b border-rule overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-mesh" aria-hidden="true" />
        <div className="container-wide">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Labs / Infrastructure</p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-medium text-ink leading-[1.08]">
              The lab itself
            </h1>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed">
              TwoRing&apos;s voice engine, the Knee Ledger&apos;s training
              loops, the quantum instrument, AllSpark&apos;s dashboards - all
              of it runs on servers we own, rack, and operate ourselves. The
              infrastructure is not a footnote to the projects; it is one of
              them.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink">
              Production discipline, personal scale
            </h2>
            <p className="mt-4 text-body">
              It is easy to preach runbooks, monitoring, and tested restores
              when someone else carries the pager. We run our own environment
              to the standard we recommend, at the scale of a small company:
              real products with real customers depend on this hardware, so
              &ldquo;it is just the homelab&rdquo; is never an excuse.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-elevated section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink">How it is run</h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {practices.map((item, index) => (
              <Reveal
                key={item.heading}
                delay={index * 60}
                className="relative pl-6 border-l-2 border-rule transition-colors duration-300 hover:border-accent"
              >
                <h3 className="font-medium text-ink">{item.heading}</h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-2xl font-medium text-ink">
              Why clients should care
            </h2>
            <p className="mt-4 text-body">
              When we design an integration&apos;s error handling or insist on
              a rollback plan before a cutover, we are describing how we run
              our own systems on an ordinary Tuesday. Operating this
              environment is the difference between recommending practices and
              living with them.
            </p>
            <div className="mt-8">
              <Link href="/labs" className="text-ink font-medium link-underline">
                Back to Labs
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
