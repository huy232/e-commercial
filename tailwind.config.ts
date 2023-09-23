import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class"],
	theme: {
		extend: {
			backgroundColor: {
				light: "#fffada",
				dark: "#252933",
			},
			textColor: {
				light: "#000000",
				dark: "#fbfcfa",
			},
		},
	},
	plugins: [],
}
export default config
