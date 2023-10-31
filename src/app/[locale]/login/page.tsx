"use client"

import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import { CredentialLogin, SocialLogin } from "@/components"
import { useTranslations } from "next-intl"

export default function Login() {
	const t = useTranslations("LoginPage")
	const loginWith = t("social")
	const user = useSelector((state: RootState) => state.user.user)
	const router = useRouter()

	if (user) {
		router.push("/")
	}
	return (
		<div className="flex flex-col justify-center items-center">
			<SocialLogin />
			<div>OR</div>
			<CredentialLogin />
		</div>
	)
}
