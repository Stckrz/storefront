//basic imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//redux imports
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/userslice';

//stylesheet imports
import style from './controlbar.module.css';

//component imports
import { Search } from 'components/search/search';
import { CartItemsIndicator } from 'components/cart-items-indicator/cart-items-indicator';
import { Cart } from 'components/cart/cart';

//icons
import { IoSearchOutline } from 'react-icons/io5';
import { IoBagHandleOutline } from 'react-icons/io5';
import { FaCircle } from "react-icons/fa6";


export const ControlBar: React.FC = () => {
	//redux stuff
	const user = useSelector((state: any) => state.user.value);
	const dispatch = useDispatch();

	//component visibility
	const [showCart, setShowCart] = useState(false)
	const [showSearch, setShowSearch] = useState(false)

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
							Register
						</Link>
						<FaCircle size={'0.5em'} />
						<Link to="login">
							Login
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
					{showSearch && <Search setShowSearch={ setShowSearch }/>}
				</div>
				<div className={style.cartIconContainer}>
					<CartItemsIndicator />
					<div className={style.cartIcon}>
						<div onClick={() => { showCartHandler() }}><IoBagHandleOutline size={"1.5em"} /></div>
						{showCart && <Cart setShowCart={setShowCart} />}
					</div>
				</div>
			</div>
		</>
	)
}
