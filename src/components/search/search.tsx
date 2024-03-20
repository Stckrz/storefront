import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useDebounce } from 'hooks/useDebounce';
import style from './search.module.css';
import { IProduct } from 'library/contextstuff';
import { Link } from 'react-router-dom';

import { fetchItemByString } from 'library/api/saleitemfetch';

export const Search: React.FC = () => {

	const [searchText, setSearchText] = useState<string>("");
	const debouncedValue = useDebounce(searchText, 200)
	const [data, setData] = useState<IProduct[]>([])


	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchText(e.target.value.toLowerCase());
	};

	async function itemSearch() {
		let searchdata = await fetchItemByString(debouncedValue);
		if (searchdata && searchdata.length > 0) {
			setData(searchdata)
		} else {
			setData([])
		}
	}

	useEffect(() => {
		searchText !== "" &&
			itemSearch()
	}, [debouncedValue])

	return (
		<>
			<div className={style.searchbarContainer}>
				<input onChange={handleChange} />
				<div className={style.searchResultsContainer}>
					{searchText !== "" &&
						<div>
							{
								data.map((item: IProduct) => {
									return (
										item.name &&
										<div key={item._id} className={style.compressedItemContainer}>
											<Link to={`/products/${item._id}`}>
												<div className={style.compressedItemImg}><img src={item.image_url} alt={item.name}/></div>
												<div className={style.compressedItemDetails}>
													<div className={style.compressedItemTitle}>{(item.name).toUpperCase()}</div>
													<div>{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}</div>
												</div>
											</Link>
										</div>

									)
								})
							}
						</div>
					}
				</div>
			</div>
		</>
	)
}
