module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },
      fontFamily: {
        'poppins':['poppins', 'sans']
      },
    },
  },
  plugins: [],
}