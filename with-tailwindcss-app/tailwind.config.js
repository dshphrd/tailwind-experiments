const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      neutral: colors.neutral,
      red: colors.red,
      amber: colors.amber,
      orange: colors.orange,
      teal: colors.teal,
      indigo: colors.indigo,
      'blue': {
        50: '#F6F8FC',  //blue-5
        100: '#E5EAF8', //blue-15
        200: '#C9D4F0', //blue-30
        300: '#94AAE2', //blue-60
        400: '#718ED8', //blue-80
        500: '#5679D1', //blue-90
        600: '#4D72CE', //blue
        700: '#4368C4', //blue-110
        800: '#2B53B4', //blue-120
      },
      'green': {
        50: '#F5FCFA',  //green-5
        100: '#E1F8F0', //green-15
        200: '#C2F0E0', //green-30
        300: '#86E2C2', //green-60
        400: '#5DD8AD', //green-80
        500: '#49D2A3', //green-90
        600: '#35ce99', //green
        700: '#2BC48F', //green-110
        800: '#2AA47A', //green-120
      },
      'purple': {
        50: '#F8F6FC',  //purple-5
        100: '#ECE6F7', //purple-15
        200: '#D9CCEE', //purple-30
        300: '#B39BDF', //purple-60
        400: '#9A79D4', //purple-80
        500: '#8861CC', //purple-90
        600: '#8158C9', //purple
        700: '#774EBF', //purple-110
        800: '#6439AF', //purple-120
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}