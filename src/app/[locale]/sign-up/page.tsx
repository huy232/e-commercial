"use client"

import { avatar, site } from "@/constant"
import supabase from "@/supabase"
import Link from "next/link"
import { useRef, useState } from "react"

export const dynamic = "force-dynamic"

export default function SignUp() {
	const emailRef = useRef<HTMLInputElement | null>(null)
	const firstNameRef = useRef<HTMLInputElement | null>(null)
	const lastNameRef = useRef<HTMLInputElement | null>(null)
	const passwordRef = useRef<HTMLInputElement | null>(null)
	const [error, setError] = useState("")
	const [success, setSuccess] = useState("")
	const [showPassword, setShowPassword] = useState(false)

	const handleLogin = async () => {
		if (
			emailRef.current &&
			passwordRef.current &&
			firstNameRef.current &&
			lastNameRef.current
		) {
			const email = emailRef.current.value
			const password = passwordRef.current.value
			const firstName = firstNameRef.current.value
			const lastName = lastNameRef.current.value
			const { data, error } = await supabase.auth.signUp({
				email: email,
				password: password,
				options: {
					data: {
						first_name: firstName,
						last_name: lastName,
						full_name: `${firstName} ${lastName}`,
						name: firstName,
						avatar_url: avatar,
						picture: avatar,
					},
					emailRedirectTo: `${site}/login`,
				},
			})
			if (error) {
				setError(error.message)
			} else {
				setSuccess(
					"Successfully sign up, please check your gmail for verification"
				)
			}
		} else {
			setError("There are some fields you didn't enter")
		}
	}

	return (
		<form className="w-full flex flex-col items-center">
			{error && <p>{error}</p>}
			{success && <p>{success}</p>}
			<label>
				<p>First name</p>
				<input
					className="rounded text-sm text-[#0d0d0d] mx-2"
					type="text"
					ref={firstNameRef}
					required
				/>
			</label>
			<br />
			<label>
				<p>Last name</p>
				<input
					className="rounded text-sm text-[#0d0d0d] mx-2"
					type="text"
					ref={lastNameRef}
					required
				/>
			</label>
			<br />
			<label>
				<p>Email</p>
				<input
					className="rounded text-sm text-[#0d0d0d] mx-2"
					type="email"
					ref={emailRef}
					required
				/>
			</label>
			<br />
			<label>
				<p>Password</p>
				<input
					className="rounded text-sm text-[#0d0d0d] mx-2"
					type="password"
					ref={passwordRef}
					onClick={() => setShowPassword(!showPassword)}
					required
				/>
			</label>
			<br />
			<button
				type="button"
				className="rounded mx-auto bg-[#0d0d0d] p-4 hover:opacity-80 duration-200 ease-in-out"
				onClick={handleLogin}
			>
				Sign up
			</button>
			<Link href="/login">Back to log in</Link>
		</form>
	)
}
