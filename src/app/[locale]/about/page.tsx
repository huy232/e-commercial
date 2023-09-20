"use client"

import { useTranslations } from "next-intl"

export default function AboutPage() {
	const t = useTranslations("AboutPage")
	const title = t("title")
	const description = t("description")

	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
}
