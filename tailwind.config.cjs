const { theme } = require('./theme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  prefix: 'tw-',
  content: ['./src/**/*.{html, vue, js, ts, jsx, tsx}'],
  theme: theme,
  plugins: [],
}
