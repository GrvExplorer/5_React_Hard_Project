/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Neutral: '#000000',
        Primary: '#ffffff',
        Active: '#ff4602',
      },
    },
  },
  plugins: [],
}