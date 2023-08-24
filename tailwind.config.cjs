/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			"l-teal": "#0d9488",
			"d-teal": "#2dd4bf",
		},
		extend: {
			fontFamily: {
				sourcecodepro: ['Source Code Pro', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
