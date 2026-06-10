/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        surface: {
          DEFAULT: '#FAFBFC',      // Primary background (paper-like off-white)
          secondary: '#F4F6F8',    // Secondary background (slightly darker)
          elevated: '#FFFFFF',     // Cards, elevated elements
        },
        // Text colors
        ink: {
          DEFAULT: '#1A2332',      // Primary text (near-black navy)
          muted: '#5C6A7A',        // Secondary/muted text
          subtle: '#8896A6',       // Tertiary/subtle text
        },
        // Border/divider colors
        rule: {
          DEFAULT: '#E1E6EB',      // Primary border
          subtle: '#EDF0F3',       // Subtle divider
          strong: '#CCD3DA',       // Emphasized border
        },
        // Primary accent (navy)
        accent: {
          DEFAULT: '#2C4A6E',      // Primary navy accent
          hover: '#1E3A5F',        // Darker on hover
          light: '#3D5A7E',        // Lighter variant
          muted: '#E8EDF3',        // Very light tint for backgrounds
        },
        // Secondary accent (muted teal)
        teal: {
          DEFAULT: '#3A7D7B',      // Secondary accent
          hover: '#2D6664',        // Darker on hover
          light: '#4A8D8B',        // Lighter variant
          muted: '#E6F0EF',        // Very light tint
        },
        // Status colors (restrained)
        status: {
          success: '#3D8B6E',      // Muted green
          warning: '#C4873B',      // Muted amber
          error: '#B85450',        // Muted red
        },
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: [
          'var(--font-display)',
          'var(--font-sans)',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'SF Mono',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'monospace',
        ],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        // Soft, navy-tinted elevation
        'subtle': '0 1px 2px rgba(26, 35, 50, 0.04), 0 1px 3px rgba(26, 35, 50, 0.06)',
        'card': '0 1px 2px rgba(26, 35, 50, 0.04), 0 4px 12px rgba(26, 35, 50, 0.05)',
        'card-hover': '0 2px 4px rgba(26, 35, 50, 0.05), 0 12px 28px rgba(26, 35, 50, 0.10)',
        'elevated': '0 8px 30px rgba(26, 35, 50, 0.08), 0 2px 6px rgba(26, 35, 50, 0.04)',
        'glow': '0 0 0 1px rgba(44, 74, 110, 0.08), 0 18px 40px rgba(44, 74, 110, 0.14)',
        'header': '0 1px 0 rgba(26, 35, 50, 0.06), 0 6px 24px rgba(26, 35, 50, 0.06)',
        'btn': '0 1px 2px rgba(26, 35, 50, 0.10), 0 2px 8px rgba(44, 74, 110, 0.18)',
        'btn-hover': '0 2px 4px rgba(26, 35, 50, 0.12), 0 8px 20px rgba(44, 74, 110, 0.28)',
      },
      backgroundImage: {
        'mesh': 'radial-gradient(60% 60% at 20% 0%, rgba(44, 74, 110, 0.10) 0%, transparent 60%), radial-gradient(50% 50% at 90% 20%, rgba(58, 125, 123, 0.10) 0%, transparent 55%), radial-gradient(60% 80% at 60% 100%, rgba(44, 74, 110, 0.06) 0%, transparent 60%)',
        'dark-glow': 'radial-gradient(60% 120% at 50% 0%, rgba(61, 90, 126, 0.55) 0%, transparent 60%), radial-gradient(40% 80% at 85% 30%, rgba(58, 125, 123, 0.30) 0%, transparent 60%)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'sheen': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'reveal-up': 'reveal-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
