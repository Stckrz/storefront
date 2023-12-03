import React from 'react';
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
				<div key={keyvalue} className="cart-indicator">
					<div>{cart.length}</div>
				</div>
			}
		</>
	)
}
