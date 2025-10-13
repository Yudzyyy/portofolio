/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ini memastikan SEMUA file di dalam 'src' dipindai
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};