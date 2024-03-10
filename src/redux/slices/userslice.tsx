import { createSlice } from '@reduxjs/toolkit';
import { userInitial } from 'library/contextstuff';


export const userSlice = createSlice({
	name: 'user',
	initialState: {
		value: userInitial
	},
	reducers: {
		setUser: (state, action) => {
			state.value = action.payload
		},
	},
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
