"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import type { Database } from "@/lib/database.types"

export default function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const router = useRouter()

	const handleSignUp = async () => {
		router.refresh()
	}

	const handleSignIn = async () => {
		router.refresh()
	}

	const handleSignOut = async () => {
		router.refresh()
	}

	return <></>
}
