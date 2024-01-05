/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      euclid: ["Euclid Flex", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        darkness: "#131019",
        primary: "#fa1e4e",
        section: "#1c1726",
        signature: "#665d78",

        post: "#202020",
        body: "#121212",
        module: "#1c1c1c",
        box: "#242424",
        piece: "#666666",
        font: "#cacaca",
        detail: "#5f5f5e",
        boxborder: "#66777E1A",
        geo: "#ffe787",
      },
    },
  },
  plugins: [],
};
