/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'orange': '#C96B41',
      'beige': '#EEDFD4',
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'lora': ['Lora', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}