import './scrolling-banner.css';

interface BannerProps {
	bannertext: string

}

export const Banner: React.FC<BannerProps> = ({ bannertext }) => {

	return (
		<>
			<div className="banner-wrapper">
				<div className="banner-text">
					{bannertext}
				</div>
			</div>
		</>
	)


}
