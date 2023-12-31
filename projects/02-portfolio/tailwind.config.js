/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'card': 'minmax(200px, 250px) 1fr',
        'tag': 'repeat(auto-fit, minmax(80px, 140px))'
      }
    },
    fontSize: {
      'title': '2rem',
      'subtitle': '1.4rem',
      'normal': '1.2rem',
      'tag': '.7rem',
    }
  },
  plugins: [],
}
