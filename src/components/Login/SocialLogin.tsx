"use client"
import supabase from "@/supabase"
import { Button } from "@/components"
import classNames from "classnames"
import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
import { IoLogoDiscord } from "react-icons/io5"
import { BiLogoFacebookSquare } from "react-icons/bi"
import { useTranslations } from "next-intl"

export default function SocialLogin() {
	const t = useTranslations("LoginPage")
	const loginWith = t("social")

	const loginOption = [
		{
			description: `${loginWith} Google`,
			function: async () => {
				await supabase.auth.signInWithOAuth({
					provider: "google",
				})
			},
			icon: <FcGoogle />,
		},
		{
			description: `${loginWith} Github`,
			function: async () => {
				await supabase.auth.signInWithOAuth({
					provider: "github",
				})
			},
			icon: <BsGithub />,
		},
		{
			description: `${loginWith} Discord`,
			function: async () => {
				await supabase.auth.signInWithOAuth({
					provider: "discord",
				})
			},
			icon: <IoLogoDiscord />,
		},
		{
			description: `${loginWith} Facebook`,
			function: async () => {
				await supabase.auth.signInWithOAuth({
					provider: "facebook",
				})
			},
			icon: <BiLogoFacebookSquare />,
		},
	]
	const buttonClass = classNames(
		"bg-[#0d0d0d] p-2 m-2 rounded hover:opacity-80 duration-200 ease-in-out w-[320px] flex items-center"
	)

	return (
		<>
			<h2>Social Login</h2>
			{loginOption.map((option, index) => {
				return (
					<Button key={index} className={buttonClass} onClick={option.function}>
						{option.icon}
						<p className="pl-2">{option.description}</p>
					</Button>
				)
			})}
		</>
	)
}
