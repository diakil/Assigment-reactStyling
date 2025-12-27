/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
  extend: {
    colors: {
      "background-light": "#fcfaf8",
      "background-dark": "#1b140d",
      primary: "#b45309"
    },
  },
},

  plugins: [],
}
