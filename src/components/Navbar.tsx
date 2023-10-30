import {
	ThemeSwitcher,
	SearchBar,
	UserButton,
	Logo,
	Cart,
	Sidebar,
	NavItems,
	OpenCart,
} from "@/components"

type Props = {}
export default function Navbar({}: Props) {
	return (
		<nav className="relative flex items-center justify-between p-4 lg:px-6">
			<div className="block flex-none md:hidden">
				<Sidebar />
			</div>
			<div className="flex w-full items-center">
				<Logo />
				<NavItems className="hidden" />
			</div>
			<div className="hidden justify-center md:flex md:w-1/3">
				<SearchBar />
			</div>
			<div className="flex justify-end md:w-1/3">
				<OpenCart />
			</div>
		</nav>
	)
}
