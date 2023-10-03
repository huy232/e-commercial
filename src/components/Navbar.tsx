import { useTranslations } from "next-intl"
import { ThemeSwitcher } from "@/components/Navbar/ThemeSwitcher"
import SearchBar from "./Navbar/SearchBar"
import UserButton from "./Navbar/UserButton"
import Logo from "./Navbar/Logo"
import Cart from "./Navbar/Cart"

type Props = {}
export default function Header({}: Props) {
	const t = useTranslations("LoginPage")

	return (
		<header className="flex flex-cols justify-between items-center h-var(--header-height) w-full">
			<Logo />
			<SearchBar translation={t("searchPlaceholder")} />
			<div className="flex items-center">
				<Cart />
				<UserButton />
				<ThemeSwitcher />
			</div>
		</header>
	)
}
