/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    colors: {
      'black': '#121212',
      'dark-gray': '#212121',
      'green': '#1db954'
    },

    fontFamily: {
      'gotham-bold': ['Gotham-bold', 'sans'],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

