import React from 'react';
import { useState } from 'react';
import { Counter } from 'components/counter/counter';
import './compressed-item.css';
import { PageView } from 'components/product-page-view/product-page-view';
import { CartContents, ICartItem } from 'pages/layout/layout';


interface CompressedItemProps {
	item: {
		cartId: number,
		title: string,
		price: number,
		quantity: number,
		image: string
	}
}

export const CompressedItem: React.FC<CompressedItemProps> = ({ item }) => {
	const [cartItemCount, setCartItemCount] = useState<number>(0)

	return (
		<>
				<div className="compressed-item-container">
					<div className="compressed-item-img"><img src={item.image} /></div>
					<div className="compressed-item-details">
						<div className="compressed-item-title">{(item.title).toUpperCase()}</div>
						<div className="compressed-item-price">{item.price * item.quantity}</div>
						<div className="compressed-item-quantity">
							<Counter cartItem={item} count={cartItemCount} setCount={setCartItemCount} />
						</div>
					</div>
				</div> 
		</>
	)
}
