"use client"
import { useTranslations } from "next-intl"
import { RootState } from "@/store"
import { logoutUser, setUser } from "@/store/slices/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import supabase from "@/supabase"

import BaseSkeleton from "../BaseSkeleton"
import LoginButton from "./LoginButton"
import User from "./User"
import LogoutButton from "./LogoutButton"

const UserButton = () => {
	const dispatch = useDispatch()
	const user = useSelector((state: RootState) => state.user.user)
	const t = useTranslations("LoginPage")

	const [loading, setLoading] = useState(true)

	const login = t("login")
	const signup = t("signUp")
	const logout = t("logout")

	useEffect(() => {
		const getSession = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession()

			dispatch(setUser(session?.user ?? null))
			setLoading(false)
		}

		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				setUser(session?.user ?? null)
				setLoading(false)
			}
		)

		getSession()
		return () => {
			if (authListener) {
				authListener.subscription.unsubscribe()
			}
		}
	}, [dispatch])

	let content

	if (loading) {
		content = (
			<div className="h-full">
				<BaseSkeleton
					width="var(--header-user-width)"
					height="var(--header-content-height)"
					className="mb-[4px]"
				/>
			</div>
		)
	} else {
		if (!user) {
			content = <LoginButton translate={login} />
		}

		if (user) {
			const userMetadata = user.user_metadata
			content = (
				<div className="flex flex-cols items-center justify-center">
					<User userMetadata={userMetadata} />
					<LogoutButton translate={logout} />
				</div>
			)
		}
	}

	return content
}
export default UserButton
