/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg:   '#06070d',
        s1:   '#0b0d17',
        s2:   '#10121e',
        lime: '#d4f54e',
        'lime-dark': '#a8c73d',
      },
      keyframes: {
        ticker:  { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        blink:   { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.2' } },
        slideIn: { from: { opacity: '0', transform: 'translateX(-12px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        fadeUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        ticker:  'ticker 35s linear infinite',
        blink:   'blink 2s infinite',
        slideIn: 'slideIn 0.4s ease',
        fadeUp:  'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
