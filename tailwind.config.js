/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#061A2E',
          900: '#0B2545',
          800: '#123A63',
          700: '#1B4E82',
        },
        sky: {
          50: '#F0F8FC',
          100: '#DCEEF8',
          400: '#4FA3D1',
        },
        teal: {
          500: '#1D8A72',
          600: '#166F5C',
        },
        saffron: {
          500: '#E8934A',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(11,37,69,0.06), 0 4px 16px rgba(11,37,69,0.06)',
      },
    },
  },
  plugins: [],
}
