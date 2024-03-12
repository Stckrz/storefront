import React from 'react';
import { useState, useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import style from './star-rating.module.css';

interface RatingStarsProps {
	rating: number
}


export const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
	const [starArray, setStarArray] = useState<any[]>([])

	function starHandler(num: number) {
		let starsCopy = [...starArray];
		for (let i = 0; i < 5; i++) {
			i < num ? starsCopy[i] = <FaStar /> : starsCopy[i] = <FaRegStar />
		}
		setStarArray(starsCopy)
	}

	useEffect(() => {
		starHandler(rating)
	}, [rating])

	return (
		<>
			<div className={style.starContainer}>
				{
					starArray.map((item) => {
						return (<div>{item}</div>)
					})
				}
			</div>
		</>
	)
}
