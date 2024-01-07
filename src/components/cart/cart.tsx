import React from 'react';
import { useEffect, useContext } from 'react';
import style from './cart-panel.module.css';

import { CompressedItem } from 'components/compressed-item/compressed-item';
import { CartTotal } from 'components/cart-total/cart-total';
import { CartContents } from 'pages/layout/layout';
import { ICartItem } from 'library/contextstuff';



export const Cart: React.FC = () => {
	const { cart, setCart } = useContext(CartContents)


	function deleteCartItem(item: ICartItem) {
		let result = cart.filter((cartItem) => cartItem.cartId !== item.cartId);
		setCart(result)
	}
	useEffect(() => {
	}, [cart])

	return (
		<>
			<div className={ style.cartPanelContainer }>
				{cart.length > 0 ?
					<div className={ style.cartItemsWrapper }>
						{
							cart.map((item) => {
								return (
									<div className={ style.cartItemContainer }>
										<CompressedItem item={{ cartId: item.cartId, id: item.id, title: item.title, price: item.price, quantity: item.quantity, image: item.image, category: item.category }} />
										<div className={style.deleteText} onClick={() => { deleteCartItem(item) }}>Delete</div>
									</div>
								)
							})
						}
					</div> : <div className={ style.emptyCartIndicator }>Cart Empty</div>}
				<div className={ style.cartPanelTotalContainer }>
					<CartTotal />
					<div>

					</div>
					{cart.length > 0 ?
						<button className={ style.submitOrderButton }>Checkout</button> :
						<button disabled className={ style.disabledSubmitOrderButton }>Checkout</button>
					}
				</div>
			</div>

		</>
	)


}
