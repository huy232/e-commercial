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
			<div className="block flex-none sm:hidden">
				<Sidebar />
			</div>
			<div className="flex w-full items-center sm:w-auto">
				<Logo />
				<NavItems className="hidden" />
			</div>
			<div className="hidden justify-center sm:flex sm:w-auto">
				<SearchBar />
			</div>
			<div className="flex justify-end sm:w-1/3">
				<div className="hidden sm:block">
					<UserButton />
				</div>
				<OpenCart />
			</div>
		</nav>
	)
}
