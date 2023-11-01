"use client"

import { useTranslations } from "next-intl"
import { locales } from "../i18n"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export default function LocaleSwitcher() {
	const t = useTranslations("LanguageSwitch")
	const languageSwitch = t("language")
	const pathName = usePathname()
	const router = useRouter()
	const initialLocale = pathName.split("/")[1] || "en" // Extract the locale from the URL or default to "en"
	const [currentLocale, setCurrentLocale] = useState(initialLocale) // Use the extracted locale as the initial value

	const redirectedPathName = (locale: string) => {
		if (!pathName) return "/"
		const segments = pathName.split("/")
		segments[1] = locale
		return segments.join("/")
	}

	const handleLocaleChange = (locale: string) => {
		setCurrentLocale(locale) // Update the current locale in the state
		router.push(redirectedPathName(locale))
	}

	return (
		<div>
			<p>{languageSwitch}</p>
			<select
				className="bg-[#0d0d0d]"
				onChange={(e) => handleLocaleChange(e.target.value)}
				defaultValue={currentLocale}
			>
				{locales.map((locale: string) => {
					return (
						<option key={locale} value={locale}>
							{locale}
						</option>
					)
				})}
			</select>
		</div>
	)
}
