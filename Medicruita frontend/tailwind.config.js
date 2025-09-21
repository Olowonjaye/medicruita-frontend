/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      fontSize: {
        'custom-40': "40px"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
