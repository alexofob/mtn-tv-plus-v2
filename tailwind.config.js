/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#FFCC00',
        'secondary': '#C4BD47',
        'accent': '#242F63',
        'body': '#FFCC00',
        'grey': '#455163',
        'borderGrey': '#f1f1f1',
        "drawerBg": "#000",
        'black': '#222',
      },
    },
  },
  plugins: [],
}
