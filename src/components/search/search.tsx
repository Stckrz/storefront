import React, { SetStateAction, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

//styles
import style from './search.module.css';

//hooks
import { useDebounce } from 'hooks/useDebounce';
import { useClickOutside } from 'hooks/useClickOutside';

//context
import { IProduct } from 'library/contextstuff';

//api
import { fetchItemByString } from 'library/api/saleitemfetch';

interface SearchProps{
	setShowSearch: React.Dispatch<SetStateAction<boolean>>
}

export const Search: React.FC<SearchProps> = ({ setShowSearch }) => {
	const [data, setData] = useState<IProduct[]>([])
	const [searchText, setSearchText] = useState<string>("");
	const debouncedValue = useDebounce(searchText, 200)
	
	//useRef stuff
	const searchWrapperRef = useRef(null)

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchText(e.target.value.toLowerCase());
	};

	//cart items fetch
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

	useClickOutside(searchWrapperRef, ()=>{setShowSearch(false)})
	return (
		<>
			<div ref={searchWrapperRef} className={style.searchbarContainer}>
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
