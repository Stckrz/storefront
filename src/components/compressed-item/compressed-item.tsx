import React from 'react';
import { useState, useContext } from 'react';
import { CartContents } from 'pages/layout/layout';
import { Counter } from 'components/counter/counter';
import './compressed-item.css';


interface CompressedItemProps {
	item: {
		id: number,
		title: string,
		price: number,
		image: string
	}
}

export const CompressedItem: React.FC<CompressedItemProps> = ({ item }) => {
	const { cart, setCart } = useContext(CartContents)
	const [cartItemCount, setCartItemCount] = useState<number>(0)

	return (
		<>
			<div className="compressed-item-container">
				<div className="compressed-item-img"><img src={item.image}/></div>
				<div className="compressed-item-title">{item.title}</div>
				<div className="compressed-item-quantity"><div>quantity:</div><Counter count={cartItemCount} setCount={setCartItemCount}/><div></div> </div>
				<div>{item.price}</div>
			</div>
		</>
	)
}
