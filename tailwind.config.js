/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Accent
        "signature-blue": "#535aff",
        "signature-green": "#49dd9f",
        "signature-red": "#ef655f",
        "signature-yellow": "#f9bc15",
        "signature-darkblue": "#462cc6",
        "signature-lightblue": "#e7e8ff",

        // Gray
        gray800: "#090a1a",
        gray700: "#212230",
        gray600: "#14173c",
        gray500: "#292a33",
        gray400: "#51525f",
        gray300: "#667085",
        gray200: "#b0b3b9",
        gray100: "#c9c9c9",
        gray50: "#ededed",
        gray30: "#f6f6f6",
        gray20: "#f9f9f9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        notoSansHK: ["Noto Sans HK", "sans-serif"],
        notoSansKR: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
