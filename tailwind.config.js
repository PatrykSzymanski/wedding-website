/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'great-vibes': ['"Great Vibes"', 'cursive']
      },
      animation: {
        'slideDown': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        }
      },
    },
  },
  plugins: [],
}
