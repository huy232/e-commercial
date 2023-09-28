import Link from "next/link"
import { useTranslations } from "next-intl"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import SearchBar from "./SearchBar"
import UserButton from "./UserButton"

type Props = {}
export default function Header({}: Props) {
	const t = useTranslations("LoginPage")

	return (
		<header className="flex flex-cols justify-between items-center h-[60px] w-full">
			<div>
				<Link
					href={`/`}
					className="bold uppercase font-black hover:opacity-70 duration-200"
				>
					Witzi
				</Link>
			</div>
			<div className="">
				<SearchBar translation={t("searchPlaceholder")} />
			</div>
			<div className="flex items-center">
				<ThemeSwitcher />
				<UserButton />
			</div>
		</header>
	)
}
