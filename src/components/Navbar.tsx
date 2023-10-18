import {
	ThemeSwitcher,
	SearchBar,
	UserButton,
	Logo,
	Cart,
	Sidebar,
} from "@/components"

type Props = {}
export default function Navbar({}: Props) {
	return (
		<header className="flex flex-cols">
			<Sidebar />
			<Logo />
			<SearchBar />
			<UserButton />
			<Cart />
			<ThemeSwitcher />
		</header>
	)
}
