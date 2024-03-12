import { createContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import style from './layout.module.css';
import {
	dataInitial,
	IDataContextInterface,
} from 'library/contextstuff';
import { Navbar } from 'components/navbar/navbar';
import { Footer } from 'components/footer/footer';

import { fetchAllItems } from 'library/api/saleitemfetch';

export const ItemsDatabase = createContext<IDataContextInterface>(dataInitial)

const Layout = () => {

	const [data, setData] = useState<any>();

	useEffect(() => {
		fetchAllItems().then(
			(item) => setData(item))
	}, [])
	return (
		<>
			<ItemsDatabase.Provider value={{ data, setData }}>
					<div className={style.appWrapper}>
						<Navbar />
						<div className={style.outletContainer}><Outlet /></div>
						<div className={style.footerBox}><Footer /></div>
					</div>
			</ItemsDatabase.Provider>
		</>
	)
};

export default Layout;
