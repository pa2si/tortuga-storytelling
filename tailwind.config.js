/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxHeight: {
        'screen-30': 'calc(100vh - 15%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'tortuga-light': '#ABD208',
        'tortuga-dark': '#638409',
        linkedin: '#0077B5',
        'erdkugel-text': '#404040',
      },
      fontFamily: {
        text: ['var(--font-playpenSans)', 'sans-serif'],
        title: ['var(--font-indieFlower)', 'sans-serif'],
        kalam: ['var(--font-kalam)', 'sans-serif'],
        abhayaLibre: ['var(--font-abhayaLibre)', 'sans-serif'],
        // Add any additional custom fonts here
      },
    },
  },
  plugins: [],
};
