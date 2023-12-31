"use client"
import { useEffect } from "react"
import { useTheme } from "next-themes"
import classNames from "classnames"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { useTranslations } from "next-intl"

const ThemeSwitcher = () => {
	const t = useTranslations("Sidebar")
	const themeTranslate = t("themeSwitch")
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light"
		localStorage.setItem("theme", newTheme)
		setTheme(newTheme)
	}

	const lightMode = "text-green-500"
	const darkMode = "dark:text-yellow-500"

	const themeMode = classNames(
		"flex items-center justify-center border border-solid rounded-full border-green-500 dark:border-yellow-500 hover:border-transparent hover:opacity-80 duration-200 h-full p-1 my-2",
		lightMode,
		darkMode
	)

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme")
		if (!savedTheme) {
			const prefersDarkMode = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches
			const defaultTheme = prefersDarkMode ? "dark" : "light"
			localStorage.setItem("theme", defaultTheme)
			setTheme(defaultTheme)
		}
	}, [setTheme])

	return (
		<button className={themeMode} onClick={toggleTheme}>
			<p className="mr-2">{themeTranslate}</p>
			{theme === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
		</button>
	)
}

export default ThemeSwitcher
