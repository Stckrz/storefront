import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { PageView } from 'components/product-page-view/product-page-view';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import Layout from './pages/layout/layout';
import Jewelry from './pages/jewelry/jewelry';
import Electronics from './pages/electronics/electronics';
import Cart from './pages/cart/cart';
import WomensClothing from './pages/womens-clothing/womens-clothing';
import MensClothing from './pages/mens-clothing/mens-clothing';
import Search from './pages/search/search';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="jewelry" element={<Jewelry />} />
					<Route path="electronics" element={<Electronics />} />
					<Route path="womensclothing" element={<WomensClothing />} />
					<Route path="mensclothing" element={<MensClothing />} />
					<Route path="cart" element={<Cart />} />
					<Route path="search" element={<Search />} />
					<Route path="products/:id" element={<PageView />} />

				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
