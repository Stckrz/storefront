import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SaleItem } from 'components/saleitem/saleitem';
import { IProduct } from 'library/contextstuff';
import { SquareAdd } from 'components/adds/squareadd';
import style from './items-renderer.module.css';
// import { useViewport } from 'hooks/useViewport';

import { fetchItemsByCategory } from 'library/api/saleitemfetch';

export const ItemsRenderer: React.FC = () => {
	let { category } = useParams()
	const [categoryList, setCategoryList] = useState([])
	// const { width } = useViewport();


	function categoryFetch(category: string) {
		fetchItemsByCategory(category).then(
			(items) => setCategoryList(items)
		)
	}

	useEffect(() => {
		category !== undefined &&
			categoryFetch(category)
	}, [category])

	return (
		<>
			{categoryList.length > 0 &&
				<div className={style.itemsRendererPageWrapper}>
					<div className={style.itemsField}>
						<div className={style.categoryName}>
							{category}
						</div>
						<div className={style.itemCount}>{`${categoryList.length} Products`}</div>
						<div className={style.itemsContainer} >
							{
								categoryList.map((item: IProduct) => {
									return (
										<SaleItem key={item._id} saleitem={item} />
									)
								})
							}
						</div>
					</div>
					<div className={style.squarePageAdd}><SquareAdd /></div>
				</div>
			}
		</>
	)
}
