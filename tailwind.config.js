
/** @type {import('tailwindcss').Config} */

const  Flowbite  = require('flowbite-react/tailwind');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",Flowbite.content()
  ],
  theme: {
    extend: {},
  },
  plugins: [Flowbite.plugin()],
}

