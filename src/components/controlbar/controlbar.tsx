import React from 'react';
import './controllbar.css';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { IoSearchOutline } from 'react-icons/io5';
import { IoBagHandleOutline } from 'react-icons/io5';


export const ControlBar: React.FC = () => {

	return (
		<>
			<div className="controlbar-container">
				<Link to="/"><IoHomeOutline /></Link>
				<IoSearchOutline />

				<Link to="/cart"><IoBagHandleOutline /></Link>
			</div>
		</>
	)
}
