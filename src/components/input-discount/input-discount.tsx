import React, { useState } from 'react';
import style from './input-discount.module.css';
import { discountarray } from 'library/data';

interface DiscountInputProps {
	setDiscount: Function
}
interface DiscountItem{
	code: string,
	amount: number
}

export const DiscountInput: React.FC<DiscountInputProps> = ({ setDiscount }) => {
	const [discountText, setDiscountText] = useState("")

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setDiscountText(e.target.value)
	}

	function discountHandler() {
		discountarray.find((item: DiscountItem) => {
			item.code === discountText && setDiscount(item.amount)
		})
	}

	return (
		<>
			<div className={style.discountWrapper}>
				<div>ass</div>
				<input className={style.discountInput} onChange={handleChange} />
				<button className={style.discountButton} onClick={discountHandler}>Apply</button>
			</div>
		</>
	)
}
