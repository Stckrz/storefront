import React from 'react';
import style from './cart-items-indicator.module.css';
import { useState, useEffect, useContext } from 'react';
import { CartContents } from 'pages/layout/layout';




export const CartItemsIndicator: React.FC = () => {
	const { cart } = useContext(CartContents)
	const [ keyvalue, setKeyValue ] = useState(0)

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
