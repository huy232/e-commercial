import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import { AuthState } from "./slices/userSlice"

export type RootState = {
	user: AuthState
}

const store = configureStore({
	reducer: {
		user: userReducer,
	},
})

export default store
