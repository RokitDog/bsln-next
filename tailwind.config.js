module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        helveticaNeue: "'Helvetica Neue', serif",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  mode: 'jit',
};
