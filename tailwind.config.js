/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        color: {
          primary: "#00ADB5",
          "dark-1": "#393E46",
          "dark-2": "#222831",
          light: "#EEEEEE",
        },
      },
    },
  },
  plugins: [],
};
