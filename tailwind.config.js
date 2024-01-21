/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-200": "#ffe600",
        "mygray": "#ededed",
        "gray-950":"#f0f0f0",
        "transparente":"rgba(0,0,0,0.5)",
      },
      margin: {
        "1/2": "40%",
      },
    },
  },
  plugins: [],
};
