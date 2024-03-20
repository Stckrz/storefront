import React, { useState } from 'react';
//styles
import style from './star-picker.module.css';

//icons
import { FaStar, FaRegStar } from 'react-icons/fa';

interface ratingStarsPickerProps {
	setRating: (rating: number) => void,
}

export const RatingStarsPicker: React.FC<ratingStarsPickerProps> = ({ setRating }) => {
	const [starArray, setStarArray] = useState<object[]>(Array(5).fill(<FaRegStar />))

	function handleRatingClick(index: number) {
		let starsCopy = [...starArray];
		for (let i = 0; i < starsCopy.length; i++) {
			i <= index ? starsCopy[i] = <FaStar /> : starsCopy[i] = <FaRegStar />;
		}
		setStarArray(starsCopy);
		setRating((index + 1))
	}

	function renderStars() {
		return starArray.map((item: any, index: number) => {
			return (<div
				onClick={() => { handleRatingClick(index) }}
			>{item}</div>)
		})
	}

	return (
		<>
			<div className={style.starPickerContainer}>
				{renderStars()}
			</div>
		</>
	)
}
