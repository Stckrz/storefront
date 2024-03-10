import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IProduct, } from 'library/contextstuff';

import { useViewport } from 'hooks/useViewport';
import { Dropdown } from 'components/dropdown/dropdown';
import { CommentsBox } from 'components/comments/commentsbox';
import { IoArrowBack } from 'react-icons/io5'

import style from './product-page-view.module.css';

import { fetchItemById } from 'library/api/saleitemfetch';

import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../redux/slices/cartslice';


export const PageView: React.FC = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<IProduct>();

	const { width } = useViewport();

	const dispatch = useDispatch()
	const cart = useSelector((state: any) => state.cart);

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

	function addCartClickHandler(item: IProduct) {
		dispatch(addCartItem(
			{
				title: item.name,
				id: item._id,
				price: item.price,
				quantity: 1,
				image: item.image_url,
				category: item.category
			}
		))
	}

	async function findProduct() {
		id &&
			setProduct(await fetchItemById(id))
	}

	useEffect(() => {
		findProduct()
		console.log(cart)
	}, [])

	if (!id) {
		return null
	}

	return (
		<>
			{product &&
				<div className={style.productPageWrapper}>
					{width < 800 &&
						<div
							onClick={goBack}
							className={style.closeButton}>
							<IoArrowBack size={"2em"} />
						</div>
					}
					<div className={style.mainBox}>
						<div className={style.productSpotlight}>
							<div className={style.productPageImgContainer}><img src={product.image_url} alt={"product"} /></div>
						</div>
						<div className={style.productDetails}>
							<div className={style.buyingOptions}>
								<div className={style.productPageItemName}>{product.name}</div>
								<div className={style.productPageItemPrice}>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</div>
								<div className={style.productPageCounter}>
								</div>
							</div>
							<div className={style.cartButtonContainer}>
								<button className={style.addCartButton} onClick={() => { addCartClickHandler(product) }}>Add to cart</button>
							</div>
							<div className={style.freeShipping}>free standard shipping on orders over $25.00</div>
							<div className="description"><Dropdown description={product.description} /></div>
						</div>
						<div>
						</div>
					</div>
					<CommentsBox id={id} />
				</div>
			}
		</>
	)
}
