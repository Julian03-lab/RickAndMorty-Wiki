/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'signika' : ['Signika Negative', 'sans-serif']
      }
    },
  },
  plugins: [],
}