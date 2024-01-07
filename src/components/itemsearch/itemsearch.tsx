import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from 'library/contextstuff';
import { ItemsDatabase } from 'pages/layout/layout';
import style from './itemsearch.module.css';


export const ItemSearch: React.FC = () => {
	const [searchText, setSearchText] = useState<string>("");
	const { data } = useContext(ItemsDatabase)

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchText(e.target.value.toLowerCase());
	};

	function handleSearch() {
		return data.filter((item: IProduct) => item.name.toLowerCase().includes(searchText));
	};

	return (
		<>
			<div className={ style.searchbarContainer }>
				<input onChange={handleChange} />
				<div className={ style.searchResultsContainer }>
					{searchText !== "" &&
						<div>
							{
								handleSearch().map((item: IProduct) => {
								return (
										<Link to={`/products/${item.id}`}>
									<div className={ style.compressedItemContainer }>
											<div className={ style.compressedItemImg }><img src={item.image_url} /></div>
											<div className={ style.compressedItemDetails }>
												<div className={ style.compressedItemTitle }>{(item.name).toUpperCase()}</div>
												<div>{Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(item.price)}</div>
											</div>
									</div>
										</Link>
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
