import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContents } from 'pages/layout/layout';
import { ItemsDatabase } from 'pages/layout/layout';
import { IProduct } from 'library/contextstuff';
import { Link, useNavigate } from 'react-router-dom';

import './product-page-view.css';
import { Counter } from 'components/counter/counter';
import { IoArrowBack } from 'react-icons/io5'


export const PageView: React.FC = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<IProduct>();
	const { cart, setCart, idcount, setidcount } = useContext(CartContents)
	const { data } = useContext(ItemsDatabase);
	const [count, setCount] = useState<number>(1);

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);	
	}


	const result = cart.find(({ title }) => title === product?.title)

	function addCartClickHandler(item: IProduct) {
		console.log(result?.title)
		if (typeof result === "undefined") {
			cart.push({
				title: item.title,
				cartId: idcount,
				productId: item.id,
				price: item.price,
				quantity: count,
				image: item.image,
				category: item.category
			})
			setidcount(idcount + 1)
		} else {
			setCart(cart.map((cartitem) => cartitem.title === item.title ? { ...cartitem, quantity: cartitem.quantity + count } : cartitem))
		}
	}

	useEffect(() => {
		setProduct(data.find((item) => item.id.toString() === id))
	}, [cart, count])

	return (
		<>
			{product &&
				<div className="overlay">
					<div className="product-page-wrapper">
						<div
							onClick={goBack}
							className="close-button">
								<IoArrowBack size={"2em"} />
						</div>
						<div className="product-spotlight">
							<div className="product-page-img-container"><img src={product.image} /></div>
							<div className="product-page-item-name">{product.title}</div>
						</div>
						<div className="buying-options">
							<div className="product-page-item-price">{Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(product.price)}</div>
							<div className="product-page-counter">
								{count}
								{/* <Counter cartItem={product} count={count} setCount={setCount} /> */}
							</div>
						</div>
						<div className="cart-button-container">
							<button className="add-cart-button" onClick={() => { addCartClickHandler(product) }}>Add to cart</button>
						</div>
						<div className="description">{product.description}</div>
					</div>
				</div >
			}
		</>
	)
}
