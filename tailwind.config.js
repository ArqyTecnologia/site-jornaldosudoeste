/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },

      colors:{
        green: {
          100: '#576C4F',
          300: "#9FC093",
        },
        black: {
          800: '#0A0A0A',
        },
        gray: {
          300: '#9B9B9B'
        },
        white: {
          100: '#FCFCFC'
        },
      },
    },
  },
  plugins: [],
}