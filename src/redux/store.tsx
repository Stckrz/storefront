import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userslice';
import cartReducer from './slices/cartslice';

export default configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer
	},
});
