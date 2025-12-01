/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-blue': '#007AFF',
        'apple-gray': '#1d1d1f',
        'apple-light-gray': '#f5f5f7',
        'apple-dark-gray': '#86868b',
        'apple-purple': '#5856d6',
        'apple-green': '#30d158',
        'apple-orange': '#ff9500',
        'apple-pink': '#ff2d92'
      },
      fontFamily: {
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      },
      maxWidth: {
        '8xl': '88rem'
      }
    },
  },
  plugins: [],
}