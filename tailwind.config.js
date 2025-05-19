/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-border-grey": "#bebebe",
        "custom-blue": "#038FEF",
        "custom-orange": "#038FEF",
        "custom-emerald": "#038FEF",
        "custom-red": "#038FEF",
      },
    },
  },
  plugins: [],
};
