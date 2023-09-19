/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'card': '1fr minmax(200px, 250px)',
        'tag': 'repeat(3, minmax(80px, 100px))'
      }
    },
    fontSize: {
      'title': '2rem',
      'subtitle': '1.125rem',
    }
  },
  plugins: [],
}
