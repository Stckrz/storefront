import { Outlet, Link } from 'react-router-dom';
import './layout.css';
import { Navbar } from 'components/navbar/navbar';
import { ControlBar } from 'components/controlbar/controlbar';
import logo from '../../library/photos/logo.png'


const Layout = () => {
	return (
		<>
			<Navbar />
			<div className="header-navbar">
				<div className="logo">Storespace</div>
				<div><ControlBar /></div>
			</div>
			<Outlet />
		</>
	)
};

export default Layout;
