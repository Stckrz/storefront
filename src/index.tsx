import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { PageView } from 'components/product-page-view/product-page-view';
import './index.module.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import Layout from './pages/layout/layout';
import Jewelry from './pages/category-templates/jewelry';
import Electronics from './pages/category-templates/electronics';
import WomensClothing from './pages/category-templates/womens-clothing';
import MensClothing from './pages/category-templates/mens-clothing';
import Dresses from './pages/category-templates/dresses';
import Mens from './pages/category-templates/mens';
import HairAccessories from './pages/category-templates/hair-accessories';
import Skirts from './pages/category-templates/skirts';
import CropTops from './pages/category-templates/crop-tops';
import Sweaters from './pages/category-templates/sweaters';
import WomensUnderwear from './pages/category-templates/womens-underwear';
import TShirts from './pages/category-templates/tshirts';
import Search from './pages/search/search';

import { RegisterUser } from './pages/accounts/register/register';
import { UserLogin } from './pages/accounts/login/login';
import { UserLogout } from './pages/accounts/logout/logout';



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
					<Route path="dresses" element={<Dresses />} />
					<Route path="womens_shirts" element={<Dresses />} />
					<Route path="tshirts" element={<TShirts />} />
					<Route path="mens" element={<Mens />} />
					<Route path="hairAccessories" element={<HairAccessories />} />
					<Route path="skirts" element={<Skirts />} />
					<Route path="cropTops" element={<CropTops />} />
					<Route path="sweaters" element={<Sweaters />} />
					<Route path="womensUnderwear" element={<WomensUnderwear />} />

					<Route path="search" element={<Search />} />
					<Route path="products/:id" element={<PageView />} />


					<Route path="register" element={<RegisterUser />} />
					<Route path="login" element={<UserLogin />} />
					<Route path="logout" element={<UserLogout />} />

				</Route>
			</Routes>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
