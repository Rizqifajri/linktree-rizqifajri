/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'east-bay': {
          '50': '#f5f6fa',
          '100': '#eaedf4',
          '200': '#d1d9e6',
          '300': '#a9b7d0',
          '400': '#7b91b5',
          '500': '#5a749d',
          '600': '#465b81',
          '700': '#3a4a6a',
          '800': '#334059',
          '900': '#2e384c',
          '950': '#1f2432',
      },
      
      }
    },
  },
  plugins: [],
}