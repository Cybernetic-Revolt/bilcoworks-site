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
        // Three hues carry the whole site: a deep slate-teal ground, a neutral
        // paper, and one signal accent. Everything else is an opacity of these.
        ground: {
          DEFAULT: '#0B1216', // page ground (dark chapters)
          2: '#0F181D', // alternate dark band
          3: '#16232A', // raised surface on dark
        },
        paper: {
          DEFAULT: '#F1F3F3', // page ground (light chapters)
          2: '#E5EAEA', // alternate light band
          3: '#FFFFFF', // cards on light
        },
        // Text on paper. Same rule, measured against the darkest paper tone
        // (`paper-2`) rather than against white.
        ink: {
          DEFAULT: '#0B1216',
          2: '#4E6069',
          3: '#566770',
        },
        // Text on ground. Every step is >=4.5:1 against both `ground` and
        // `ground-2` — the faint tier is where a dark palette usually fails AA,
        // so it is set by measurement, not by eye.
        chalk: {
          DEFAULT: '#EAF0F1',
          2: '#94A8B0',
          3: '#748992',
        },
        // The single accent. `signal` reads on dark, `signal-deep` on paper.
        signal: {
          DEFAULT: '#4ED8C8',
          deep: '#0E6D65',
          dim: '#2A8C83',
        },
      },
      borderColor: {
        hair: 'rgba(234, 240, 241, 0.12)', // hairline on ground
        'hair-2': 'rgba(234, 240, 241, 0.22)',
        'hair-ink': 'rgba(11, 18, 22, 0.12)', // hairline on paper
        'hair-ink-2': 'rgba(11, 18, 22, 0.22)',
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: [
          'var(--font-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        // Display scale — large and light, per the reference.
        'd1': ['clamp(2.75rem, 7.2vw, 5.75rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        'd2': ['clamp(2.25rem, 5.2vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'd3': ['clamp(1.75rem, 3.4vw, 2.75rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'd4': ['clamp(1.375rem, 2.2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        // Micro scale — eyebrows and rail labels.
        'micro': ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.2em' }],
        'micro-2': ['0.625rem', { lineHeight: '0.875rem', letterSpacing: '0.24em' }],
      },
      maxWidth: {
        measure: '62ch', // body copy never runs wider than this
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'cue': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.35' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        cue: 'cue 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
