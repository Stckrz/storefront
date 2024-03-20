import { IProduct } from 'library/contextstuff';

//fetches all items in the Sale-Items database
export async function fetchAllItems() {
	try {
		const response = await fetch('http://127.0.0.1:5000/sale-items/getAll');
		const fetchedData = await response.json();
		return fetchedData
	}
	catch (error) { console.log(error) }
}

//fetches all items with a specific category
export async function fetchItemsByCategory(category: string) {
	try {
		const response = await fetch(`http://127.0.0.1:5000/sale-items/getAllByCategory/${category}`)
		const fetchedData = await response.json();
		return fetchedData
	} catch (error) { console.log(error) }
}

//fetches an item by it's mongodb id
export async function fetchItemById(id: string) {
	try {
		const response = await fetch(`http://127.0.0.1:5000/sale-items/getOne/${id}`)
		const fetchedData = await response.json();
		return fetchedData
	} catch (error) { console.log(error) }
}

//fetches an id by a search string
export async function fetchItemByString(string: string) {
	try {
		const response = await fetch(`http://127.0.0.1:5000/sale-items/getOneByString/${string}`)
		const fetchedData = await response.json();
		return fetchedData
	} catch (error) { console.log(error) }
}

//posts a new item
export async function addItem(postdata: IProduct) {
	try {
		const response = await fetch('http://127.0.0.1:5000/sale-items/post', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postdata)
		})
		const data = await response.json()
		return data
	}
	catch (error) { console.log(error) }
}
