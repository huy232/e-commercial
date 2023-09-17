import { useEffect } from "react"
import { useRouter } from "next/router"

export const useLanguage = () => {
	const router = useRouter()

	useEffect(() => {
		const preferredLanguage = localStorage.getItem("preferredLanguage")

		if (preferredLanguage) {
			router.replace(`/${preferredLanguage}${router.asPath}`)
		}
	}, [])

	const setLanguage = (language: string) => {
		localStorage.setItem("preferredLanguage", language)
		router.replace(`/${language}${router.asPath}`)
	}

	return { setLanguage }
}
