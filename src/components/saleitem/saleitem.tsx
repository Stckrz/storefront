import React from 'react';

import { IProduct } from 'library/contextstuff';
import { Link } from 'react-router-dom';
import style from './saleitem.module.css';

interface SaleItemProps {
	saleitem: IProduct
};

export const SaleItem: React.FC<SaleItemProps> = ({ saleitem }) => {

	return (
		<>
			<div className={ style.itemWrapper }>
				<div className={ style.imgContainer }>
					<Link to={`/products/${saleitem._id}`}>
						<img src={saleitem.image_url} />
					</Link>
				</div>
				<div className={ style.itemInfoContainer }>
					<div className={ style.itemName }>
						<Link to={`/products/${saleitem._id}`}>
							{saleitem.name}
						</Link>
					</div>
					<div className={ style.itemPrice }>{`${Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(saleitem.price)}`}</div>
				</div>
			</div>
		</>
	);
}
