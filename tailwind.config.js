/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#6366f1', // Indigo 500
        secondary: '#818cf8', // Indigo 400
        accent: '#a5b4fc', // Indigo 300
      },
    },
  },
  plugins: [],
}
