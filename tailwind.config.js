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
          "primary-1": "#05949b",
          "dark-1": "#393E46",
          "dark-2": "#222831",
          "dark-3": "#9ca3af",
          light: "#EEEEEE",
        },
      },
    },
  },
  plugins: [],
};
