/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
     flowbite,
  ],
}

