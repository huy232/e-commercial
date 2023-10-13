import { useDispatch } from "react-redux"
import { logoutUser } from "@/store/slices/userSlice"
import { BiLogOutCircle } from "react-icons/bi"
import Button from "../Button"
import supabase from "@/supabase"

type Props = {
	translate: string
}
const LogoutButton = ({ translate }: Props) => {
	const dispatch = useDispatch()
	const handleLogout = async () => {
		const { error } = await supabase.auth.signOut()
		if (error) {
			console.log(error)
		} else {
			dispatch(logoutUser())
		}
	}

	return (
		<Button
			onClick={handleLogout}
			className="flex flex-cols items-center hover:opacity-70 duration-200 bg-red-500 p-1 rounded mx-2"
		>
			<BiLogOutCircle />
		</Button>
	)
}
export default LogoutButton
