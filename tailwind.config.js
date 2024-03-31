/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js.jsx,tsx,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Jost: ['Jost' , 'roboto']
      }
    },
  },
  plugins: [],
}