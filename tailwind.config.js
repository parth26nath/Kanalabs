/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#14B8A6',
        success: '#10B981',
        danger: '#EF4444',
        warning: '#F59E0B',
        dark: {
          bg: '#0A0A0B',
          card: '#1A1A1B',
          border: '#2D2D30',
        },
        light: {
          bg: '#FFFFFF',
          card: '#F8FAFC',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        'sans': ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}