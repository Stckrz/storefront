import React from 'react';

import style from './footer.module.css';
import { Socials } from 'components/socials/socials';

export const Footer: React.FC = () => {

	return (
		<>
			<div className={ style.footerWrapper }>
				<div><Socials /></div>
				<div className={style.footerText}>All images generated using StableDiffusion AI</div>
			</div>
		</>
	)
}
