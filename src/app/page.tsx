import useTranslation from "next-translate/useTranslation"
import Link from "next/link"

export default function ExamplePage() {
	const { t } = useTranslation("home")

	const content = (
		<>
			<h1 className="text-2xl">{t("welcome")}</h1>
			<div>
				<Link href={"/vi"} locale="vi" className="p-2 mx-2 bg-white/80">
					VI
				</Link>
				<Link href={"/en"} locale="en" className="p-2 mx-2 bg-white/80">
					ENG
				</Link>
			</div>
		</>
	)
	return content
}
