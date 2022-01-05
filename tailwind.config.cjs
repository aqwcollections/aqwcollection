const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif']
			},
			colors: {
				base: {
					50: '#ffe6b4',
					100: '#ffe0a1',
					200: '#ffd98d',
					300: '#ffd37a',
					400: '#ffcc66',
					500: '#ffc552',
					600: '#ffbf3f',
					700: '#ffb82b',
					800: '#ffb218',
					900: '#ffab04'
				}
			}
		}
	},
	plugins: []
};

module.exports = config;
