import React from 'react';
import { useState } from 'react';
import './navbar.css';
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

	const mediaQuery = window.matchMedia("(min-width: 500px)")
	const width = useViewport();

	console.log(width.width)
	console.log(mediaQuery.matches)
	const [navVisible, setNavVisible] = useState<boolean>(true)

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
		{width.width < 400 ?	
			<div className="navbar-wrapper">
				<div className="hamburger-logo-group">
					<div className="hamburger" onClick={() => { setNavVisible(!navVisible) }}>
						{navVisible === false ?
							<IoMenuOutline size={"2em"} /> : <IoClose size={"2em"} />
						}
					</div>

					{navVisible === true &&
						/* <div className="expandible-navbar" style={{ visibility: navVisible ? "visible" : "hidden" }}> */
						<div className="expandible-navbar" >

							<div className="nav-link-container">
								<div className="category-link" onClick={() => { activeHandler("HOME") }}><Link to="/">HOME</Link></div>
								{
									categoryLinks.map((item) => {
										return (
											item.isActive === true ?
												<div className="category-link" onClick={() => { activeHandler(item.name) }} style={{ color: "black" }}><Link to={item.pathname}>{item.name}</Link></div>
												:
												<div className="category-link" onClick={() => { activeHandler(item.name) }}><Link to={item.pathname}>{item.name}</Link></div>
										)
									})
								}
							</div>
						</div>
					}
					<div className="store-name"><Link to="/">Storespace</Link></div>
				</div>
				<div className="control-bar-container"><ControlBar /></div>
			</div>
				:<div>butts</div>
			}

		</>
	)
}
