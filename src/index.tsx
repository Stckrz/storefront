import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { PageView } from 'components/product-page-view/product-page-view';
import './index.module.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import Layout from './pages/layout/layout';

import { ItemsRenderer } from 'components/items-renderer/items-renderer';
import { RegisterUser } from './pages/accounts/register/register';
import { UserLogin } from './pages/accounts/login/login';
import { UserLogout } from './pages/accounts/logout/logout';

import store from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="home" element={<Home />} />

						<Route path="category/:category" element={<ItemsRenderer />} />

						<Route path="products/:id" element={<PageView />} />

						<Route path="register" element={<RegisterUser />} />
						<Route path="login" element={<UserLogin />} />
						<Route path="logout" element={<UserLogout />} />

					</Route>
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
