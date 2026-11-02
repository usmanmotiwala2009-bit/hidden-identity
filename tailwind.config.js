/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          offwhite: '#F9F8F6',
          charcoal: '#1A1A1A',
          beige: '#C5B9AC',
        },
      },
      fontFamily: {
        editorial: ['Georgia', 'serif'],
        modern: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
