import style from "./home.module.css";
import { Banner } from 'components/scrolling-banner/scrolling-banner';
import { BannerAdd, SquareAdd, SkyscraperAdd } from 'components/adds/squareadd';
import { BigBanner } from 'components/bigbanner/bigbanner';

const Homepage = () => {
	return (
		<>
			<div className={style.homedif}>
				{/* <BannerAdd /> */}
				{/* <div className={style.add}><SquareAdd /></div> */}
				{/* <SkyscraperAdd /> */}
				
				<Banner bannertext={"Special new deals like.. all the time!"} />
				<BigBanner />
			</div>
		</>
	)
}
export default Homepage;
