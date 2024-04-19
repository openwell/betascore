import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
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
        'b-primary-accent': '#EEEFFF',
        // 'b-primary-600': '#050923',
        'b-primary-600': '#0042EC',
        'b-primary-700': '#0031B1',
        'b-primary-900': '#00154A',
        'b-dark-200': '#95A5C5',
        'b-dark-400': '#415377',
        'b-dark-600': '#1B2232',
        'b-dark-800': '#090B10',
        'b-salty-ice': '#CDE3F3',
        'b-salty-ice-200': '#CAD2E2',
        'b-grey-200': '#454745',
        'b-tertiary': '#868685',
        'b-outline': '#D1D1D1',
        'b-purple': '#6E59EA',
        'b-filigree': '#DFE7E8',
        'b-warning': '#E48900',
        'b-light-green': '#ABFF4F',
        'b-light-200-green': '#EDFFDA',
        'b-light-300-green': '#C0FF7B',
        'b-light-400-green': '#EAFFD3',
        'b-light-500-green': '#D5FFA7',
        'b-dark-green': '#4B8F00',
        'b-pale-green': 'rgba(233, 255, 210, 0.15)',
        'b-black-grey': '#586487',
        'b-black-grey-200': '#A7B3D3',
        'b-purple-light': '#5603AD',
        'b-purple-dark': '#8367C7',
        'b-sand': '#FFF1E1',
        'b-orange': '#FE9920',
        'b-purple-light-200': '#E5DBFF',
        'b-purple-light-300': '#C0ACF0',
        'b-grey': '#848484',
        'b-grey-300': '#EBEBEB',
        'b-black-200': '#0A0A0A',
        'b-orange-200': '#FA7921',
        'b-grey-400': '#F8F8F8',
        'b-grey-500': '#F9F9F9',
        'b-grey-600': '#A5A5A5',
        'b-border-grey': '#DCDCDC',
        'b-border-green': '#95DE45',
        'b-border-white': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Aeonik-Regular', ...defaultTheme.fontFamily.sans],
        // clashDisplay: [
        //   'var(--font-clash-display)',
        //   ...defaultTheme.fontFamily.sans,
        // ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none'  /* Firefox */
        }
      });
    }),
  ],
};
export default config;
