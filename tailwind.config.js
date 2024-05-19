/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,svelte,ts,module.css}', 'node_modules/daisyui/dist/**/*.js'],
	theme: {
		extend: {
			colors: {
				lightGrey: "#f2f1ef",
				sitePurple: "#8537b7",
				sitePink: "#b76387",
				success: "#00F00",
				facebook: "#1877f2",
				twitter: "#1da1f2",
				youtube: "#ff0000",
				instagram: "#c32aa3",
				whatsapp: "#25d366",
				telegram: "#0088cc",
				linkedin: "#0e76a8",
			},
		},
	},
	daisyui: {
		themes: ['light', 'dark']
	},
	plugins: [require('daisyui'), 'prettier-plugin-tailwindcss']
}
