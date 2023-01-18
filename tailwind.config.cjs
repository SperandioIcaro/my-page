/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: { 
        sans: 'Roboto, sans-serif', 
        Press: 'Rampart One', 
        inco: 'Inconsolata', 
      },
    },
  },
  plugins: [],
}
