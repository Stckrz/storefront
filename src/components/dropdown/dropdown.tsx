import React from 'react';
import { useState } from 'react';
import style from './dropdown.module.css';
import { IoIosArrowUp } from 'react-icons/io';

interface DropdownProps {
	description: string
}

export const Dropdown: React.FC<DropdownProps> = ({ description }) => {
	const [dropShown, setDropShown] = useState<Boolean>(false);

	return (
		<>
			<div onClick={() => { setDropShown(!dropShown) }} className={style.dropdownBox}>
				<div className={style.dropdownText}>Description</div>
				<div className={
					!dropShown ?
						`${style.dropdownIcon} ${style.dropdownIconFlipped}`
						:
						`${style.dropdownIcon}`}>
					<IoIosArrowUp />
				</div>
			</div>
			<div className={style.container}>
				<div className={!dropShown ? `${style.revealedContent} ${style.collapsed}` : `${style.revealedContent}`}>{description}
				</div>
			</div>
		</>
	)
}
