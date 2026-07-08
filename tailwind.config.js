/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cu-gold': '#CFB87C',
        'cu-gold-light': '#E2D09A',
        'cu-gold-dark': '#A89050',
        primary: {
          50: '#fffdf0',
          100: '#fdf8d9',
          200: '#faf0a8',
          300: '#f5e571',
          400: '#edd93e',
          500: '#CFB87C',
          600: '#A89050',
          700: '#8a7340',
          800: '#6b5930',
          900: '#4a3d20',
          950: '#2a2210',
        },
        blueprint: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Zinc palette - pure neutral, no blue tint (replaces Slate)
        // Original Slate saved: 50:#f8fafc 100:#f1f5f9 200:#e2e8f0 300:#cbd5e1
        //   400:#94a3b8 500:#64748b 600:#475569 700:#334155 800:#1e293b 900:#0f172a 950:#090d16
        dark: {
          50:  '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'gradient':   'gradient 8s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow':  'spin 12s linear infinite',
        'marquee':    'marquee 20s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
    },
  },
  plugins: [],
}
