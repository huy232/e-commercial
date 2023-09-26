import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {
	user: null,
	isAuthenticated: false,
}

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
			state.isAuthenticated = !!action.payload
		},
		logoutUser: (state) => {
			state.user = null
			state.isAuthenticated = false
		},
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.auth,
			}
		},
	},
})

export const { setUser, logoutUser } = authSlice.actions
export default authSlice.reducer
