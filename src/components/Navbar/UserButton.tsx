"use client"
import { useTranslations } from "next-intl"
import { RootState } from "@/store"
import { setUser } from "@/store/slices/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import supabase from "@/supabase"

import { BaseSkeleton, LoginButton, User, LogoutButton } from "@/components"

type Props = {
	isMobile?: boolean
}

const UserButton = ({ isMobile }: Props) => {
	const dispatch = useDispatch()
	const user = useSelector((state: RootState) => state.user.user)
	const t = useTranslations("LoginPage")

	const login = t("login")
	const signup = t("signUp")
	const logout = t("logout")

	useEffect(() => {
		const getSession = async () => {
			const {
				data: { session },
			} = await supabase.auth.getSession()

			dispatch(setUser(session?.user ?? null))
		}

		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				setUser(session?.user ?? null)
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

	if (!user) {
		content = <LoginButton translate={login} isMobile={isMobile} />
	}

	if (user) {
		const userMetadata = user.user_metadata
		content = (
			<div className="flex flex-cols items-center">
				<User userMetadata={userMetadata} isMobile={isMobile} />
				<LogoutButton translate={logout} isMobile={isMobile} />
			</div>
		)
	}

	return content
}
export default UserButton
