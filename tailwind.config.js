/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lapis-blue': '#3480b1',
        'lapis-dark': '#1a1a1a',
        'lapis-light': '#f4f4f4',
      },
      fontFamily: {
        sans: ['"Marcellus SC"', 'serif'],
      },
    },
  },
  plugins: [],
};
