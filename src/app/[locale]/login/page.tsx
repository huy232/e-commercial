"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { useState } from "react"

import type { Database } from "@/lib/database.types"

export default function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const router = useRouter()
	const supabase = createClientComponentClient<Database>()

	const handleSignUp = async () => {
		router.refresh()
	}

	const handleSignIn = async () => {
		router.refresh()
	}

	const handleSignOut = async () => {
		router.refresh()
	}

	return (
		<>
			<input
				name="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			/>
			<input
				type="password"
				name="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
			/>
			<button onClick={handleSignUp}>Sign up</button>
			<button onClick={handleSignIn}>Sign in</button>
			<button onClick={handleSignOut}>Sign out</button>
		</>
	)
}
