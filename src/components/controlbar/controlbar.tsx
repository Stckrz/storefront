import React from 'react';
import './controllbar.css';
import { ItemSearch } from 'components/itemsearch/itemsearch';
import { CartItemsIndicator } from 'components/cart-items-indicator/cart-items-indicator';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { IoBagHandleOutline } from 'react-icons/io5';

export const ControlBar: React.FC = () => {

	return (
		<>
			<div className="controlbar-container">
						<Link to="/"><IoHomeOutline size={"1.5em"}/></Link>
						<div className="search-wrapper">
								<Link to="/search">
								<IoSearchOutline size={"1.5em"}/>
								</Link>
						</div>
						<div className="cart-icon-container">
							<CartItemsIndicator />
							<div className="cart-icon">
								<Link to="/cart"><IoBagHandleOutline size={"1.5em"} /></Link>
							</div>
						</div>
			</div>
		</>
	)
}
