"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { I18nConfig } from "../i18n"

const i18n = require("../i18n").default as I18nConfig

export default function LocaleSwitcher() {
	const pathName = usePathname()
	const redirectedPathName = (locale: string) => {
		if (!pathName) return "/"
		const segments = pathName.split("/")
		segments[1] = locale
		return segments.join("/")
	}

	return (
		<div>
			<p>Locale switcher:</p>
			<ul>
				{i18n.locales.map((locale) => {
					return (
						<li key={locale}>
							<Link href={redirectedPathName(locale)}>{locale}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
