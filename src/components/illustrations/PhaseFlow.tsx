'use client'

interface PhaseFlowProps {
  className?: string
}

export default function PhaseFlow({ className = '' }: PhaseFlowProps) {
  const phases = [
    { name: 'Diagnose', color: '#3D5A7E' },
    { name: 'Design', color: '#3D5A7E' },
    { name: 'Build', color: '#3D5A7E' },
    { name: 'Prove', color: '#3D5A7E' },
    { name: 'Launch', color: '#3D5A7E' },
    { name: 'Harden', color: '#3D5A7E' },
  ]

  return (
    <svg
      viewBox="0 0 800 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
      role="img"
      aria-label="Delivery methodology flow: Diagnose, Design, Build, Prove, Launch, Harden"
    >
      <style>
        {`
          .flow-arrow {
            opacity: 0;
            animation: arrow-cascade 6s ease-in-out infinite;
          }
          .flow-arrow-0 { animation-delay: 0s; }
          .flow-arrow-1 { animation-delay: 0.4s; }
          .flow-arrow-2 { animation-delay: 0.8s; }
          .flow-arrow-3 { animation-delay: 1.2s; }
          .flow-arrow-4 { animation-delay: 1.6s; }
          @keyframes arrow-cascade {
            0% { opacity: 0; }
            15% { opacity: 1; }
            70% { opacity: 1; }
            85%, 100% { opacity: 0; }
          }
        `}
      </style>
      {/* Phase nodes */}
      {phases.map((phase, i) => (
        <g key={phase.name} transform={`translate(${20 + i * 130}, 20)`}>
          <rect
            x="0"
            y="0"
            width="100"
            height="60"
            rx="8"
            fill={phase.color}
            opacity={0.8}
          />
          <text
            x="50"
            y="35"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="12"
            fontFamily="system-ui, sans-serif"
            fontWeight="500"
          >
            {phase.name}
          </text>
          <text
            x="50"
            y="85"
            textAnchor="middle"
            fill="#5C6A7A"
            fontSize="10"
            fontFamily="ui-monospace, monospace"
          >
            0{i + 1}
          </text>
        </g>
      ))}

      {/* Connection lines between boxes */}
      {phases.slice(0, -1).map((_, i) => (
        <g key={`connector-${i}`} className={`flow-arrow flow-arrow-${i}`}>
          <line
            x1={120 + i * 130}
            y1="50"
            x2={145 + i * 130}
            y2="50"
            stroke="#CCD3DA"
            strokeWidth="2"
          />
          <polygon
            points={`${145 + i * 130},46 ${150 + i * 130},50 ${145 + i * 130},54`}
            fill="#CCD3DA"
          />
        </g>
      ))}
    </svg>
  )
}
