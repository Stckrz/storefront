import React from 'react';
import { useEffect, useContext } from 'react';
import './counter.css';
import { CartContents, ICartItem } from 'pages/layout/layout';

interface CounterProps{
	count: number,
	setCount: Function,
	cartItem: ICartItem
}

export const Counter: React.FC<CounterProps> = ({ cartItem, count, setCount }) => {
	const {cart, setCart} = useContext(CartContents)
	function incrementHandler(){
		setCount(count + 1)
		setCart(cart.map((item) => cartItem.title === item.title ? {...item, quantity: item.quantity + 1}:item))
	}

	function decrementHandler(){
		cartItem.quantity > 0 &&
		setCart(cart.map((item) => cartItem.cartId === item.cartId ? {...item, quantity: item.quantity - 1}:item))
		setCount(count - 1);
	}

	useEffect(()=>{},[count])

	return (
		<>
			<div className="counter-wrapper">
				<button className="counter-button" onClick={()=>{decrementHandler()}}>-</button>
				<div>{cartItem.quantity}</div>
				<button className="counter-button" onClick={()=>{incrementHandler()}}>+</button>
			</div>
		</>
	)
}
