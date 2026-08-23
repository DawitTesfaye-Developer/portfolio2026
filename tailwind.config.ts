import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf3ee',
          100: '#fbe4d8',
          200: '#f5c5af',
          300: '#cf8f72',
          400: '#cf8f72',
          500: '#bf6a45',
          600: '#a35234',
          700: '#8a3f28',
          800: '#6e321f',
          900: '#5a2a1b',
          950: '#32150d'
        },
        edtech: { 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb' },
        sysadmin: { 400: '#34d399', 500: '#10b981', 600: '#059669' },
        ink: { 800: '#1e1e1e', 900: '#111111', 950: '#0a0a0a' }
      },
      fontFamily: {
        sans: ['var(--font-grotesk)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      letterSpacing: { tightest: '-0.05em' }
    }
  },
  plugins: []
};

export default config;
