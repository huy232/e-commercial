"use client"
import React, { useEffect } from "react"
import { useTheme } from "next-themes"
import classNames from "classnames"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light"
		localStorage.setItem("theme", newTheme)
		setTheme(newTheme)
	}

	const lightMode = "text-green-500"
	const darkMode = "dark:text-yellow-500"

	const themeMode = classNames(
		"flex items-center justify-center border border-solid rounded-full border-green-500 dark:border-yellow-500 hover:border-transparent hover:opacity-80 m-2 duration-200 h-[40px] w-[40px]",
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
		<button className={` ${themeMode}`} onClick={toggleTheme}>
			{theme === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
		</button>
	)
}
