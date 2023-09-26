// userActions.ts
import { Dispatch } from "redux"
import { setUser, logoutUser } from "../slices/authSlice"
import { AuthChangeEvent, Session } from "@supabase/supabase-js" // Import types from supabase

import supabase from "@/supabase" // Import your Supabase client

// Define types for action payloads
type LoginPayload = {
	email: string
	password: string
}

type SignUpPayload = LoginPayload

export const login =
	(credentials: LoginPayload) => async (dispatch: Dispatch) => {
		try {
			const { data, error } = await supabase.auth.signInWithPassword(
				credentials
			)

			if (error) {
				throw error
			}

			dispatch(setUser(data.user))
		} catch (error) {
			// Handle login error
		}
	}

export const signUp =
	(credentials: SignUpPayload) => async (dispatch: Dispatch) => {
		try {
			const { email, password } = credentials
			const { data, error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					emailRedirectTo: `${location.origin}/auth/callback`,
				},
			})

			if (error) {
				throw error
			}

			dispatch(setUser(data.user))
		} catch (error) {
			// Handle sign-up error
		}
	}

export const logout = () => async (dispatch: Dispatch) => {
	try {
		await supabase.auth.signOut()
		dispatch(logoutUser())
	} catch (error) {
		// Handle logout error
	}
}

// Optionally, you can listen for auth state changes using Supabase's `onAuthStateChange` method
export const listenForAuthChanges = () => (dispatch: Dispatch) => {
	const authListener = supabase.auth.onAuthStateChange(
		(event: AuthChangeEvent, session: Session | null) => {
			if (event === "SIGNED_OUT") {
				dispatch(logoutUser())
			}
		}
	)

	// Return a function to unsubscribe from the listener when no longer needed
	return () => {
		authListener.data.subscription.unsubscribe()
	}
}
