/** @type {import('tailwindcss').Config} */
export default {
    content: ['./*.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  darkMode: 'class', // ✅ Add this line to enable class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [],
};
