import React from 'react';
import { useState } from 'react';
import style from './controlbar.module.css';
import { Search } from 'components/search/search';
import { CartItemsIndicator } from 'components/cart-items-indicator/cart-items-indicator';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FaCircle } from "react-icons/fa6";

import { Cart } from 'components/cart/cart';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/userslice';

export const ControlBar: React.FC = () => {
	const [showCart, setShowCart] = useState(false)
	const [showSearch, setShowSearch] = useState(false)
	const user = useSelector((state: any) => state.user.value);
	const dispatch = useDispatch();


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
				{!user.username ?
					<div className={style.loginContainer}>
						<Link to="register">
							Create an account
						</Link>
						<FaCircle size={'0.5em'} />
						<Link to="login">
							Sign in
						</Link>
					</div>
					:
					<div className={style.loginContainer}>

						<div>{user.username}</div>
						<div><FaCircle size={'0.5em'} /></div>
						<div onClick={() => { dispatch(setUser("")) }}><Link to="logout">Sign out</Link></div>
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
