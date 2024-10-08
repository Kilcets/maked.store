/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
      extend: {
        colors: {
          'custom-dark': '#0f0f0f',
        }
      },
    },
    plugins: [],
  }