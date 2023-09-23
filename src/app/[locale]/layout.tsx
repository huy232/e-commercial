import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"
import { ReactNode } from "react"
import { useLocale } from "next-intl"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./theme-provider"
import { switchThemeDuration } from "@/constant/"
import classNames from "classnames"

import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

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

	const theme = classNames(`bg-var(--background) text-var(--primary)`)

	return (
		<html lang={localeNext}>
			<body
				className={`${inter.className} ${theme} ${switchThemeDuration} min-h-screen`}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<NextIntlClientProvider locale={localeNext} messages={messages}>
						<Navbar />
						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
