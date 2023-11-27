import React from 'react';
import { useState } from 'react';
import './saleitem.css';
import { PageView } from 'components/product-page-view/product-page-view';

interface SaleItemProps {
	saleitem: {
		id: number,
		title: string,
		price: number,
		description: string,
		category: string,
		image: string
	}
	setScrollBehavior: Function

};

export const SaleItem: React.FC<SaleItemProps> = ({ saleitem, setScrollBehavior }) => {
	const [detailsShown, setDetailsShown] = useState(false);

	return (
		<>
			{!detailsShown ?
				<div className="item-wrapper" onClick={() => { setDetailsShown(!detailsShown) }}>
					<div className="img-container"><img src={saleitem.image} /></div>
					<div className="item-info-container">
						<div className="item-name">{saleitem.title}</div>
						<div className="item-category">{saleitem.category}</div>
						<div className="item-price">{`$${saleitem.price}`}</div>
					</div>
				</div> :
				
					<PageView
						saleitem={saleitem}
						setDetailsShown={setDetailsShown}
					/>  
					
			}

		</>
	);
}
