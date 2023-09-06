/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'salt-box': {
          '50': '#f7f7f8',
          '100': '#efeef0',
          '200': '#dbd9de',
          '300': '#bbb9c0',
          '400': '#97929e',
          '500': '#7a7582',
          '600': '#6a6572',
          '700': '#514d57',
          '800': '#45424a',
          '900': '#3c3a40',
          '950': '#28262b',
      },
      
      
      }
    },
  },
  plugins: [],
}