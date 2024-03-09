import animations from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
			  },
			  screens: {
				'xs': '470px',
			  },
			  colors: {
				'primary': '#000000', //Ahumado
				'primary-contrast': '#222223', //Negro Neutro
				'secondary': '#fff',
				'neutral': '#1A1A1A',
			  }
		},
	},
	plugins: [
		animations,
		({ addComponents }) => {
			addComponents({
				".cp-v":{
					clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 50% 100%, 0 85%)",
				}
			})
		}
	],
}
