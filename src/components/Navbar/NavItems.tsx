import { useTranslations } from "next-intl"
import Link from "next/link"
import classNames from "classnames"

export const NavItems = ({ className }: { className?: string }) => {
	const t = useTranslations("NavItems")
	const navItemsClass = classNames(
		"gap-6 text-sm md:flex md:items-center",
		className
	)
	const navItems = [
		{
			label: t("all"),
			href: "/search",
		},
		{
			label: t("shirts"),
			href: "/search/shirts",
		},
		{
			label: t("pants"),
			href: "/search/pants",
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
