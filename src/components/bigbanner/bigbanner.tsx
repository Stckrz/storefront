import React from 'react';
import style from './bigbanner.module.css';
import { Link } from 'react-router-dom';

export const BigBanner: React.FC = () => {
	return (
		<>
			<Link to={"/category/tshirts"}>
				<div className={style.bigbannercontainer}>
					<div className={style.bigbannertext}>
						<p>TSHIRTS</p>
						<p>ONLY</p>
						<p>$5!?!?</p>
					</div>
					<div className={style.bigbannerimg}>
						<img src={'./shirtPic.png'} />
					</div>
					<img className={style.overlayimg} src={'./OIP.jpg'} />
					<p className={style.shoplink}><Link to={"/category/tshirts"}>shop now</Link></p>
				</div>
			</Link>
		</>
	)

}
