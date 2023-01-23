/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', 
    './node_modules/flowbite/**/*.js',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': '#027b5b',
      'primary-light': '#BBF7D0',
      'secondary': '#edcd2a',
      'secondary-light': '#FEF9C3',
      'tertiary': '#f78f12',
      'lime': '#88c540',
    }
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin'),
    require('tailwind-scrollbar'),
    require('tw-elements/dist/plugin'),
  ],
}