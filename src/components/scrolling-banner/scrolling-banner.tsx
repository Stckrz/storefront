import style from './scrolling-banner.module.css';

interface BannerProps {
	bannertext: string
}

export const Banner: React.FC<BannerProps> = ({ bannertext }) => {

	return (
		<>
			<div className={ style.bannerWrapper }>
				<div className={ style.bannerText }>
					{bannertext}
				</div>
			</div>
		</>
	)
}
