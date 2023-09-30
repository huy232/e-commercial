import { useDispatch } from "react-redux"
import Button from "../Button"
import { logoutUser } from "@/store/slices/userSlice"

type Props = {
	translate: string
}
const LogoutButton = ({ translate }: Props) => {
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(logoutUser())
	}

	return (
		<Button
			onClick={handleLogout}
			className="hover:opacity-70 duration-200 bg-red-500 p-1 rounded mx-2"
		>
			<p>{translate}</p>
		</Button>
	)
}
export default LogoutButton
