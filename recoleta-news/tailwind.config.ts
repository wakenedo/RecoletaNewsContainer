import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        recoleta_analog_green: '#A6FA7E',
        recoleta_analog_blue: '#7EE3FA',
        recoleta_analog_orange: '#FF9A51',

        recoleta_primary_green: '#84F84D',
        recoleta_primary_blue: '#4DD8F8',
        recoleta_primary_orange: '#FF7C1E',

        recoleta_secondary_green: '#62F61C',
        recoleta_secondary_blue: '#1CCDF6',
        recoleta_secondary_orange: '#EA6200',

        recoleta_tertiary_green: '#4BD609',
        recoleta_tertiary_blue: '#09B0D6',
        recoleta_tertiary_orange: '#DB5C00',

        recoleta_quaternary_green: '#1f6300',
        recoleta_quaternary_blue: '#005265',
        recoleta_quaternary_orange: '#5d2700',

        recoleta_light_gray: '#F6F6F6',
        recoleta_medium_gray: '#B7B7B7',
        recoleta_dark_gray: '#5C5C5C',
        recoleta_darkest_gray: '#2a2a2a',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Custom sans font
        serif: ['Roboto Slab', 'serif'], // Custom serif font
      },
      fontSize: {
        'caption-default': 'var(--caption-default)',
        'caption-small': 'var(--caption-small)',

        'body-small': 'var(--body-small)',
        'body-default': 'var(--body-default)',
        'body-large': 'var(--body-large)',

        'heading-small': 'var(--heading-small)',
        'heading-default': 'var(--heading-default)',
        'heading-large': 'var(--heading-large)',
      },
      fontWeight: {
        'bold-xl': 'var(--font-bold-xl)',
        'bold-lg': 'var(--font-bold-lg)',
        regular: 'var(--font-regular)',
        light: 'var(--font-light)',
        lighter: 'var(--font-lighter)',
      },
    },
  },
  plugins: [],
};
export default config;
