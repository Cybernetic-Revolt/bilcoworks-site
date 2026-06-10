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

export function GlobalPayrollIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Global payroll and compliance icon showing a globe with a verified statutory check"
    >
      <rect x="4" y="4" width="40" height="40" rx="4" fill="#F4F6F8" />
      <circle cx="22" cy="22" r="13" stroke="#2C4A6E" strokeWidth="2" fill="none" />
      <path
        d="M22 9 C16 14 16 30 22 35 M22 9 C28 14 28 30 22 35"
        stroke="#3D5A7E"
        strokeWidth="1.5"
        fill="none"
      />
      <path d="M9 22 L35 22 M11 16 L33 16 M11 28 L33 28" stroke="#3D5A7E" strokeWidth="1.5" />
      <circle cx="34" cy="34" r="9" fill="#3D8B6E" />
      <path
        d="M30 34 L33 37 L38 31"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function UnionIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Unionized workforce icon showing collective bargaining units linked together"
    >
      <rect x="4" y="4" width="40" height="40" rx="4" fill="#F4F6F8" />
      <path d="M11 32 L24 32 L37 32" stroke="#3A7D7B" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 22 L24 32 M14 27 L14 32 M34 27 L34 32" stroke="#CCD3DA" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="16" r="6" fill="#2C4A6E" />
      <circle cx="14" cy="21" r="5" fill="#3D5A7E" />
      <circle cx="34" cy="21" r="5" fill="#3D5A7E" />
      <rect x="9" y="36" width="30" height="4" rx="2" fill="#5C6A7A" />
    </svg>
  )
}

export function AIIcon({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="AI-augmented delivery icon showing an AI core with connected nodes and a verification spark"
    >
      <rect x="4" y="4" width="40" height="40" rx="4" fill="#F4F6F8" />
      <path
        d="M16 18.5 L12.5 12.5 M32 18.5 L36 13.5 M32 27.5 L34.5 36.5"
        stroke="#CCD3DA"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12.5" cy="12.5" r="3.5" fill="#3D5A7E" />
      <circle cx="36" cy="13.5" r="3.5" fill="#3D5A7E" />
      <circle cx="34.5" cy="36.5" r="3.5" fill="#3A7D7B" />
      <path d="M24 14 L32 18.5 L32 27.5 L24 32 L16 27.5 L16 18.5 Z" fill="#2C4A6E" />
      <path
        d="M24 18.5 L25.4 22.6 L29.5 23 L25.4 23.4 L24 27.5 L22.6 23.4 L18.5 23 L22.6 22.6 Z"
        fill="#FFFFFF"
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
