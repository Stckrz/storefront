import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './cart-panel.module.css';

import { CompressedItem } from 'components/compressed-item/compressed-item';
import { CartTotal } from 'components/cart-total/cart-total';

import { ICartItem } from 'library/contextstuff';


export const Cart: React.FC = () => {
	const cart = useSelector((state: any) => state.cart).arr;

	useEffect(() => {
	}, [cart])

	return (
		<>
			<div className={style.cartPanelContainer}>
				{cart.length > 0 ?
					<div className={style.cartItemsWrapper}>
						{
							cart.map((item: ICartItem) => {
								return (
									<div className={style.cartItemContainer}>
										<CompressedItem item={{ id: item.id, title: item.title, price: item.price, quantity: item.quantity, image: item.image, category: item.category }} />
										{/* <div className={style.deleteText} onClick={() => { deleteCartItem(item) }}>Delete</div> */}
									</div>
								)
							})
						}
					</div> : <div className={style.emptyCartIndicator}>Cart Empty</div>}
				<div className={style.cartPanelTotalContainer}>
					<CartTotal />
					<div>

					</div>
					{cart.length > 0 ?
						<button className={style.submitOrderButton}>Checkout</button> :
						<button disabled className={style.disabledSubmitOrderButton}>Checkout</button>
					}
				</div>
			</div>

		</>
	)


}
