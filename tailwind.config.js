/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,svelte,ts,module.css}', 'node_modules/daisyui/dist/**/*.js'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: ['aqua']
	},
	plugins: [require('daisyui'), 'prettier-plugin-tailwindcss']
}
