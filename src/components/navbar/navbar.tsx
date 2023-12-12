import React from 'react';
import { useState } from 'react';
import './navbar.css';
import { IoMenuOutline } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

import { Link } from 'react-router-dom';


export const Navbar: React.FC = () => {
	const [categoryLinks, setCategoryLinks] = useState([
		{ name: "ELECTRONICS", pathname: "/electronics", isActive: true },
		{ name: "JEWELRY", pathname: "/jewelry", isActive: false },
		{ name: "MEN'S CLOTHING", pathname: "/mensclothing", isActive: false },
		{ name: "WOMEN'S CLOTHING", pathname: "/womensclothing", isActive: false }])

	const mediaQuery = window.matchMedia("(min-width: 500px)")

	console.log(mediaQuery.matches)
	const [navVisible, setNavVisible] = useState<boolean>(true)

	function activeHandler(a: string) {
		let newList = [...categoryLinks]
		newList.map((item) => {
			a === item.name ? item.isActive = true : item.isActive = false
		})
		setCategoryLinks(newList)
	}

	return (
		<>
			<div className="navbar-wrapper">
				<div className="hamburger" onClick={() => { setNavVisible(!navVisible) }}>
					{navVisible === false ?
						<IoMenuOutline size={"2.5em"} /> : <IoClose size={"2.5em"} />
					}
				</div>

				{/* {navVisible === "visible" && */}
					<div className="expandible-navbar" style={{visibility: navVisible ? "visible" : "hidden"}}>

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
				{/* } */}
			</div>
		</>
	)
}
