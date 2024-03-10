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

export async function fetchItemById(id: string) {
	try {
		const response = await fetch(`http://127.0.0.1:5000/sale-items/getOne/${id}`)
		const fetchedData = await response.json();
		return fetchedData
	} catch (error) { console.log(error) }
}
