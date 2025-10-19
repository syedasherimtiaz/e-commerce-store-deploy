/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Olive Green
        'olive': {
          400: '#8B9A46',  // Lighter olive for hovers
          500: '#6B8E23',  // Main olive for buttons/links
          600: '#556B2F',  // Darker olive for focus/hover
        },
        blue: {
          450: '#60A5FA',  // Lighter blue for subtle accents if needed
        },

        // Custom Beige
        'beige': {
          100: '#F8F4E6',  // Very light beige for subtle highlights
          700: '#D2B48C',  // Warm beige for inputs/backgrounds (dark mode friendly)
          800: '#A89B7E',  // Darker beige for form container
        },
      },
    },
  },
  plugins: [],
}

