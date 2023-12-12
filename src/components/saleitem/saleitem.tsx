import React from 'react';
import { IProduct } from 'library/contextstuff';
import { Link } from 'react-router-dom';
import './saleitem.css';

interface SaleItemProps {
	saleitem: IProduct
	setScrollBehavior: Function

};

export const SaleItem: React.FC<SaleItemProps> = ({ saleitem }) => {

	return (
		<>
			<div className="item-wrapper">
				<div className="img-container">
					<Link to={`/products/${saleitem.id}`}>
						<img src={saleitem.image} />
					</Link>
				</div>
				<div className="item-info-container">
					<div className="item-name">
						<Link to={`/products/${saleitem.id}`}>
							{saleitem.title}
						</Link>
					</div>
					<div className="item-category">{saleitem.category}</div>
					<div className="item-price">{`$${saleitem.price}`}</div>
				</div>
			</div>
		</>
	);
}
