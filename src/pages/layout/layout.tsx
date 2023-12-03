import { createContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import './layout.css';
import {
	ICartItem,
	cartInitial,
	IContextInterface,
	dataInitial,
	IDataContextInterface,
} from '../../library/contextstuff';
import { Navbar } from 'components/navbar/navbar';
import { ControlBar } from 'components/controlbar/controlbar';
import logo from '../../library/photos/logo.png';

export const ItemsDatabase = createContext<IDataContextInterface>(dataInitial)
export const CartContents = createContext<IContextInterface>(cartInitial)

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
