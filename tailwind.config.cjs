/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      primary: "#303138",
      secondary: "#262833",
      tertiary: {
        normal: "#800080",
        hover: "#800080aa"
      },
      fourth: {
        normal: "#4682b4",
        hover: "#4682b4aa"
      },
      light: "#f0f8ff",
      dark: "#111111"
    },
    fontSize: {
      small: ".8rem",
      regular: "1rem",
      big: "1.2rem",
      title: "2rem"
    },
    borderRadius: {
      radius: "5px"
    },
    boxShadow: {
      shadow: "#00000029 0 3px 6px, #0000003b 0 3px 6px"
    },
    label: "text-light flex flex-col text-big gap-2"
  },
  plugins: [],
}
