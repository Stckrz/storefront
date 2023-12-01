import React from 'react';
import { useEffect, useState } from 'react';
import { SaleItem } from 'components/saleitem/saleitem';
import './items-renderer.css';

interface ItemRendererProps {
	categoryName: string
}

export const ItemsRenderer: React.FC<ItemRendererProps> = ({ categoryName }) => {
	const [categoryList, setCategoryList] = useState([])
	const [scrollBehavior, setScrollBehavior] = useState<React.CSSProperties>({position: "static"})

	async function fetchData(categoryName: string) {

		interface ItemForSale {
			// id: number,
			title: string,
			price: number,
			description: string,
			category: string,
			image: string,
		}

		const response = await fetch('https://fakestoreapi.com/products/');
		const fetchedData = await response.json();
		if(response.status === 200) {
		let temparray: any = []

		fetchedData.map((item: ItemForSale) => {
			item.category === categoryName && temparray.push(item)
		})
		setCategoryList(temparray)}
	}


	useEffect(() => {
		fetchData(categoryName)
	}, [categoryName])

	return (
		<>
			<div className="items-container" style={scrollBehavior}>
			{
				categoryList.map((item)=>{
					return(
					<SaleItem setScrollBehavior={setScrollBehavior} saleitem={item} />
					)
				})
			}
			</div>
		</>
	)
}
