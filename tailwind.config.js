module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    fontFamily: {
      'open-sans': ['"Open Sans"'],
      lato: ['"Lato"'],
      'noto-sans': ['"Noto Sans"']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
