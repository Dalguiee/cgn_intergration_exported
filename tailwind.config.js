/** @type {import('tailwindcss').Config} */

const rem0_10 = { ...Array.from(Array(11)).map((_, i) => `${i / 10}px`) };
const rem0_100 = { ...Array.from(Array(101)).map((_, i) => `${i / 10}px`) };
const rem0_200 = { ...Array.from(Array(201)).map((_, i) => `${i / 10}px`) };
const rem0_500 = { ...Array.from(Array(501)).map((_, i) => `${i / 10}px`) };
const rem0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i / 10}px`) };
const rem0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i / 10}px`) };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: rem0_10,
      borderRadius: rem0_1000,
      lineHeight: rem0_100,
      fontSize: rem0_200,
      minWidth: rem0_500,
      minHeight: rem0_500,
      spacing: rem0_2000,
      gap: rem0_2000,
      fontWeight: rem0_100,
      colors: {
        base: {
          white: "#FFFFFF",
          black: "#000000",
        },
        error: {
          red: "#D31437",
        },
        gray: {
          5: "#F7F7F7",
          10: "#E1E1E1",
          20: "#DBDBDB",
          30: "#C1C1C1",
          40: "#BDBDBD",
          50: "#999999",
          60: "#777777",
          70: "#666666",
          80: "#555555",
          90: "#424242",
          95: "#212121",
        },
        primary: {
          5: "#E4E2ED",
          10: "#D1CCE7",
          20: "#B9AEE4",
          30: "#8A73DE",
          40: "#5C38DE",
          50: "#3D14D3",
          60: "#281081",
          70: "#19075C",
          80: "#10043A",
        },
      },
      fontFamily: {
        pretendard: ["Pretendard_regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
