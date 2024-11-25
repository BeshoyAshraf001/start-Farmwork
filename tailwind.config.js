/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        "2xl": "1260px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
