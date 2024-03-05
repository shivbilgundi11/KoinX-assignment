/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': '#0052FE',
      'white': '#fff',
      'black': '#000',
      'gray-light-bg': '#eff2f5',
      'profit': '#ebf9f4',
      'loss': '##fdf0ee',
      'success': '##14b079',
      'danger': '#e96975',
      'gray': '##768396',
      'light-blue': '#e8f4fd',
      'warning': '#faa002',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
