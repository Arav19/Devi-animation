/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'twinkle': 'twinkle 3s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        gold: {
          light: '#FFD700',
          DEFAULT: '#FDB931',
          dark: '#B8860B',
        },
      },
    },
  },
  plugins: [],
};