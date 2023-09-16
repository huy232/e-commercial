import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`./src/app/messages/${locale}.json}`)).default,
}))
