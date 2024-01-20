import React from 'react';
import { useState, useContext } from 'react';
import style from './controlbar.module.css';
import { Search } from 'components/search/search';
import { CartItemsIndicator } from 'components/cart-items-indicator/cart-items-indicator';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';

import { Cart } from 'components/cart/cart';

import { LoggedInUser } from 'pages/layout/layout';


export const ControlBar: React.FC = () => {
	const [showCart, setShowCart] = useState(false)
	const [showSearch, setShowSearch] = useState(false)
	const { loggedInUser, setLoggedInUser } = useContext(LoggedInUser)


	function showCartHandler() {
		setShowSearch(false)
		setShowCart(!showCart)
	}

	function showSearchHandler() {
		setShowCart(false)
		setShowSearch(!showSearch)
	}

	return (
		<>
			<div className={style.controlbarContainer}>
				{loggedInUser === "default" ?
					<div className={style.loginContainer}>
						<Link to="register">
							{/* <FaRegUser size={"1.5em"} /> */}
							signup
						</Link>
						<Link to="login">login</Link>
					</div>
					:<div>{loggedInUser}<div onClick={()=>{setLoggedInUser("default")}}>logout</div></div>
				}	
				

				<Link to="/"><IoHomeOutline size={"1.5em"} /></Link>
				<div className={style.searchWrapper}>
					<div onClick={() => { showSearchHandler() }}><IoSearchOutline size={"1.5em"} /></div>
					{showSearch && <Search />}
				</div>
				<div className={style.cartIconContainer}>
					<CartItemsIndicator />
					<div className={style.cartIcon}>
						<div onClick={() => { showCartHandler() }}><IoBagHandleOutline size={"1.5em"} /></div>
						{showCart && <Cart />}
					</div>
				</div>
			</div>
		</>
	)
}
