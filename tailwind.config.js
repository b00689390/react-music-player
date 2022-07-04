/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
			heading: ["'Anek Latin'", "sans-serif"],
			body: ["'Poppins'", "sans-serif"],
			source: ["'Source Code Pro'", "monospace"],
		},
    extend: {},
  },
  plugins: [
		require('@tailwindcss/aspect-ratio'),
  ],
}
