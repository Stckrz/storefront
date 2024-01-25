import React from 'react';
import { useState, useContext } from 'react';
import style from './controlbar.module.css';
import { Search } from 'components/search/search';
import { CartItemsIndicator } from 'components/cart-items-indicator/cart-items-indicator';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FaCircle } from "react-icons/fa6";

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
							Create an account
						</Link>
						<FaCircle size={'0.5em'}/>
						<Link to="login">
							Sign in
						</Link>
					</div>
					: <div className={style.loginContainer}>
						<div>{loggedInUser}</div>
						<div><FaCircle size={'0.5em'}/></div>
						<div onClick={() => { setLoggedInUser("default") }}><Link to="logout">Sign out</Link></div>
					</div>
				}


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
