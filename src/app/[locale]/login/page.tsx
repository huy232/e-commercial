"use client"

import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import supabase from "@/supabase"
import { Button } from "@/components"

export default function Login() {
	const user = useSelector((state: RootState) => state.user.user)
	const router = useRouter()

	if (user) {
		router.push("/")
	}

	const handleGoogleLogin = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "google",
		})

		if (data) {
		} else if (error) {
			console.error("Google login error:", error)
		}
	}

	return (
		<div>
			<Button onClick={() => handleGoogleLogin()}>Sign in with google</Button>
		</div>
	)
}
