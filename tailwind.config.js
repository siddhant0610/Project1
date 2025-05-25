/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' if you prefer automatic dark mode
  theme: {
    extend: {
      colors: {
        primaryBg: '#DACFBB',
        primaryAccent: '#4B3869',
        secondaryAccent: '#DDBEC3',
        lightBg: '#FAF8F1',
        textMain: '#3E3E3E',
        highlight: '#CBA135',
      },
    },
  },
  plugins: [],
};
