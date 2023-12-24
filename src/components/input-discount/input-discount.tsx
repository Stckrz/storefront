import React from 'react';
import { useState } from 'react';
import { discountarray } from 'library/data';
import style from './input-discount.module.css';

interface DiscountInputProps {
	setDiscount: Function
}
export const DiscountInput: React.FC<DiscountInputProps> = ({ setDiscount }) => {
	const [discountText, setDiscountText] = useState<string>("")

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setDiscountText(e.target.value)
	}
	function discountHandler() {
		discountarray.find((item) => {
			item.code === discountText && setDiscount(item.amount)
		})

	}

	return (
		<>
			<div className={ style.discountWrapper }>
				<input className={ style.discountInput } onChange={handleChange} />
				<button className={ style.discountButton } onClick={discountHandler}>Apply</button>
			</div>
		</>

	)

}
