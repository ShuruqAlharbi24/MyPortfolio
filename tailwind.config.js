/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Include all Vue/JS/TS files in src/
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6e44ff', // Purple
        secondary: '#240046', // Dark Gray
        light: '#b892ff', // Light Lavender
        accent: '#ffc2e2', // Accent Purple
      },
    },
  },
  plugins: [],
}
