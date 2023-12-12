import React from 'react';
import { useState } from 'react';
import { discountarray } from 'library/data';
import './input-discount.css';

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
			<div className="discount-wrapper">
				<input onChange={handleChange} />
				<button className="discount-button" onClick={discountHandler}>Apply</button>
			</div>
		</>

	)

}
