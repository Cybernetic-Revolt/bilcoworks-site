import type { Metadata } from "next";
import ContactCta from "@/components/ContactCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  Chapter,
  Narrative,
  SectionHead,
  TileGrid,
} from "@/components/Section";

export const metadata: Metadata = {
  title: "Servers & Infrastructure | Self-Hosted Production | Bilco Works",
  description:
    "Virtualization, local AI inference, provider failover, monitoring, and tested restores — on hardware we rack and operate ourselves. The standard we recommend is the standard we run.",
  alternates: { canonical: "https://bilcoworks.com/infrastructure" },
  openGraph: {
    title: "Servers & Infrastructure | Bilco Works",
    description:
      "Self-hosted production: virtualization, local inference, failover, monitoring, and tested restores.",
    url: "https://bilcoworks.com/infrastructure",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servers & Infrastructure | Bilco Works",
    description: "Self-hosted production on hardware we operate ourselves.",
  },
};

const practices = [
  {
    title: "Virtualized, not improvised",
    body: "A Proxmox VE environment carves the hardware into isolated containers and virtual machines — one workload per guest, so a misbehaving experiment cannot take a product down with it.",
  },
  {
    title: "AI inference stays home",
    body: 'Local LLM inference via Ollama and local Whisper speech-to-text run alongside the cloud APIs they back up. Every AI-dependent system in the lab has an answer to "what if the provider is down?" — because the fallback is in the rack.',
  },
  {
    title: "Services, not sessions",
    body: "Long-running systems are managed as proper system services with restart policies and health checks, provisioned by scripted, repeatable automation rather than by hand-typed history.",
  },
  {
    title: "Secrets live in one place",
    body: "Credentials are never committed, never pasted into configs: they are fetched at runtime from a dedicated secrets manager under least-privilege, read-only automation tokens. Repositories hold the map, never the keys.",
  },
  {
    title: "Restores, not just backups",
    body: "Backup jobs are boring; restore documents are the asset. Every important system has a written path back from bare metal — the same runbook standard we hand clients at go-live.",
  },
  {
    title: "Watched while we sleep",
    body: "Dashboards, reconciliation jobs, and push alerts to a phone mean the lab reports its own failures. A system that requires someone to notice something is wrong is a system that is already down.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Practice"
        plate="lattice"
        title="Servers and infrastructure."
        lede="TwoRing's voice engine, the Knee Ledger's training loops, the quantum instrument, AllSpark's dashboards — all of it runs on servers we own, rack, and operate ourselves. The infrastructure is not a footnote to the projects; it is one of them."
      />

      <Chapter tone="paper">
        <Narrative
          tone="paper"
          label="Why it matters"
          statement="Production discipline, at personal scale."
        >
          <p>
            It is easy to preach runbooks, monitoring, and tested restores when
            someone else carries the pager. We run our own environment to the
            standard we recommend, at the scale of a small company: real
            products with real customers depend on this hardware, so &ldquo;it
            is just the homelab&rdquo; is never an excuse.
          </p>
          <p>
            When we design an integration&apos;s error handling or insist on a
            rollback plan before a cutover, we are describing how we run our own
            systems on an ordinary Tuesday. Operating this environment is the
            difference between recommending practices and living with them.
          </p>
        </Narrative>
      </Chapter>

      <Chapter tone="ground-2">
        <SectionHead
          eyebrow="How it is run"
          title="Six habits, no exceptions."
        />
        <TileGrid items={practices} columns={3} />
      </Chapter>

      <ContactCta
        heading="The pager is ours, not yours."
        body="If you are weighing whether to self-host, migrate, or hand a system back to your own team, we have made those calls with our own money and our own sleep on the line."
        note="We reply within one business day"
      />
    </>
  );
}
