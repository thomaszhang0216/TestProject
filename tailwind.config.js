/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-white-100": "#fff",
        gray: "rgba(0, 0, 0, 0.1)",
        "gullwing-gullwing-9": "#292b36",
        "black-black-40": "rgba(0, 0, 0, 0.4)",
        "gullwing-gullwing-4": "#a8a9ae",
        "glacier-glacier-6": "#1e9bf0",
        "gullwing-gullwing-1": "#f4f5f6",
      },
      spacing: {},
      fontFamily: {
        "caption-1-medium": "Gelion",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      mid: "17px",
      lgi: "19px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
