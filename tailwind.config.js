/**
 * @format
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
      },
      colors: {
        primary: {
          100: "#E6E9EF",
          200: "#B5BDCE",
          300: "#8490AC",
          400: "#53648B",
          500: "#22386B",
          600: "#09225A",
        },
        secondary: {
          100: "#FFF8EA",
          200: "#FFEAC0",
          300: "#FFDC97",
          400: "#FECE6D",
          500: "#FEC043",
          600: "#FEB92E",
        },
        gray: {
          25: "#FAFAFA",
          50: "#EFEFEF",
          100: "#D7D7D7",
          200: "#BABABA",
          300: "#9B9B9B",
          400: "#7E7E7E",
          500: "#616161",
          600: "#525252",
        },
        success: {
          100: "#EBFAF1",
          200: "#C3EFD6",
          300: "#9BE4BB",
          400: "#73D99F",
          500: "#4BCE84",
          600: "#37C976",
        },
        error: {
          100: "#FFEDED",
          200: "#FECACA",
          300: "#FEA7A7",
          400: "#FE8484",
          500: "#FD6261",
          600: "#FD504F",
        },
        third: {
          100: "#EDF5FA",
          200: "#CAE0EF",
          300: "#A7CBE4",
          400: "#84B7DA",
          500: "#61A2CF",
          600: "#4F98CA",
        },
        dark: {
          100: "#2A2D3D",
          200: "#212330",
          300: "#171923",
        },
      },
      boxShadow: {
        CMSHADOW: "4px 4px 20px 0px rgba(0, 0, 0, 0.05)",
        CMSHADOWHover: "4px 4px 20px 0px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  // corePlugins: {
  //   aspectRatio: false,
  // },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
