import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'b-primary-600': '#050923',
        'b-primary-900': '#00154A',
        'b-dark-600': '#1B2232',
        'b-dark-800': '#090B10',
        'b-salty-ice': '#CDE3F3',
        'b-salty-ice-200': '#CAD2E2',
        'b-grey-200': '#454745',
        'b-tertiary': '#868685',
        'b-outline': '#D1D1D1',
        'b-purple': '#6E59EA',
        'b-warning': '#E48900' 
      },
      fontFamily: {
        sans: ['Aeonik-Regular', ...defaultTheme.fontFamily.sans],
        clashDisplay: ['var(--font-clash-display)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
export default config
