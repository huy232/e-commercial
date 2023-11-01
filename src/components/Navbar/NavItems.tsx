"use client"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"
import classNames from "classnames"

export const NavItems = ({ className }: { className?: string }) => {
	const locale = useLocale()
	const t = useTranslations("NavItems")
	const navItemsClass = classNames(
		"px-2 gap-4 text-sm sm:flex sm:items-center",
		className
	)
	const navItems = [
		{
			label: t("all"),
			href: `/${locale}/search`,
		},
		{
			label: t("shirts"),
			href: `/${locale}/search/shirts`,
		},
		{
			label: t("pants"),
			href: `/${locale}/search/pants`,
		},
	]
	return (
		<ul className={navItemsClass}>
			{navItems.map((item, index) => (
				<li key={index}>
					<Link
						href={item.href}
						className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
					>
						{item.label}
					</Link>
				</li>
			))}
		</ul>
	)
}
