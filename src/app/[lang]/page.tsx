import { getDictionary } from "./dictionaries"

type Props = {
	params: { lang: string }
}

export default async function Home({ params: { lang } }: Props) {
	const dict = await getDictionary(lang) // en
	return <button>{dict.Index.title}</button>
}
