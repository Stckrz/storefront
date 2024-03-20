import React from 'react';
import { FaTwitter, FaTiktok, FaFacebook } from 'react-icons/fa';
import style from './socials.module.css';

export const Socials: React.FC = () => {

	return (
		<>
			<div className={style.socialIconsWrapper}>
				<FaTwitter size={"3em"} />
				<FaTiktok size={"3em"} />
				<FaFacebook size={"3em"} />
			</div>
		</>
	)
}
