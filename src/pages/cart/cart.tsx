import React from 'react';
import { useContext } from 'react';
import { CompressedItem } from 'components/compressed-item/compressed-item';
import { CartContents, ICartItem } from 'pages/layout/layout';

export const Cart: React.FC = () => {
	const { cart } = useContext(CartContents)

	return (
		<>
			<div>Cart Stuff Here</div>
			{
			cart.map((item) => {
				return(
			<CompressedItem item={{id: item.id, title: item.title, price: item.price, image: item.image}}/>
				)
			})
			}
		</>
	)
}

export default Cart;
