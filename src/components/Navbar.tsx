import { ThemeSwitcher, SearchBar, UserButton, Logo, Cart } from "@/components"

type Props = {}
export default function Navbar({}: Props) {
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
