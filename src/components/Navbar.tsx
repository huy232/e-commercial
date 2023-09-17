import Link from "next/link"

type Props = {}
export default function Header({}: Props) {
	return (
		<header className="flex flex-cols">
			<div>
				<Link href={`/`}>Logo</Link>
			</div>
			<div>
				<form>
					<input type="text" />
				</form>
			</div>
			<div>LOGIN</div>
		</header>
	)
}
