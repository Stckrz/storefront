import React from 'react';
import { useState } from 'react';
import style from './controlbar.module.css';
import { ItemSearch } from 'components/itemsearch/itemsearch';
import { CartItemsIndicator } from 'components/cart-items-indicator/cart-items-indicator';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { IoBagHandleOutline } from 'react-icons/io5';

import { Cart } from 'components/cart/cart';

export const ControlBar: React.FC = () => {
	const [ showCart, setShowCart ] = useState(false)
	

	function showCartHandler(){
		setShowCart(!showCart)
		console.log(showCart)
	}

	return (
		<>
			<div className={ style.controlbarContainer }>
						<Link to="/"><IoHomeOutline size={"1.5em"}/></Link>
						<div className={ style.searchWrapper }>
								<Link to="/search">
								<IoSearchOutline size={"1.5em"}/>
								</Link>
						</div>
						<div className={ style.cartIconContainer }>
							<CartItemsIndicator />
							<div className={ style.cartIcon }>
								<div onClick={()=>{showCartHandler()}}><IoBagHandleOutline size={"1.5em"} /></div>
						{showCart && <Cart/>}
								{/* <Link to="/cart"><IoBagHandleOutline size={"1.5em"} /></Link> */}
							</div>
						</div>
			</div>
		</>
	)
}
