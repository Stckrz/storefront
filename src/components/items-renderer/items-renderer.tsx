import React from 'react';

import { useCallback, useEffect, useState } from 'react';
import { SaleItem } from 'components/saleitem/saleitem';
import { IProduct } from 'library/contextstuff';
import { SquareAdd } from 'components/adds/squareadd';
import style from './items-renderer.module.css';
import { useViewport } from 'hooks/useViewport';

import {fetchAllItems} from 'library/apifunctions';

interface ItemRendererProps {
	categoryName: string
}

export const ItemsRenderer: React.FC<ItemRendererProps> = ({ categoryName }) => {
	const [categoryList, setCategoryList] = useState([])
	const [data, setData] = useState([]);
	const { width } = useViewport();


	function getCategoryItems() {
		let temparray: any = []
		data.map((item: IProduct) => {
			item.category === categoryName && temparray.push(item)
		})
		setCategoryList(temparray)
	}

	useEffect(() => {
		fetchAllItems().then(
		(items) => setData(items)
		)
		getCategoryItems()
	}, [data.length])

	return (
		<>
			{categoryList.length > 0 &&
				<div className={style.itemsRendererPageWrapper}>
					<div className={style.itemsField}>
						<div className={style.categoryName}>
							{categoryName}
						</div>
						<div className={style.itemCount}>{`${categoryList.length} Products`}</div>
						<div className={style.itemsContainer} >
							{
								categoryList.map((item) => {
									return (
										<SaleItem saleitem={item} />
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
