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
			<Link to={`/products/${saleitem.id}`}>
				<div className="item-wrapper">
					<div className="img-container"><img src={saleitem.image} /></div>
					<div className="item-info-container">
						<div className="item-name">{saleitem.title}</div>
						<div className="item-category">{saleitem.category}</div>
						<div className="item-price">{`$${saleitem.price}`}</div>
					</div>
				</div>
			</Link>
		</>
	);
}
