import React from 'react';
import { useState } from 'react';
import { Counter } from 'components/counter/counter';
import './compressed-item.css';
import { Link } from 'react-router-dom';
import { ICartItem } from 'library/contextstuff';

interface CompressedItemProps {
	item: ICartItem

}

export const CompressedItem: React.FC<CompressedItemProps> = ({ item }) => {
	const [cartItemCount, setCartItemCount] = useState<number>(0)

	return (
		<>
			<div className="compressed-item-container">
					<div className="compressed-item-img">
				<Link to={`/products/${item.productId}`}>
						<img src={item.image} />
				</Link>
					</div>
				<div className="compressed-item-details">
						<div className="compressed-item-title">
					<Link to={`/products/${item.productId}`}>
							{(item.title).toUpperCase()}
					</Link>
						</div>
					<div className="compressed-item-price">{Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(item.price * item.quantity)}</div>
					<div className="compressed-item-quantity">
						<Counter cartItem={item} count={cartItemCount} setCount={setCartItemCount} />
					</div>
				</div>
			</div>
		</>
	)
}
