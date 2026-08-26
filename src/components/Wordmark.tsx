/** Three offset squares — the mark carried over from the previous site. */
export default function Wordmark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <rect x="2" y="2" width="12" height="12" fill="currentColor" />
      <rect x="18" y="6" width="12" height="12" fill="currentColor" opacity="0.6" />
      <rect x="6" y="18" width="12" height="12" fill="currentColor" opacity="0.35" />
    </svg>
  )
}
