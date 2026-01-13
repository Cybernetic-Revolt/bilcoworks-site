interface IconProps {
  className?: string
}

export function ImplementationIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Implementation icon showing system setup"
    >
      <rect x="4" y="4" width="40" height="40" rx="4" fill="#F4F6F8" />
      <rect x="8" y="8" width="14" height="14" rx="2" fill="#2C4A6E" />
      <rect x="26" y="8" width="14" height="14" rx="2" fill="#3D5A7E" />
      <rect x="8" y="26" width="14" height="14" rx="2" fill="#3D5A7E" />
      <rect x="26" y="26" width="14" height="14" rx="2" fill="#5C6A7A" />
      <circle cx="24" cy="24" r="4" fill="#3D8B6E" />
    </svg>
  )
}

export function RescueIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Rescue icon showing system recovery"
    >
      <rect x="4" y="4" width="40" height="40" rx="4" fill="#F4F6F8" />
      <path
        d="M24 12 L24 24 L32 32"
        stroke="#2C4A6E"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="24" cy="24" r="14" stroke="#3D5A7E" strokeWidth="2" fill="none" />
      <path
        d="M16 16 L20 20 M28 28 L32 32"
        stroke="#B85450"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36 18 L40 14 M40 14 L40 20 M40 14 L34 14"
        stroke="#3D8B6E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function IntegrationIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Integration icon showing connected systems"
    >
      <rect x="4" y="4" width="40" height="40" rx="4" fill="#F4F6F8" />
      <circle cx="14" cy="14" r="6" fill="#2C4A6E" />
      <circle cx="34" cy="14" r="6" fill="#3D5A7E" />
      <circle cx="14" cy="34" r="6" fill="#3D5A7E" />
      <circle cx="34" cy="34" r="6" fill="#5C6A7A" />
      <circle cx="24" cy="24" r="4" fill="#3A7D7B" />
      <path
        d="M18 16 L20 22 M28 16 L26 22 M18 32 L20 26 M28 32 L26 26"
        stroke="#CCD3DA"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ArchitectureIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Architecture icon showing system structure"
    >
      <rect x="4" y="4" width="40" height="40" rx="4" fill="#F4F6F8" />
      <rect x="18" y="8" width="12" height="8" rx="2" fill="#2C4A6E" />
      <rect x="8" y="22" width="12" height="8" rx="2" fill="#3D5A7E" />
      <rect x="28" y="22" width="12" height="8" rx="2" fill="#3D5A7E" />
      <rect x="18" y="34" width="12" height="8" rx="2" fill="#5C6A7A" />
      <path
        d="M24 16 L24 22 M14 30 L14 34 L24 34 M34 30 L34 34 L24 34"
        stroke="#CCD3DA"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 22 L14 22 M24 22 L34 22"
        stroke="#CCD3DA"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HardeningIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Hardening icon showing system stability"
    >
      <rect x="4" y="4" width="40" height="40" rx="4" fill="#F4F6F8" />
      <path
        d="M24 8 L36 14 L36 26 C36 32 30 38 24 40 C18 38 12 32 12 26 L12 14 L24 8 Z"
        fill="#2C4A6E"
      />
      <path
        d="M18 24 L22 28 L30 20"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
