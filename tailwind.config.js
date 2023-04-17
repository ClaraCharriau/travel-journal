/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'lora': ['Lora', 'serif'],
    },
    extend: {
      colors: {
        'orange': '#C96B41',
        'beige': '#EEDFD4',
      },
    },
  },
  plugins: [],
}