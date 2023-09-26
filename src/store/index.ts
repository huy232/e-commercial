// Create a store.js file
import { configureStore } from "@reduxjs/toolkit"

// Import your reducers here
import userReducer from "./slices/authSlice" // Define this in the next step

const store = configureStore({
	reducer: {
		user: userReducer, // Add your reducers here
	},
})

export default store
