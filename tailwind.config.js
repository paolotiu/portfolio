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
        'accent-dark': '#256DB1',
        'light-black': '#0a090a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
