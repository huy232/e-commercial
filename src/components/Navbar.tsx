import { useTranslations } from "next-intl"
import { ThemeSwitcher } from "@/components/Navbar/ThemeSwitcher"
import SearchBar from "./Navbar/SearchBar"
import UserButton from "./Navbar/UserButton"
import Logo from "./Navbar/Logo"
import Cart from "./Navbar/Cart"

type Props = {}
export default function Header({}: Props) {
	return (
		<header className="flex flex-cols justify-between items-center h-navbar w-full">
			<div className="flex items-center">
				<Logo />
				<SearchBar />
			</div>
			<div className="flex items-center">
				<UserButton />
				<Cart />
				<ThemeSwitcher />
			</div>
		</header>
	)
}
