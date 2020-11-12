/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");
// import defaultTheme from '"tailwindcss/defaultTheme"';
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./public/**/*.html", "./src/**/*.vue"], // 사용하지 않는 class들을 날려버린다.
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      width: {
        "1024": "1024px",
      },
    },
  },
  variants: {},
  plugins: [],
  spacing: {
    "1024": "1024px",
    // md: '16px',
    // lg: '24px',
    // xl: '48px',
    // 8: '8px',
    // 9: '9px',
    // 10: '10px',
    // 12: '12px',
    // 14: '14px',
    // 15: '15px',
    // 16: '16px',
    // 18: '18px',
  },
};
