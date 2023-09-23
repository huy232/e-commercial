import { getRequestConfig } from "next-intl/server"

export interface I18nConfig {
	locales: string[]
	messages: Record<string, Record<string, string>>
}

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`../dictionaries/${locale}.json`)).default,
}))
