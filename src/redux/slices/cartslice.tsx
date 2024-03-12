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
			if (index === -1) {
				state.arr.push(action.payload)
			} else {
				state.arr[index].quantity++;
			}
		},
		removeCartItem: (state, action: PayloadAction<ICartItem>) => {
			let index = state.arr.findIndex((item: ICartItem) => item.id === action.payload.id)
			if (index !== -1) {
				state.arr.splice(index, 1)
			}
		},
		incrementCartQuantity: (state, action: PayloadAction<ICartItem>) => {
			let index = state.arr.findIndex((item: ICartItem) => item.id === action.payload.id)
			if (index !== -1) {
				state.arr[index].quantity++;
			}
		},
		decrementCartQuantity: (state, action: PayloadAction<ICartItem>) => {
			let index = state.arr.findIndex((item: ICartItem) => item.id === action.payload.id)
			if (state.arr[index].quantity === 1) {
				state.arr.splice(index, 1)
			}
			else if (index !== -1) {
				state.arr[index].quantity--;
			}
		},
	},
})

export const { addCartItem, removeCartItem, incrementCartQuantity, decrementCartQuantity } = cartSlice.actions
export default cartSlice.reducer
