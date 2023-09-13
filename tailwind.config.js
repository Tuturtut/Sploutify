/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    colors: {
      'black': '#121212',
      'dark-gray': '#212121'
    },
    extend: {
      fontFamily: {
        'gotham-black': ['Gotham-Black', 'sans'],
        'gotham-bold': ['Gotham-Bold', 'sans'],
        'gotham-book-italic': ['GothamBookItalic', 'sans'],
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

