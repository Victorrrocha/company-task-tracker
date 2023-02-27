/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#60a5fa'
        },
        secondary: {
          DEFAULT: '#5b21b6'
        }
      }
    },
  },
  plugins: [],
}
