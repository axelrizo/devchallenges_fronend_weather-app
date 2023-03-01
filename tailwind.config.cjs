/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-dark-blue': '#1E213A',
        'background-dark-blue-2': '#100E1D'
      }
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif']
    }
  },
  plugins: [],
}
