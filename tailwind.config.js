const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        subtext: '#A9A8A8',
        accent: '#3c8bd6',
        'accent-light': '#5FA0DD',
        'accent-dark': '#256DB1',
        'light-black': '#0a090a',
        teal: colors.teal,
        sky: colors.sky,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
