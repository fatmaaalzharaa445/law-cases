/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: '#C9A96E',
        'brand-light': '#EEE4D2',

        urgent: '#E71E1E',
        'urgent-light': '#F9ECEC',

        active: '#3CCD44',
        'active-light': '#EEFFF1',

        neutral: '#505050',
        'neutral-light': '#EEEEEE',
        ink: '#1A1A1A',
        secondary: '#505050',

        border: '#E8E8E8',

        canvas: '#F5F5F4',
        muted: '#9A9A9A',
        surface: '#FFFFFF',
      },
      borderRadius: {
        card: '16px',
        button: '12px',
      },
    },
  },
  plugins: [],
};
