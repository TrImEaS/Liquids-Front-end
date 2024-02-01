/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.jsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark']
    }
  }
}