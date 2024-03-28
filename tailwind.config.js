import path from 'path'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require(path.resolve(__dirname, './src/assets/tailwind/tailwind.components'))]
}
