import React from 'react';
import { useState } from 'react';
import style from './controlbar.module.css';
import { Search } from 'components/search/search';
import { CartItemsIndicator } from 'components/cart-items-indicator/cart-items-indicator';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { IoBagHandleOutline } from 'react-icons/io5';

import { Cart } from 'components/cart/cart';

export const ControlBar: React.FC = () => {
	const [ showCart, setShowCart ] = useState(false)
	const [ showSearch, setShowSearch ] = useState(false)
	

	function showCartHandler(){
		setShowSearch(false)
		setShowCart(!showCart)
	}

	function showSearchHandler(){
		setShowCart(false)
		setShowSearch(!showSearch)
	}

	return (
		<>
			<div className={ style.controlbarContainer }>
						<Link to="/"><IoHomeOutline size={"1.5em"}/></Link>
						<div className={ style.searchWrapper }>
								<div onClick={()=>{showSearchHandler()}}><IoSearchOutline size={"1.5em"}/></div>
					{showSearch && <Search />}
						</div>
						<div  className={ style.cartIconContainer }>
							<CartItemsIndicator />
							<div  className={ style.cartIcon }>
								<div onClick={()=>{showCartHandler()}}><IoBagHandleOutline size={"1.5em"} /></div>
						{showCart && <Cart/>}
							</div>
						</div>
			</div>
		</>
	)
}
