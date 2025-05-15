/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iran: {
          green: '#239F40',
          red: '#DA0000',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        'vazir': ['Vazirmatn', 'sans-serif'],
        'nastaliq': ['Noto Naskh Arabic', 'serif'],
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
