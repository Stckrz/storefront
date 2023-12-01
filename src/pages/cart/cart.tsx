import React from 'react';
import { useContext } from 'react';
import { CompressedItem } from 'components/compressed-item/compressed-item';
import { CartTotal } from 'components/cart-total/cart-total';
import { CartContents, ICartItem } from 'pages/layout/layout';
import './cart.css';

export const Cart: React.FC = () => {
	const { cart } = useContext(CartContents)

	return (
		<>
			<div className="cart-page-wrapper">
				<div className="condensed-item-wrapper">
					{
						cart.map((item) => {
							return (
								<div>
									<CompressedItem item={{ cartId: item.cartId, title: item.title, price: item.price, quantity: item.quantity, image: item.image }} />
								</div>
							)
						})
					}
				</div>
			</div>
				<div className="cart-total-container">
					<CartTotal />
				<div>
					
				</div>
				<button className="submit-order-button">Checkout</button>
				</div>
		</>
	)
}

export default Cart;
