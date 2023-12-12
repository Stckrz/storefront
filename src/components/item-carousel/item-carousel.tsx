import './item-carousel.css'
import 'library/data';
import { useState, useContext, useEffect } from 'react';
import { ItemsDatabase } from 'pages/layout/layout';
import { IProduct, ICartItem } from 'library/contextstuff';
import { Link } from 'react-router-dom';
import { CompressedItem } from 'components/compressed-item/compressed-item';


export const ProductCarousel: React.FC = () => {
	const { data } = useContext(ItemsDatabase);
	let randomProductArray: IProduct[] = [];

	function getRandomInt() {
		return Math.floor(Math.random() * 3)
	}

	function getSomeProducts() {
		for (let i = 0; i < data.length; i++) {
			let a = getRandomInt();
			a !== 1 && randomProductArray.push(data[i])

		}
		console.log(randomProductArray)
	}

	useEffect(() => {
		// data?.length > 0 &&
			// getSomeProducts()
	}, [data])

	return (
		<>
			<div>butts</div>
			{/* {data.map((item) => { */}
			{/* 	return( */}
			{/* 	<div className="carousel-container"> */}
			{/* 		return ( */}
			{/* 		<div className="product-container"> */}
			{/* 			<Link to={`/products/${item.id}`}> */}
			{/* 				<div className="compressed-item-container"> */}
			{/* 					<div className="compressed-item-img"><img src={item.image} /></div> */}
			{/* 					<div className="compressed-item-details"> */}
			{/* 						<div className="compressed-item-title">{(item.title).toUpperCase()}</div> */}
			{/* 						<div>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}</div> */}
			{/* 					</div> */}
			{/* 				</div> */}
			{/* 			</Link> */}
			{/* 		</div> */}
			{/* 		) */}
			{/* 	</div> */}
			{/* 	) */}
			{/* }) */}
			{/* } */}
		</>
	)

}
