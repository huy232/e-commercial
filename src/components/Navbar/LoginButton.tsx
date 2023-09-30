import Link from "next/link"
import { BiLogInCircle } from "react-icons/bi"

type Props = {
	translate: string
}

const LoginButton = ({ translate }: Props) => {
	return (
		<Link
			href={"/login"}
			className="flex flex-cols items-center hover:opacity-70 duration-200 bg-green-500 dark:bg-yellow-500 p-1 rounded mx-2"
		>
			<BiLogInCircle className="mr-1" />
			<p>{translate}</p>
		</Link>
	)
}

export default LoginButton
