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

	const [navVisible, setNavVisible] = useState(false)

	function activeHandler(a: string) {
		let newList = [...categoryLinks]
		newList.map((item) => {
			a === item.name ? item.isActive = true : item.isActive = false
		})
		setCategoryLinks(newList)
		setNavVisible(!navVisible)
	}

	return (
		<>
			<div className="navbar-wrapper">
				<div className="hamburger" onClick={() => { setNavVisible(!navVisible) }}>
					{!navVisible ?
						<IoMenuOutline size={"2.5em"} /> : <IoClose size={"2.5em"} />
					}
				</div>

				{navVisible === true &&
					<div className="expandible-navbar">

						<div className="nav-link-container">
							<Link to="/"><p className="category-link" onClick={() => { activeHandler("HOME") }}>HOME</p></Link>
							{
								categoryLinks.map((item) => {
									return (
										item.isActive === true ?
											<Link to={item.pathname}>	<p className="category-link" onClick={() => { activeHandler(item.name) }} style={{ color: "black" }}>{item.name}</p></Link>
											:
											<Link to={item.pathname}>	<p className="category-link" onClick={() => { activeHandler(item.name) }}>{item.name}</p></Link>
									)
								})
							}
						</div>
					</div>
				}
			</div>
		</>
	)
}
