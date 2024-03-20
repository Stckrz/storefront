import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//styles
import style from './navbar.module.css';

//icons
import { IoMenuOutline } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

//components
import { ControlBar } from 'components/controlbar/controlbar';

//hooks
import { useViewport } from 'hooks/useViewport';

export const Navbar: React.FC = () => {
	const [categoryLinks, setCategoryLinks] = useState([
		{ name: "T-SHIRTS", pathname: "/category/tshirts", isActive: false },
		{ name: "SWEATERS", pathname: "/category/sweaters", isActive: false },
		{ name: "SKIRTS", pathname: "/category/skirts", isActive: false },
		{ name: "PANTIES", pathname: "/category/womens_underwear", isActive: false },
		{ name: "CROPS", pathname: "/category/crop_tops", isActive: false },
		{ name: "HAIR ACCESSORIES", pathname: "/category/hair_accessories", isActive: false },
		{ name: "DRESSES", pathname: "/category/dresses", isActive: false },
		{ name: "MENS", pathname: "/category/mens", isActive: false }
	])

	const width = useViewport();

	//visibility of mobile navbar 
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
