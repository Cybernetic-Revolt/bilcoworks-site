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
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
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
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
