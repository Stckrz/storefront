import React from 'react';
import { useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { CompressedItem } from 'components/compressed-item/compressed-item';
import { CartTotal } from 'components/cart-total/cart-total';
import { CartContents } from 'pages/layout/layout';
import { ICartItem } from 'library/contextstuff';
import './cart.css';

export const Cart: React.FC = () => {
	const { cart, setCart } = useContext(CartContents)

	function deleteCartItem(item: ICartItem) {
		let result = cart.filter((cartItem) => cartItem.cartId !== item.cartId);
		setCart(result)
	}



	return (
		<>
			<div className="cart-page-wrapper">
				{cart.length > 0 ?
				<div className="condensed-item-wrapper">
					{
						cart.map((item) => {
							return (
								<div className="cart-item-container">
									<div onClick={() => { deleteCartItem(item) }}><IoClose /></div>
									<CompressedItem item={{ cartId: item.cartId, productId: item.productId, title: item.title, price: item.price, quantity: item.quantity, image: item.image, category: item.category }} />
								</div>
							)
						})
					}
				</div>:<div className="empty-cart-indicator">Cart Empty</div>}
			</div>
			<div className="cart-total-container">
				<CartTotal />
				<div>

				</div>
				{cart.length > 0 ?
				<button className="submit-order-button">Checkout</button>:
				<button disabled className="disabled-submit-order-button">Checkout</button>
				}
			</div>
		</>
	)
}

export default Cart;
