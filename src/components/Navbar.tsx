import Link from "next/link"
import { useTranslations } from "next-intl"

type Props = {}
export default function Header({}: Props) {
	const t = useTranslations("LoginPage")
	const login = t("login")
	const signup = t("signUp")

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
			<Link href={"login"}>{login}</Link>
		</header>
	)
}
