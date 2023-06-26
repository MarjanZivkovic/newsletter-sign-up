/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '2xl': '0 10px 10px rgba(255, 98, 87, 0.5)'
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    colors: {
      purple:'#ff537b',
      tomato : 'hsl(4, 100%, 67%)',
      lightTomato: 'rgba(255, 98, 87, 0.2)',
      darkGray: 'hsl(234, 29%, 20%)',
      charcoalGray: 'hsl(235, 18%, 26%)',
      justGray: 'hsl(231, 7%, 60%)',
      white: '#fff',
    },
  },
  plugins: [],
}
