"use client"

import { useTranslations } from "next-intl"

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
	const t = useTranslations("NotFoundPage")
	const title = t("title")
	const description = t("description")

	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
		</>
	)
}
