import React from 'react';
import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom';
import './layout.css';
import { Navbar } from 'components/navbar/navbar';
import { ControlBar } from 'components/controlbar/controlbar';
import logo from '../../library/photos/logo.png';

//the shape of a cart item object
export interface ICartItem {
	title: string,
	cartId: number,
	price: number,
	quantity: number,
	image: string
}

//the initial value for our carts contents
const cartInitial: IContextInterface = {
	cart: [
		{
			title: "",
			cartId: 0,
			price: 0,
			quantity: 0,
			image: ""
		}],
	setCart: () => { },
	idcount: 0,
	setidcount: () => {}
}

//the shape of the interface value
interface IContextInterface {
	cart: ICartItem[],
	setCart: (data: ICartItem[]) => void,
	idcount: number,
	setidcount: (stuff: number) => void
}

export const CartContents = createContext<IContextInterface>(cartInitial)

const Layout = () => {

	const [cart, setCart] = useState<ICartItem[]>([]);
	const [idcount, setidcount] = useState(0);
	return (
		<>
			<CartContents.Provider value={{ cart, setCart, idcount, setidcount }}>
				<Navbar />
				<div className="header-navbar">
					<div className="logo">Storespace</div>
					<div className="control-bar-container"><ControlBar /></div>
				</div>
				<Outlet />
			</CartContents.Provider>
		</>
	)
};

export default Layout;
