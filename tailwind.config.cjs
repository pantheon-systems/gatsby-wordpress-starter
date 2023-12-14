const { tailwindcssPlugin } = require('@pantheon-systems/wordpress-kit');


/** @type {import('@pantheon-systems/wordpress-kit').TailwindcssConfig} */
module.exports = {
	content: [
		'./src/{pages,components,templates}/**/*.{jsx,tsx}'
	],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), tailwindcssPlugin],
};
