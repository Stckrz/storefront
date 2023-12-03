import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { SaleItem } from 'components/saleitem/saleitem';
import { IProduct } from 'library/contextstuff';
import { ItemsDatabase } from 'pages/layout/layout';
import './items-renderer.css';

interface ItemRendererProps {
	categoryName: string
}

export const ItemsRenderer: React.FC<ItemRendererProps> = ({ categoryName }) => {
	const [categoryList, setCategoryList] = useState([])
	const { data } = useContext(ItemsDatabase);
	const [scrollBehavior, setScrollBehavior] = useState<React.CSSProperties>({ position: "static" })

	function getCategoryItems() {
		let temparray: any = []
		data.map((item: IProduct) => {
			item.category === categoryName && temparray.push(item)
		})
		setCategoryList(temparray)
	}

	useEffect(() => {
		getCategoryItems()
	}, [categoryName])

	return (
		<>
			<div className="items-container" style={scrollBehavior}>
				{
					categoryList.map((item) => {
						return (
							<SaleItem setScrollBehavior={setScrollBehavior} saleitem={item} />
						)
					})
				}
			</div>
		</>
	)
}
