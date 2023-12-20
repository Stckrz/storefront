import React from 'react';
import { useState } from 'react';
import style from './navbar.module.css';
import { IoMenuOutline } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

import { Link } from 'react-router-dom';
import { ControlBar } from 'components/controlbar/controlbar';
import { useViewport } from 'hooks/useViewport';


export const Navbar: React.FC = () => {
	const [categoryLinks, setCategoryLinks] = useState([
		{ name: "ELECTRONICS", pathname: "/electronics", isActive: true },
		{ name: "JEWELRY", pathname: "/jewelry", isActive: false },
		{ name: "MEN'S CLOTHING", pathname: "/mensclothing", isActive: false },
		{ name: "WOMEN'S CLOTHING", pathname: "/womensclothing", isActive: false }])

	const width = useViewport();

	const [navVisible, setNavVisible] = useState<boolean>(false)

	function activeHandler(a: string) {
		let newList = [...categoryLinks]
		newList.map((item) => {
			a === item.name ? item.isActive = true : item.isActive = false
		})
		setNavVisible(!navVisible)
		setCategoryLinks(newList)
	}


	return (
		<>
			{width.width <= 800 &&
				<div className={ style.navbarWrapper }>
					<div className={ style.hamburgerLogoGroup }>
						<div className="hamburger" onClick={() => { setNavVisible(!navVisible) }}>
							{navVisible === false ?
								<IoMenuOutline size={"2em"} /> : <IoClose size={"2em"} />
							}
						</div>

						{navVisible === true &&
							/* <div className="expandible-navbar" style={{ visibility: navVisible ? "visible" : "hidden" }}> */
							<div className={ style.expandibleNavbar } >

								<div className={ style.navLinkContainer }>
									<div className={ style.categoryLink } onClick={() => { activeHandler("HOME") }}><Link to="/">HOME</Link></div>
									{
										categoryLinks.map((item) => {
											return (
												item.isActive === true ?
													<div className={ style.categoryLink } onClick={() => { activeHandler(item.name) }} style={{ color: "black" }}><Link to={item.pathname}>{item.name}</Link></div>
													:
													<div className={ style.categoryLink } onClick={() => { activeHandler(item.name) }}><Link to={item.pathname}>{item.name}</Link></div>
											)
										})
									}
								</div>
							</div>
						}
						<div className={ style.storeName }><Link to="/">Storespace</Link></div>
					</div>
					<div className={ style.controlBarContainer }><ControlBar /></div>
				</div>
			}
			{width.width > 800 &&
				<div className={ style.desktopNavbarWrapper }>
					{/* <div className="store-name"><Link to="/">Storespace</Link></div> */}
					<div className={ style.navItems }>
					<div className={ style.storeName }><Link to="/">Storespace</Link></div>
						<div className={ style.desktopNavLinkContainer }>
							{
								categoryLinks.map((item) => {
									return (
										item.isActive === true ?
											<div className={ style.categoryLink } onClick={() => { activeHandler(item.name) }} style={{ color: "black" }}><Link to={item.pathname}>{item.name}</Link></div>
											:
											<div className={ style.categoryLink } onClick={() => { activeHandler(item.name) }}><Link to={item.pathname} style={{color: '#c9beb9' }}>{item.name}</Link></div>
									)
								})
							}
						</div>
						<div className={ style.controlBarContainer }><ControlBar /></div>
					</div>
				</div>
			}
		</>
	)
}
