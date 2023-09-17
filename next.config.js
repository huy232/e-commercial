const nextTranslate = require("next-translate-plugin")

/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		defaultLocale: "en",
		locales: ["en", "vi"],
	},
}

module.exports = nextTranslate(nextConfig)
