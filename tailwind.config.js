/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)' },
      },
      colors: {
        federal: 'var(--federal)',
        polynesian: 'var(--polynesian)',
        celestial: 'var(--celestial)',
        seasalt: 'var(--seasalt)',
        ashblack: 'var(--ashblack)',
        sunrise: 'var(--sunrise)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.section-min-height': {
          'min-height': 'calc(100vh - 68px)',
        },
      }, ['responsive']);
    },
  ],
};

