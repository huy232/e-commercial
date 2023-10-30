"use client"
import { useState, useEffect } from "react"
import { IoReorderThree } from "react-icons/io5"
import classNames from "classnames"
import { usePathname, useSearchParams } from "next/navigation"
import { FaXmark } from "react-icons/fa6"
import { NavItems, SearchBar } from ".."

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

	const show = classNames(isOpen && "block", !isOpen && "hidden")

	return (
		<>
			<div>
				<button
					onClick={openMobileMenu}
					aria-label="Open mobile menu"
					className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden"
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
			</div>
		</>
	)
}

export default Sidebar
