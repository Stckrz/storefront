import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from 'library/contextstuff';

let initialcart: ICartItem[] = []

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		arr: initialcart
	},
	reducers: {
		addCartItem: (state, action: PayloadAction<ICartItem>) => {
			let index = state.arr.findIndex((item: ICartItem) => item.id === action.payload.id)
			console.log(index)
			if (index === -1) {
				state.arr.push(action.payload)
			} else {
				state.arr[index].quantity++;
			}
		},
	},
})

export const { addCartItem } = cartSlice.actions
export default cartSlice.reducer
