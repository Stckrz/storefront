import "./home.css";
import { ProductCarousel } from 'components/item-carousel/item-carousel';
import { Banner } from 'components/scrolling-banner/scrolling-banner';
const Homepage = () => {
	return (
		<>
			<div className="homedif">
				<ProductCarousel />
				<Banner bannertext={"Special new deals like.. all the time!"} />
				hello
			</div>
		</>
	)
}
export default Homepage;
