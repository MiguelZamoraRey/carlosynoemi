/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGreen: { 200: '#397374' },
        customPapire: { 200: '#dfdcda' },
      },
    },
  },
  plugins: [],
};
