import style from "./home.module.css";
import { ProductCarousel } from 'components/item-carousel/item-carousel';
import { Banner } from 'components/scrolling-banner/scrolling-banner';
import { BannerAdd, SquareAdd, SkyscraperAdd } from 'components/adds/squareadd';
const Homepage = () => {
	return (
		<>
			<div className={style.homedif}>
				<BannerAdd />
				<div className={style.add}><SquareAdd /></div>
				<SkyscraperAdd />
				<ProductCarousel />
				<Banner bannertext={"Special new deals like.. all the time!"} />
				hello
			</div>
		</>
	)
}
export default Homepage;
