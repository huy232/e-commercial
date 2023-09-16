import "server-only"

type Dictionaries = {
	[key: string]: () => Promise<{ Index: { title: string } }>
}

const dictionaries: Dictionaries = {
	en: () =>
		import("@/app/dictionaries/en.json").then((module) => module.default),
	vi: () =>
		import("@/app/dictionaries/vi.json").then((module) => module.default),
}

export const getDictionary = async (locale: keyof Dictionaries) =>
	dictionaries[locale]()
