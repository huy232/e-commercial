"use client"
import { useState, useEffect } from "react"
import { IoReorderThree } from "react-icons/io5"
import classNames from "classnames"
import { usePathname, useSearchParams } from "next/navigation"
import { FaXmark } from "react-icons/fa6"
import {
	NavItems,
	SearchBar,
	ThemeSwitcher,
	User,
	UserButton,
} from "@/components"

type Props = {}

const Sidebar = (props: Props) => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [isOpen, setIsOpen] = useState(false)
	const openMobileMenu = () => setIsOpen(true)
	const closeMobileMenu = () => setIsOpen(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsOpen(false)
			}
		}
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [isOpen])

	useEffect(() => {
		setIsOpen(false)
	}, [pathname, searchParams])

	const show = classNames(
		"duration-500 ease-in-out",
		isOpen && "block fixed left-0 top-0 z-10 w-full h-[100vh] bg-stone-950 p-6",
		!isOpen && "block fixed left-[-100%]"
	)

	return (
		<>
			<div>
				<button
					onClick={openMobileMenu}
					aria-label="Open mobile menu"
					className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white sm:hidden"
				>
					<IoReorderThree className="h-4" />
				</button>
			</div>
			<div className={show}>
				<button
					className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
					onClick={closeMobileMenu}
					aria-label="Close mobile menu"
				>
					<FaXmark className="h-6" />
				</button>

				<div className="mb-4 w-full">
					<SearchBar />
				</div>
				<NavItems className={"block"} />
				<div className="absolute bottom-0 pb-4 border-solid border-t-[2px]">
					<ThemeSwitcher />
					<UserButton isMobile={true} />
				</div>
			</div>
		</>
	)
}

export default Sidebar
