module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "open-sans": ['"Open Sans"'],
      lato: ['"Lato"'],
      "noto-sans": ['"Noto Sans"'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
