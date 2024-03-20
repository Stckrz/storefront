//router
import { Outlet } from 'react-router-dom';

//styles
import style from './layout.module.css';

//components
import { Navbar } from 'components/navbar/navbar';
import { Footer } from 'components/footer/footer';

const Layout = () => {

	return (
		<>
			<div className={style.appWrapper}>
				<Navbar />
				<div className={style.outletContainer}><Outlet /></div>
				<div className={style.footerBox}><Footer /></div>
			</div>
		</>
	)
};

export default Layout;
