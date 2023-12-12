import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from 'library/contextstuff';
import { ItemsDatabase } from 'pages/layout/layout';
import './itemsearch.css';


export const ItemSearch: React.FC = () => {
	const [searchText, setSearchText] = useState<string>("");
	const { data } = useContext(ItemsDatabase)

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchText(e.target.value.toLowerCase());
	};

	function handleSearch() {
		return data.filter((item: IProduct) => item.title.toLowerCase().includes(searchText));
	};

	return (
		<>
			<div className="searchbar-container">
				<input onChange={handleChange} />
				<div className="search-results-container">
					{searchText !== "" &&
						<div>
							{
								handleSearch().map((item: IProduct) => {
								return (
										<Link to={`/products/${item.id}`}>
									<div className="compressed-item-container">
											<div className="compressed-item-img"><img src={item.image} /></div>
											<div className="compressed-item-details">
												<div className="compressed-item-title">{(item.title).toUpperCase()}</div>
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
