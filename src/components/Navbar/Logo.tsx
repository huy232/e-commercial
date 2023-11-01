"use client"

import { useLocale } from "next-intl"
import Link from "next/link"
type Props = {}
const Logo = (props: Props) => {
	const locale = useLocale()
	return (
		<div className="flex max-sm:w-full">
			<Link
				href={`/${locale}`}
				className="mr-2 flex w-full items-center justify-center sm:w-auto lg:mr-6"
			>
				<div className="ml-2 flex-none text-sm font-medium uppercase lg:block">
					Witzi
				</div>
			</Link>
		</div>
	)
}
export default Logo
