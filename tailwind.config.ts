import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/[object Object].js',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        regarn: ['Regarn', 'sans-serif'],
      },
      colors: {
        'ord-sky': '#05a4bb',
        'ord-pink': '#FF3366',
        'ord-green': '#2EC4B6',
        'ord-blue': '#20A4F3',
        'ord-dark-blue': '#011627',
        'ord-semi-dark-blue': '#073250',
        'shade-10': '#EFF1F2',
        'shade-20': '#D2D6DA',
        'shade-30': '#B8BEC3',
        'shade-40': '#A0A8AF',
        'shade-50': '#869099',
        'shade-60': '#707C86',
        'shade-70': '#566470',
        'shade-80': '#3E4E5B',
        'shade-90': '#253746',
        'shade-95': '#102434',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
