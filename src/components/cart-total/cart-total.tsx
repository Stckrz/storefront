import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { CartContents } from 'pages/layout/layout'
import './cart-total.css';


export const CartTotal: React.FC = () => {
	const [cartTotal, setCartTotal] = useState<number>()
	const { cart } = useContext(CartContents)

	function getTotal() {
		let total = 0;
		for (let i = 0; i < cart.length; i++) {
			total += cart[i].price * cart[i].quantity
		}
		setCartTotal(total);
	}

	useEffect(()=>{
		getTotal()
		},[cart])

	return (
		<>
			<div className="total-container">
			<div>Total:</div>
			<div>{cartTotal}</div>
			</div>
		</>
	)

}
