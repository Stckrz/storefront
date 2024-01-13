import style from './squareadd.module.css';
import { useState, useEffect } from 'react';
import { fetchAddUrl } from 'library/apifunctions';

interface IAdvertisement {
	name: string,
	image_url_square: string,
	image_url_banner: string
}

export const SquareAdd: React.FC = () => {
	const [addUrls, setAddUrls] = useState<IAdvertisement[]>([]);
	let randomNumber = randomUrl()

	function randomUrl() {
		return Math.floor(Math.random() * addUrls.length)
	}

	useEffect(() => {
		fetchAddUrl().then((item) => setAddUrls(item))
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
