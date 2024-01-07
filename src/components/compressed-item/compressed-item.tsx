import React from 'react';
import { useState } from 'react';
import { Counter } from 'components/counter/counter';
import style from './compressed-item.module.css';
import { Link } from 'react-router-dom';
import { ICartItem } from 'library/contextstuff';

interface CompressedItemProps {
	item: ICartItem
}

export const CompressedItem: React.FC<CompressedItemProps> = ({ item }) => {
	const [cartItemCount, setCartItemCount] = useState<number>(0)

	return (
		<>
			<div className={ style.compressedItemContainer }>
					<div className={ style.compressedItemImg }>
				<Link to={`/products/${item.id}`}>
						<img src={item.image} />
				</Link>
					</div>
				<div className={ style.compressedItemDetails }>
						<div className={ style.compressedItemTitle }>
					<Link to={`/products/${item.id}`}>
							{(item.title).toUpperCase()}
					</Link>
						</div>
					<div className={ style.compressedItemPrice }>{Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(item.price * item.quantity)}</div>
					<div className={ style.compressedItemQuantity }>
						<Counter cartItem={item} count={cartItemCount} setCount={setCartItemCount} />
					</div>
				</div>
			</div>
		</>
	)
}
