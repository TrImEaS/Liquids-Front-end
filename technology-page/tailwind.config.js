/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    './index.html',
    './src/**/*.jsx'],
  theme: {
    extend: {
      colors:{
        marine:{
          100: '#05345b',
          200: '#042e51',
          300: '#042948',
          400: '#03243f',
          500: '#031f36',
        },

        hover:{
          primary: ''
        }
      }
    },
  },
  plugins: [],
}

