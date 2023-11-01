"use client"
import { useEffect, useRef, useState } from "react"
import supabase from "@/supabase"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { setUser } from "@/store/slices/userSlice"
import { useLocale, useTranslations } from "next-intl"

export default function CredentialLogin() {
	const locale = useLocale()
	const t = useTranslations("LoginPage")
	const password = t("password")
	const login = t("login")
	const signUp = t("signUp")
	const dispatch = useDispatch()
	const router = useRouter()
	const emailRef = useRef<HTMLInputElement | null>(null)
	const passwordRef = useRef<HTMLInputElement | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [showPassword, setShowPassword] = useState(false)

	useEffect(() => {
		const errorDescription = getErrorDescriptionFromHash()
		if (errorDescription) {
			setError(errorDescription)
		}
	}, [])

	const getErrorDescriptionFromHash = () => {
		const hash = window.location.hash
		const params = new URLSearchParams(hash.slice(1)) // Remove the '#' symbol
		return params.get("error_description")
	}

	const handleLogin = async () => {
		if (emailRef.current && passwordRef.current) {
			const email = emailRef.current.value
			const password = passwordRef.current.value
			const { data, error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password,
			})
			if (error) {
				setError(error.message)
			} else {
				dispatch(setUser(data.user))
				router.refresh()
			}
		}
	}

	return (
		<>
			{error && <p>{error}</p>}
			<form className="w-full flex flex-col items-center">
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
					<p>{password}</p>
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
					{login}
				</button>
				<Link href={`/${locale}/sign-up`}>{signUp}</Link>
			</form>
		</>
	)
}
