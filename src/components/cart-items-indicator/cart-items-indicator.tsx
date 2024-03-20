import React, { useState, useEffect } from 'react';

//redux
import { useSelector } from 'react-redux';

//styles
import style from './cart-items-indicator.module.css';

export const CartItemsIndicator: React.FC = () => {
	const [ keyvalue, setKeyValue ] = useState(0)
	const cart = useSelector((state: any) => state.cart).arr;

	function keyChangeHandler() {
		setKeyValue(Math.random())
	}

	useEffect(() => {
		keyChangeHandler()
	}, [cart.length])

	return (

		<>
			{cart.length !== 0 &&
				<div key={keyvalue} className={ style.cartIndicator }>
					<div>{cart.length}</div>
				</div>
			}
		</>
	)
}
