import { createContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import style from './layout.module.css';
import {
	ICartItem,
	cartInitial,
	IContextInterface,
	dataInitial,
	IDataContextInterface,
} from '../../library/contextstuff';
import { Navbar } from 'components/navbar/navbar';
import { Footer } from 'components/footer/footer';
import logo from '../../library/photos/logo.png';

export const ItemsDatabase = createContext<IDataContextInterface>(dataInitial)
export const CartContents = createContext<IContextInterface>(cartInitial)

const Layout = () => {

	const [cart, setCart] = useState<ICartItem[]>([]);
	const [idcount, setidcount] = useState(0);
	const [data, setData] = useState<any>();

	async function fetchData() {
		// const response = await fetch('https://fakestoreapi.com/products/');
		const response = await fetch('http://127.0.0.1:8000/sale-items/SaleItem/?format=json');
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
					<div className={ style.appWrapper }>
						<Navbar />
						
						<div className={style.outletContainer}><Outlet /></div>
						<div className={style.footerBox}><Footer /></div>
					</div>
				</CartContents.Provider>
			</ItemsDatabase.Provider>
		</>
	)
};

export default Layout;
