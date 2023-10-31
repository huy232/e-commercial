import classNames from "classnames"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { BiLogInCircle } from "react-icons/bi"

type Props = {
	translate: string
	isMobile?: boolean
}

const LoginButton = ({ translate, isMobile }: Props) => {
	const t = useTranslations("Sidebar")
	const login = t("login")
	const loginClass = classNames(
		isMobile && "block",
		!isMobile && "hidden",
		"md:block px-1 text-sm"
	)
	return (
		<Link
			href={"/login"}
			className="flex items-center hover:opacity-70 duration-200 bg-green-500 dark:bg-yellow-500 p-1 rounded mx-2 w-fit"
		>
			<p className={loginClass}>{login}</p>
			<BiLogInCircle />
		</Link>
	)
}

export default LoginButton
