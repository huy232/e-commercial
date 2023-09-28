"use client"

import Image from "next/image"
import { BiLogInCircle } from "react-icons/bi"
import Button from "./Button"
import { useTranslations } from "next-intl"
import { RootState } from "@/store"
import { logoutUser } from "@/store/slices/userSlice"
import Link from "next/link"
import { useSelector } from "react-redux"

const UserButton = () => {
	const t = useTranslations("LoginPage")
	const login = t("login")
	const signup = t("signUp")
	const lotout = t("logout")

	const user = useSelector((state: RootState) => state.user.user)
	let content = (
		<Link
			href={"/login"}
			className="flex flex-cols items-center hover:opacity-70 duration-200 bg-green-500 dark:bg-yellow-500 p-1 rounded mx-2"
		>
			<BiLogInCircle className="mr-1" />
			<p>{login}</p>
		</Link>
	)
	if (user) {
		content = (
			<div className="flex flex-cols items-center justify-center">
				<Image
					className="rounded"
					src={(user.image as string) || ""}
					alt="User image"
					width={40}
					height={40}
				/>
				<p className="font-black">{user.name}</p>
				<Button className="hover:opacity-70 duration-200 bg-red-500 p-1 rounded mx-2">
					<p>{lotout}</p>
				</Button>
			</div>
		)
	}

	return content
}
export default UserButton
