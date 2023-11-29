import React from 'react';
import { useEffect } from 'react';
import './counter.css';

interface CounterProps{
	count: number,
	setCount: Function
}

export const Counter: React.FC<CounterProps> = ({ count, setCount }) => {
	function incrementHandler(){
		setCount(count + 1)
	}

	function decrementHandler(){
		count > 0 &&
		setCount(count - 1)
	}

	useEffect(()=>{},[count])

	return (
		<>
			<div className="counter-wrapper">
				<button onClick={()=>{decrementHandler()}}>-</button>
				<div>{count}</div>
				<button onClick={()=>{incrementHandler()}}>+</button>
			</div>
		</>
	)
}
