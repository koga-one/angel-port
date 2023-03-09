/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: { prim: "red", light: "white", dark: "black" } },
    fontFamily: {
      mono: "Space Mono",
      grotesk: "Space Grotesk",
    },
  },
  plugins: [],
};
