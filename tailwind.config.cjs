/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { 
        sans: 'Roboto, sans-serif', 
        Press: 'Rampart One', 
        inco: 'Inconsolata', 
      },
      colors: {
        blue: {
          666: '#252A57'
        },
      },
      backgroundImage: {
        blitz: 'url(/src/assets/extras/bltzCry.gif)',
        mundo: 'url(/src/assets/extras/mundo.gif)'
      },
      screens: {
        'xs': '480px', // telas pequenas como 1360x768 usam xs–md
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
],
}
