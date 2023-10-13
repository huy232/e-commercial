import type { Config } from "tailwindcss"
const forms = require("@tailwindcss/forms")

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class"],
	theme: {
		height: {
			navbar: "var(--header-height)",
		},
		extend: {},
	},
	plugins: [forms],
}
export default config
