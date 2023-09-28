"use client"

import Image from "next/image"
import { BiLogInCircle } from "react-icons/bi"
import Button from "./Button"
import { useTranslations } from "next-intl"

const UserButton = () => {
	const t = useTranslations("LoginPage")
	const login = t("login")
	const signup = t("signUp")
	// return (
	// 	<div className="flex flex-cols items-center justify-center">
	// 		<Image
	// 			className="rounded"
	// 			src={session.user.image as string}
	// 			alt="User image"
	// 			width={40}
	// 			height={40}
	// 		/>
	// 		<p className="font-black">{session.user.name}</p>
	// 		<button
	// 			className="hover:opacity-70 duration-200 bg-red-500 p-1 rounded mx-2"
	// 		>
	// 			Sign out
	// 		</button>
	// 	</div>
	// )

	return (
		<Button className="flex flex-cols items-center hover:opacity-70 duration-200 bg-green-500 dark:bg-yellow-500 p-1 rounded mx-2">
			<BiLogInCircle className="mr-1" />
			<p>{login}</p>
		</Button>
	)
}
export default UserButton
