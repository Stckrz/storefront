import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { CartContents, ICartItem } from 'pages/layout/layout';
import './product-page-view.css';
import { Counter } from 'components/counter/counter';
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
	const { cart, setCart, idcount, setidcount } = useContext(CartContents)
	const [count, setCount] = useState<number>(1);

	const result = cart.find(({ title }) => title === saleitem.title)

	function addCartClickHandler(item: ICartItem) {
		typeof result === "undefined" ?
			cart.push({ title: item.title, id: idcount, price: item.price, image: item.image })
			: console.log("balls")
		setidcount(idcount + 1)
	}

	useEffect(() => {


	}, [cart])

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
						<Counter count={count} setCount={setCount} />{count}
						<button className="add-cart-button" onClick={() => { addCartClickHandler(saleitem) }}>Add to cart</button>
					</div>
					<div className="description">{saleitem.description}</div>
				</div>
			</div >
		</>
	)
}
