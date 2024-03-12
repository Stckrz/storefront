import React, { useState } from 'react';
import style from './navbar.module.css';
import { IoMenuOutline } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

import { Link } from 'react-router-dom';
import { ControlBar } from 'components/controlbar/controlbar';
import { useViewport } from 'hooks/useViewport';

export const Navbar: React.FC = () => {
	const [categoryLinks, setCategoryLinks] = useState([
		{ name: "T-SHIRTS", pathname: "/category/tshirts", isActive: false },
		{ name: "SWEATERS", pathname: "/category/sweaters", isActive: false },
		{ name: "SKIRTS", pathname: "/category/skirt", isActive: false },
		{ name: "PANTIES", pathname: "/category/womensUnderwear", isActive: false },
		{ name: "CROPS", pathname: "/category/cropTops", isActive: false },
		{ name: "HAIR ACCESSORIES", pathname: "/category/hairAccessories", isActive: false },
		{ name: "DRESSES", pathname: "/category/dresses", isActive: false },
		{ name: "MENS", pathname: "/category/mens", isActive: false }
	])

	const width = useViewport();

	const [navVisible, setNavVisible] = useState<boolean>(false)

	function activeHandler(a: string) {
		let newList = [...categoryLinks]
		for(const item of newList){
			a === item.name ? item.isActive = true : item.isActive = false
		}
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
							<div className={ style.expandibleNavbar } >

								<div className={ style.navLinkContainer }>
									<div className={ style.categoryLink } onClick={() => { activeHandler("HOME") }}><Link to="/">HOME</Link></div>
									{
										categoryLinks.map((item) => {
											return (
												item.isActive === true ?
													<div key={item.name} className={ style.categoryLink } onClick={() => { activeHandler(item.name) }} style={{ color: "black" }}><Link to={item.pathname}>{item.name}</Link></div>
													:
													<div key={item.name} className={ style.categoryLink } onClick={() => { activeHandler(item.name) }}><Link to={item.pathname}>{item.name}</Link></div>
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
					<div className={ style.navItems }>
					<div className={ style.storeName } onClick={()=>{activeHandler("HOME")}}><Link to="/">Storespace</Link></div>
						<div className={ style.desktopNavLinkContainer }>
							{
								categoryLinks.map((item) => {
									return (
										item.isActive === true ?
											<div key={item.name} className={ style.categoryLink } onClick={() => { activeHandler(item.name) }} style={{ color: "black" }}><Link to={item.pathname}>{item.name}</Link></div>
											:
											<div key={item.name} className={ style.categoryLink } onClick={() => { activeHandler(item.name) }}><Link to={item.pathname} style={{color: '#c9beb9' }}>{item.name}</Link></div>
									)
								})
							}
						</div>
						<div className={ style.controlBarContainer } onClick = {()=>{activeHandler("HOME")}}><ControlBar /></div>
					</div>
				</div>
			}
		</>
	)
}
