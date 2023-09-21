import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"
import { ReactNode } from "react"
import { useLocale } from "next-intl"

import Navbar from "@/components/Navbar"

export function generateStaticParams() {
	return [{ locale: "en" }, { locale: "de" }]
}

export default async function LocaleLayout({
	children,
	params: { locale },
}: {
	children: ReactNode
	params: { locale: string }
}) {
	const localeNext = useLocale()
	let messages
	// Validate that the incoming `locale` parameter is a valid locale
	if (locale !== localeNext) {
		notFound()
	}
	try {
		messages = (await import(`../../../dictionaries/${locale}.json`)).default
	} catch (error) {
		notFound()
	}

	return (
		<html lang={localeNext}>
			<body>
				<NextIntlClientProvider locale={localeNext} messages={messages}>
					<Navbar />
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
