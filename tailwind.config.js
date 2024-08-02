/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#fff0f2',
          '100': '#ffe1e7',
          '200': '#ffc8d4',
          '300': '#ff9bb2',
          '400': '#ff638b',
          '500': '#ff2c67',
          '600': '#f60854',
          '700': '#e0004d',
          '800': '#ae0343',
          '900': '#940740',
          '950': '#53001e',
        }
      }
    },
  },
  plugins: [],
}

