"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import classNames from "classnames"

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const lightMode = `bg-light text-black`
	const darkMode = `bg-dark text-light`

	const themeMode = classNames(
		lightMode,
		darkMode
			.split(" ")
			.map((attribute) => `dark:${attribute}`)
			.join(" ")
	)

	return (
		<button
			className={`px-2 rounded-md duration-200 ${themeMode}`}
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			{theme === "light" ? "Dark" : "Light"}
		</button>
	)
}
