import Link from "next/link"
type Props = {}
const Logo = (props: Props) => {
	return (
		<div>
			<Link
				href={`/`}
				className="bold uppercase font-black hover:opacity-70 duration-200"
			>
				Witzi
			</Link>
		</div>
	)
}
export default Logo
