"use client"

import classNames from "classnames"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { HiMagnifyingGlass } from "react-icons/hi2"

const SearchBar = () => {
	const t = useTranslations("LoginPage")
	const translation = t("searchPlaceholder")
	const [isInputVisible, setInputVisible] = useState(false)

	const toggleInput = () => {
		setInputVisible(!isInputVisible)
	}

	const searchBarClass = classNames(
		"placeholder-italic placeholder-text-slate-400 dark:bg-[#52525b] outline-none block border border-transparent rounded-full shadow-sm focus:border-yellow-900 focus:ring-yellow-900 focus:ring-1 text-xs duration-200 h-[30px]",
		isInputVisible ? "w-full pl-7" : "w-0 pl-0 pr-0 border-0"
	)
	const searchBarIcon = classNames(
		`text-slate-500 cursor-pointer duration-200 mx-2`,
		isInputVisible ? "opacity-100 text-white" : "opacity-70"
	)

	return (
		<div className="relative mx-4">
			<span className="absolute inset-y-0 left-0 flex items-center">
				<HiMagnifyingGlass className={searchBarIcon} onClick={toggleInput} />
			</span>
			<input
				className={searchBarClass}
				style={{
					transition: "width 0.5s ease-in-out, padding 0.5s ease-in-out",
				}}
				placeholder={translation}
				type="text"
				name="search"
			/>
		</div>
	)
}

export default SearchBar
