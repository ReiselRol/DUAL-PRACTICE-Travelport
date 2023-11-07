/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  purge: [
      './src/Components/**/*.{js,ts,jsx,tsx}',
       "./src/index.jsx"
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

