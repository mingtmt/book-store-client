// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'unica-one': ['var(--font-unica-one)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        syne: ['var(--font-syne)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
