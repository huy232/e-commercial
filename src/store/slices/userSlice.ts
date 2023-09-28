import { createSlice } from "@reduxjs/toolkit"

interface User {
	id: string
	name: string
}

interface AuthState {
	user: User | null
}

const initialState: AuthState = {
	user: null,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
		},
		logoutUser: (state) => {
			state.user = null
		},
	},
})

export const { setUser, logoutUser } = userSlice.actions

export default userSlice.reducer
