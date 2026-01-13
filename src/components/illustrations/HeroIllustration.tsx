'use client'

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="Abstract illustration of interconnected HR systems showing data flow between HRIS, payroll, benefits, and identity systems"
    >
      <style>
        {`
          .hris-halo {
            animation: halo-pulse 4s ease-in-out infinite;
          }
          .hris-inner-halo {
            animation: inner-pulse 3s ease-in-out infinite;
          }
          .status-dot {
            animation: status-blink 5s ease-in-out infinite;
          }
          @keyframes halo-pulse {
            0%, 100% { opacity: 0.08; }
            50% { opacity: 0.2; }
          }
          @keyframes inner-pulse {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.3; }
          }
          @keyframes status-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
      {/* Background grid */}
      <defs>
        <pattern
          id="hero-grid"
          x="0"
          y="0"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 30 0 L 0 0 0 30"
            fill="none"
            stroke="#E1E6EB"
            strokeWidth="0.5"
          />
        </pattern>
        <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAFBFC" />
          <stop offset="100%" stopColor="#F4F6F8" />
        </linearGradient>
      </defs>

      <rect width="600" height="400" fill="url(#hero-gradient)" />
      <rect width="600" height="400" fill="url(#hero-grid)" />

      {/* Central HRIS node */}
      <g transform="translate(300, 200)">
        <circle className="hris-halo" r="50" fill="#1E3A5F" opacity="0.08" />
        <circle className="hris-inner-halo" r="40" fill="#1E3A5F" opacity="0.15" />
        <circle r="30" fill="#1E3A5F" />
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="10"
          fontFamily="system-ui, sans-serif"
          fontWeight="500"
        >
          HRIS
        </text>
      </g>

      {/* Payroll node */}
      <g transform="translate(150, 100)">
        <circle r="25" fill="#3D5A7E" />
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="8"
          fontFamily="system-ui, sans-serif"
        >
          Payroll
        </text>
      </g>

      {/* Benefits node */}
      <g transform="translate(450, 100)">
        <circle r="25" fill="#3D5A7E" />
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="8"
          fontFamily="system-ui, sans-serif"
        >
          Benefits
        </text>
      </g>

      {/* Finance node */}
      <g transform="translate(150, 300)">
        <circle r="25" fill="#3D5A7E" />
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="8"
          fontFamily="system-ui, sans-serif"
        >
          Finance
        </text>
      </g>

      {/* Identity node */}
      <g transform="translate(450, 300)">
        <circle r="25" fill="#3D5A7E" />
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="8"
          fontFamily="system-ui, sans-serif"
        >
          Identity
        </text>
      </g>

      {/* Time node */}
      <g transform="translate(100, 200)">
        <circle r="20" fill="#5C6A7A" />
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="7"
          fontFamily="system-ui, sans-serif"
        >
          Time
        </text>
      </g>

      {/* Recruiting node */}
      <g transform="translate(500, 200)">
        <circle r="20" fill="#5C6A7A" />
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="6"
          fontFamily="system-ui, sans-serif"
        >
          Recruiting
        </text>
      </g>

      {/* Connection lines */}
      <g stroke="#CCD3DA" strokeWidth="2" fill="none">
        {/* HRIS to Payroll */}
        <path d="M 270 175 Q 210 120 175 115" />
        {/* HRIS to Benefits */}
        <path d="M 330 175 Q 390 120 425 115" />
        {/* HRIS to Finance */}
        <path d="M 270 225 Q 210 280 175 285" />
        {/* HRIS to Identity */}
        <path d="M 330 225 Q 390 280 425 285" />
        {/* HRIS to Time */}
        <path d="M 270 200 L 120 200" />
        {/* HRIS to Recruiting */}
        <path d="M 330 200 L 480 200" />
      </g>

      {/* Decorative micro-dots (purely ornamental, not data indicators) */}
      <g fill="#CCD3DA">
        <circle className="micro-dot" r="2" cx="85" cy="165" opacity="0.5" />
        <circle className="micro-dot-alt" r="2" cx="515" cy="235" opacity="0.5" />
        <circle className="micro-dot" r="1.5" cx="530" cy="85" opacity="0.4" />
        <circle className="micro-dot-alt" r="1.5" cx="70" cy="315" opacity="0.4" />
      </g>

      {/* Status indicators */}
      <g>
        <circle className="status-dot" cx="175" cy="85" r="5" fill="#3D8B6E" />
        <circle className="status-dot" cx="425" cy="85" r="5" fill="#3D8B6E" />
        <circle className="status-dot" cx="175" cy="315" r="5" fill="#3D8B6E" />
        <circle className="status-dot" cx="425" cy="315" r="5" fill="#3D8B6E" />
      </g>
    </svg>
  )
}
