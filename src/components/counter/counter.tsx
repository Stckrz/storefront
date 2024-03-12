import { useDispatch } from 'react-redux';
import { incrementCartQuantity, decrementCartQuantity } from '../../redux/slices/cartslice';

import './counter.css';
import { ICartItem } from 'library/contextstuff';

interface CounterProps{
	cartItem: ICartItem
}

export const Counter: React.FC<CounterProps> = ({ cartItem }) => {
	const dispatch = useDispatch();

	function incrementHandler(){
		dispatch(incrementCartQuantity(cartItem))
	}
	function decrementHandler(){
		dispatch(decrementCartQuantity(cartItem))
	}

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
