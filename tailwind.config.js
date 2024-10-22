/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondryColor: "#010A30",
        headingColor:"#102341",
        buttonColor: "#B20000",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(90deg, rgba(255,255,255,1) 35%, rgba(0,212,255,1) 100%);",
        "header-gradient": "linear-gradient(180deg, #455BB1 0%, #010A30 100%);",
        "layer-description-image": "url('/water.png')",
        "layer-signup-image": "url('/signup.png')",
        "input-linear":
          "linear-gradient(180deg, rgba(217, 217, 217, 0) -213.04%, #FFFFFF 103.7%)",
      },
      boxShadow: {
        "custom-shadow": "0px 1px 3px 1px #00000026",
        "custom2-shadow":
          "0px 0.67px 2.02px 0px #0000004D, 0px 2.69px 5.38px 2.02px #00000026",
        "custom3-shadow":
          " 0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D"
      },
    },
  },
  plugins: [],
};
