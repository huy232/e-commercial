import { getDictionary } from "../../../get-dictionary"
import { Locale } from "../../../i18n-config"
import LocaleSwitcher from "@/components/LocaleSwitcher"

export default async function ExamplePage({
	params: { lang },
}: {
	params: { lang: Locale }
}) {
	const dictionary = await getDictionary(lang)

	const content = (
		<>
			<h1 className="text-2xl">{dictionary.welcome}</h1>
			<LocaleSwitcher />
		</>
	)
	return content
}
