import React from 'react';
import './product-page-view.css';
import { IoArrowBack } from 'react-icons/io5'

interface PageViewProps {
	saleitem: {
		id: number,
		title: string,
		price: number,
		description: string,
		category: string,
		image: string
	};
	setDetailsShown: Function
}

export const PageView: React.FC<PageViewProps> = ({ saleitem, setDetailsShown }) => {

	return (
		<>
			<div className="overlay">
				<div className="product-page-wrapper">
					<div
						className="close-button"
						onClick={() => { setDetailsShown(false) }}>
						<IoArrowBack size={"2em"} />
					</div>
					<div className="product-spotlight">
						<div className="product-page-img-container"><img src={saleitem.image} /></div>
						<div className="product-page-item-name">{saleitem.title}</div>
					</div>
					<div className="buying-options">
						<div className="product-page-item-price">{`$${saleitem.price}`}</div>
						<button className="add-cart-button">Add to cart</button>
					</div>
					<div className="description">{saleitem.description}</div>
				</div>
			</div >
		</>
	)
}
