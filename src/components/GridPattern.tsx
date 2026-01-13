export default function GridPattern() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-[0.03]"
        viewBox="0 0 1200 600"
        fill="none"
      >
        <defs>
          <pattern
            id="grid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* Subtle node accents */}
        <circle cx="200" cy="120" r="4" fill="currentColor" />
        <circle cx="400" cy="200" r="4" fill="currentColor" />
        <circle cx="600" cy="80" r="4" fill="currentColor" />
        <circle cx="800" cy="160" r="4" fill="currentColor" />
        <circle cx="1000" cy="120" r="4" fill="currentColor" />
        {/* Connection lines */}
        <line
          x1="200"
          y1="120"
          x2="400"
          y2="200"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="400"
          y1="200"
          x2="600"
          y2="80"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="600"
          y1="80"
          x2="800"
          y2="160"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="800"
          y1="160"
          x2="1000"
          y2="120"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}
