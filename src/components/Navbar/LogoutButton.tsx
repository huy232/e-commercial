import { useDispatch } from "react-redux"
import { logoutUser } from "@/store/slices/userSlice"
import { BiLogOutCircle } from "react-icons/bi"
import { Button } from "@/components"
import supabase from "@/supabase"
import classNames from "classnames"

type Props = {
	translate: string
	isMobile?: boolean
}
const LogoutButton = ({ translate, isMobile }: Props) => {
	const dispatch = useDispatch()
	const handleLogout = async () => {
		const { error } = await supabase.auth.signOut()
		if (error) {
			console.log(error)
		} else {
			dispatch(logoutUser())
		}
	}

	const logoutClass = classNames(
		isMobile && "block",
		!isMobile && "hidden",
		"md:block px-1 text-sm"
	)

	return (
		<Button
			onClick={handleLogout}
			className="flex flex-cols items-center hover:opacity-70 duration-200 bg-red-500 p-1 rounded mx-2"
		>
			<p className={logoutClass}>{translate}</p>
			<BiLogOutCircle />
		</Button>
	)
}
export default LogoutButton
