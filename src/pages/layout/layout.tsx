import React from 'react';
import { createContext, useState, useEffect } from 'react'
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
	setidcount: () => { }
}

//the shape of the interface value
interface IContextInterface {
	cart: ICartItem[],
	setCart: (data: ICartItem[]) => void,
	idcount: number,
	setidcount: (stuff: number) => void
}

export const CartContents = createContext<IContextInterface>(cartInitial)




export interface IProduct {
	title: string,
	price: number,
	description: string,
	category: string,
	image: string,
}

const dataInitial: IDataContextInterface = {
	data: [
		{
			title: "",
			price: 0,
			description: "",
			category: "",
			image: "",

		}],
	setData: () => { }
}

interface IDataContextInterface {
	data: IProduct[],
	setData: (data: IProduct[]) => void
}


export const ItemsDatabase = createContext<IDataContextInterface>(dataInitial)



const Layout = () => {

	const [cart, setCart] = useState<ICartItem[]>([]);
	const [idcount, setidcount] = useState(0);

	const [data, setData] = useState<any>();



	async function fetchData() {


		const response = await fetch('https://fakestoreapi.com/products/');
		const fetchedData = await response.json();
		if (response.status === 200) {
			
			setData(fetchedData)
		} else {
			setData([])
		}
	}
	useEffect(() => {
		fetchData()
	}, [])


console.log(data)
	return (
		<>
			<ItemsDatabase.Provider value={{ data, setData }}>
				<CartContents.Provider value={{ cart, setCart, idcount, setidcount }}>
					<Navbar />
					<div className="header-navbar">
						<div className="logo">Storespace</div>
						<div className="control-bar-container"><ControlBar /></div>
					</div>
					<Outlet />
				</CartContents.Provider>
			</ItemsDatabase.Provider>
		</>
	)
};

export default Layout;
