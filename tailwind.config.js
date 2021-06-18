const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  // purge: [{ purge: false }],
  purge: false,
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
