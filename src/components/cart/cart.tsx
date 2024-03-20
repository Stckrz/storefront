import React, { SetStateAction, useEffect, useRef } from 'react';

//redux imports
import { useSelector, useDispatch } from 'react-redux';
import { removeCartItem } from '../../redux/slices/cartslice';

//styles
import style from './cart-panel.module.css';

// component imports
import { CompressedItem } from 'components/compressed-item/compressed-item';
import { CartTotal } from 'components/cart-total/cart-total';

//hook imports
import { useClickOutside } from 'hooks/useClickOutside';

// context
import { ICartItem } from 'library/contextstuff';

interface CartProps{
	setShowCart: React.Dispatch<SetStateAction<boolean>>
}

export const Cart: React.FC<CartProps> = ({setShowCart}) => {
	//redux
	const cart = useSelector((state: any) => state.cart).arr;
	const dispatch = useDispatch()

	//useRef
	const cartWrapperRef = useRef(null);
	useClickOutside(cartWrapperRef, ()=>{setShowCart(false)})

	const deleteCartItem = (cartid: ICartItem) => {
		dispatch(removeCartItem(cartid))
	}

	useEffect(() => {
	}, [cart])
	

	return (
		<>
			<div ref={ cartWrapperRef } className={style.cartPanelContainer}>
				{cart.length > 0 ?
					<div className={style.cartItemsWrapper}>
						{
							cart.map((item: ICartItem) => {
								return (
									<div key={item.id} className={style.cartItemContainer}>
										<CompressedItem item={{ id: item.id, title: item.title, price: item.price, quantity: item.quantity, image: item.image, category: item.category }} />
										<div>{item.quantity}</div>
										<div className={style.deleteText} onClick={() => { deleteCartItem(item) }}>Delete</div>
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
