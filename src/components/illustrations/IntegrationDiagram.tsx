'use client'

interface IntegrationDiagramProps {
  className?: string
}

export default function IntegrationDiagram({ className = '' }: IntegrationDiagramProps) {
  return (
    <svg
      viewBox="0 0 360 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
      role="img"
      aria-label="Diagram showing integration architecture with data flows between enterprise systems"
    >
      <style>
        {`
          .int-layer-glow {
            animation: layer-pulse 6s ease-in-out infinite;
          }
          .status-active {
            animation: status-pulse 4s ease-in-out infinite;
          }
          @keyframes layer-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          @keyframes status-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
        `}
      </style>
      <defs>
        <pattern
          id="int-grid"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="10" cy="10" r="1" fill="#E1E6EB" />
        </pattern>
      </defs>

      <rect width="360" height="280" fill="#FAFBFC" />
      <rect width="360" height="280" fill="url(#int-grid)" />

      {/* Source Systems Layer */}
      <g transform="translate(20, 20)">
        <text
          x="0"
          y="10"
          fontSize="9"
          fill="#5C6A7A"
          fontFamily="system-ui, sans-serif"
          fontWeight="500"
        >
          SOURCE SYSTEMS
        </text>
        <rect x="0" y="20" width="65" height="32" rx="4" fill="#3D5A7E" />
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fontSize="9"
          fill="white"
          fontFamily="system-ui, sans-serif"
        >
          HRIS
        </text>
        <rect x="75" y="20" width="65" height="32" rx="4" fill="#3D5A7E" />
        <text
          x="107"
          y="40"
          textAnchor="middle"
          fontSize="9"
          fill="white"
          fontFamily="system-ui, sans-serif"
        >
          Payroll
        </text>
        <rect x="150" y="20" width="65" height="32" rx="4" fill="#3D5A7E" />
        <text
          x="182"
          y="40"
          textAnchor="middle"
          fontSize="9"
          fill="white"
          fontFamily="system-ui, sans-serif"
        >
          Benefits
        </text>
      </g>

      {/* Connection lines - top to middle */}
      <g stroke="#CCD3DA" strokeWidth="1.5" fill="none">
        <line x1="52" y1="72" x2="52" y2="100" strokeDasharray="4 2" />
        <line x1="127" y1="72" x2="127" y2="100" strokeDasharray="4 2" />
        <line x1="202" y1="72" x2="202" y2="100" strokeDasharray="4 2" />
      </g>

      {/* Integration Layer */}
      <g transform="translate(20, 100)">
        <text
          x="0"
          y="10"
          fontSize="9"
          fill="#5C6A7A"
          fontFamily="system-ui, sans-serif"
          fontWeight="500"
        >
          INTEGRATION LAYER
        </text>
        <rect
          className="int-layer-glow"
          x="0"
          y="20"
          width="255"
          height="45"
          rx="4"
          fill="#2C4A6E"
        />
        <g transform="translate(10, 30)">
          <rect x="0" y="0" width="52" height="24" rx="3" fill="#1E3A5F" />
          <text
            x="26"
            y="15"
            textAnchor="middle"
            fontSize="8"
            fill="#A8B8C8"
            fontFamily="system-ui, sans-serif"
          >
            Transform
          </text>
        </g>
        <g transform="translate(70, 30)">
          <rect x="0" y="0" width="52" height="24" rx="3" fill="#1E3A5F" />
          <text
            x="26"
            y="15"
            textAnchor="middle"
            fontSize="8"
            fill="#A8B8C8"
            fontFamily="system-ui, sans-serif"
          >
            Validate
          </text>
        </g>
        <g transform="translate(130, 30)">
          <rect x="0" y="0" width="52" height="24" rx="3" fill="#1E3A5F" />
          <text
            x="26"
            y="15"
            textAnchor="middle"
            fontSize="8"
            fill="#A8B8C8"
            fontFamily="system-ui, sans-serif"
          >
            Monitor
          </text>
        </g>
        <g transform="translate(190, 30)">
          <rect x="0" y="0" width="55" height="24" rx="3" fill="#1E3A5F" />
          <text
            x="27"
            y="15"
            textAnchor="middle"
            fontSize="8"
            fill="#A8B8C8"
            fontFamily="system-ui, sans-serif"
          >
            Reconcile
          </text>
        </g>
      </g>

      {/* Connection lines - middle to bottom */}
      <g stroke="#CCD3DA" strokeWidth="1.5" fill="none">
        <line x1="52" y1="165" x2="52" y2="195" strokeDasharray="4 2" />
        <line x1="127" y1="165" x2="127" y2="195" strokeDasharray="4 2" />
        <line x1="202" y1="165" x2="202" y2="195" strokeDasharray="4 2" />
      </g>

      {/* Target Systems Layer */}
      <g transform="translate(20, 195)">
        <text
          x="0"
          y="10"
          fontSize="9"
          fill="#5C6A7A"
          fontFamily="system-ui, sans-serif"
          fontWeight="500"
        >
          TARGET SYSTEMS
        </text>
        <rect x="0" y="20" width="65" height="32" rx="4" fill="#5C6A7A" />
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fontSize="9"
          fill="white"
          fontFamily="system-ui, sans-serif"
        >
          Finance
        </text>
        <rect x="75" y="20" width="65" height="32" rx="4" fill="#5C6A7A" />
        <text
          x="107"
          y="40"
          textAnchor="middle"
          fontSize="9"
          fill="white"
          fontFamily="system-ui, sans-serif"
        >
          Identity
        </text>
        <rect x="150" y="20" width="65" height="32" rx="4" fill="#5C6A7A" />
        <text
          x="182"
          y="40"
          textAnchor="middle"
          fontSize="9"
          fill="white"
          fontFamily="system-ui, sans-serif"
        >
          Reporting
        </text>
      </g>

      {/* Status legend */}
      <g transform="translate(290, 100)">
        <rect x="0" y="0" width="55" height="65" rx="4" fill="white" stroke="#E1E6EB" />
        <text
          x="27"
          y="14"
          textAnchor="middle"
          fontSize="7"
          fill="#5C6A7A"
          fontFamily="system-ui, sans-serif"
          fontWeight="500"
        >
          STATUS
        </text>
        <circle className="status-active" cx="12" cy="28" r="4" fill="#3D8B6E" />
        <text x="20" y="31" fontSize="7" fill="#5C6A7A" fontFamily="system-ui, sans-serif">
          Active
        </text>
        <circle cx="12" cy="42" r="4" fill="#C4873B" />
        <text x="20" y="45" fontSize="7" fill="#5C6A7A" fontFamily="system-ui, sans-serif">
          Warn
        </text>
        <circle cx="12" cy="56" r="4" fill="#B85450" />
        <text x="20" y="59" fontSize="7" fill="#5C6A7A" fontFamily="system-ui, sans-serif">
          Error
        </text>
      </g>
    </svg>
  )
}
