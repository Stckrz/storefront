import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { CartContents, ICartItem } from 'pages/layout/layout';
import { ItemsDatabase, IProduct } from 'pages/layout/layout';
import './itemsearch.css';


export const ItemSearch: React.FC = () => {
	const [searchText, setSearchText] = useState<string>("a");
	const { cart } = useContext(CartContents);
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
						{handleSearch().map((item) => {
							return (
								<div>{item.title}</div>
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
