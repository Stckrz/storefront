import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DiscountInput } from 'components/input-discount/input-discount';
import style from './cart-total.module.css';


export const CartTotal: React.FC = () => {
	const [cartTotal, setCartTotal] = useState<number>(0)
	const cart = useSelector((state: any) => state.cart).arr;
	const [discount, setDiscount] = useState<number>(0)

	function getTotal() {
		let total = 0;
		for (let i = 0; i < cart.length; i++) {
			total += cart[i].price * cart[i].quantity
		}
		setCartTotal(total);
	}

	useEffect(() => {
		getTotal()
	}, [cart, cart.length])

	return (
		<>
			<div className={style.totalContainer}>
				<DiscountInput setDiscount={setDiscount} />
				{cart.length > 0 &&
					<div>
						<div>Total:</div>
						<div>
							{discount !== 0 &&
								<div style={{ textDecoration: "line-through", color: "red" }}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cartTotal)}</div>
							}
							<div style={{ color: " #61fa3e" }}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cartTotal - (cartTotal * discount))}</div>
						</div>
					</div>
				}
			</div>
		</>
	)
}
