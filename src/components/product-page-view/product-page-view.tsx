import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContents } from 'pages/layout/layout';
import { ItemsDatabase } from 'pages/layout/layout';
import { IProduct } from 'library/contextstuff';
import { useNavigate } from 'react-router-dom';

import { useViewport } from 'hooks/useViewport';

import style from './product-page-view.module.css';
import { Counter } from 'components/counter/counter';
import { IoArrowBack } from 'react-icons/io5'


export const PageView: React.FC = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<IProduct>();
	const { cart, setCart, idcount, setidcount } = useContext(CartContents)
	const { data } = useContext(ItemsDatabase);
	const [count, setCount] = useState<number>(1);

	const { width } = useViewport();

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);	
	}


	const result = cart.find(({ title }) => title === product?.title)

	function addCartClickHandler(item: IProduct) {
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
					<div className={ style.productPageWrapper }>
					{width < 800 &&
						<div
							onClick={goBack}
							className={ style.closeButton }>
								<IoArrowBack size={"2em"} />
						</div>
					}
						<div className={ style.productSpotlight }>
							<div className={ style.productPageImgContainer }><img src={product.image} /></div>
						</div>
					<div className={ style.productDetails }>
						<div className={ style.buyingOptions }>
							<div className={ style.productPageItemName }>{product.title}</div>
							<div className={ style.productPageItemPrice }>{Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(product.price)}</div>
							<div className={ style.productPageCounter }>
								{count}
								{/* <Counter cartItem={product} count={count} setCount={setCount} /> */}
							</div>
						</div>
						<div className={ style.cartButtonContainer }>
							<button className={ style.addCartButton } onClick={() => { addCartClickHandler(product) }}>Add to cart</button>
						</div>
						<div className="description">{product.description}</div>
						</div>
					</div>
			}
		</>
	)
}
