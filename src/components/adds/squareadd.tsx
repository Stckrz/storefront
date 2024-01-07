import style from './squareadd.module.css';
import { useState, useEffect } from 'react';

interface IAdvertisement {
	name: string,
	image_url_square: string,
	image_url_banner: string
}

export const SquareAdd: React.FC = () => {
	const [addUrls, setAddUrls] = useState<IAdvertisement[]>([]);
	let randomNumber = randomUrl()

	async function fetchAddUrl() {
		const response = await fetch('http://127.0.0.1:8000/advertisements/Advertisement/?format=json');
		const fetchedData = await response.json();
		if (response.status === 200) {
			setAddUrls(fetchedData)
		} else {
			setAddUrls([])
		}
	}

	function randomUrl() {
		return Math.floor(Math.random() * addUrls.length)
	}

	useEffect(() => {
		fetchAddUrl()
	}, [])
	return (
		<>
			{addUrls.length > 0 &&
				<div className={style.squareAddContainer}>
					<img src={addUrls[randomNumber].image_url_square} />
				</div>
			}
		</>
	)
}

export const SkyscraperAdd: React.FC = () => {
	return (
		<>
			<div className={style.skyscraperAddContainer}></div>
		</>
	)
}

export const BannerAdd: React.FC = () => {
	return (
		<>
			<div className={style.bannerAddContainer}></div>
		</>
	)
}
