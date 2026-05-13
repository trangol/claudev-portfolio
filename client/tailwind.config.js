/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        terminal: {
          bg:           '#080c08',
          surface:      '#0d150d',
          card:         '#101a10',
          green:        '#00ff88',
          'green-dim':  '#00cc6a',
          cyan:         '#00e5ff',
          amber:        '#ffd600',
          red:          '#ff4444',
          text:         '#d4f5d4',
        }
      },
      animation: {
        'fade-in':  'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.45s ease-out',
        'blink':    'blink 1.1s step-end infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        blink:   { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
      boxShadow: {
        'terminal':       '0 0 0 1px rgba(0,255,136,0.15), 0 4px 24px rgba(0,255,136,0.05)',
        'terminal-hover': '0 0 0 1px rgba(0,255,136,0.4),  0 8px 32px rgba(0,255,136,0.12)',
        'glow-green':     '0 0 14px rgba(0,255,136,0.45)',
      },
    }
  },
  plugins: []
}
