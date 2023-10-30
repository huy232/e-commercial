import Link from "next/link"
type Props = {}
const Logo = (props: Props) => {
	return (
		<div className="flex w-full md:w-1/3">
			<Link
				href="/"
				className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
			>
				<div className="ml-2 flex-none text-sm font-medium uppercase lg:block">
					Witzi
				</div>
			</Link>
		</div>
	)
}
export default Logo
