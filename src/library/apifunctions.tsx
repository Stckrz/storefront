import { IComment } from 'library/contextstuff';

//fetches all items in the Sale-Items database
export async function fetchAllItems() {
	const response = await fetch('http://127.0.0.1:8000/sale-items/SaleItem/?format=json');
	const fetchedData = await response.json();
	if (response.status === 200) {
		return fetchedData
	} else {
		return []
	}
}

//fetches all comments for the item with the id
export async function fetchComments(id: string) {
	const response = await fetch(`http://127.0.0.1:8000/sale-items/SaleItem/${id}/comments?format=json`);
	const fetchedData = await response.json();
	if (response.status === 200) {
		return fetchedData
	} else {
		return []
	}
}

//sends a new comment to the database
export async function sendComment(id: string, author: string, body: string, rating: number) {
	const date = new Date()
	const newComment: IComment = {
		saleitem: parseInt(id),
		author: author,
		body: body,
		rating: rating,
		created_on: date.toString(),
		active: true,
	}
	try {
		const response = await fetch(`http://127.0.0.1:8000/sale-items/SaleItem/${id}/comments`, {
			headers: { "Content-Type": 'application/json' },
			method: 'POST',
			body: JSON.stringify(newComment)
		});

		const data = await response.json();
		// onSubmit?.(newComment)
		console.log(data);

	} catch (error) { console.log(error) }

}

//returns an array of all of the advertisements in the database
export async function fetchAddUrl() {
	const response = await fetch('http://127.0.0.1:8000/advertisements/Advertisement/?format=json');
	const fetchedData = await response.json();
	if (response.status === 200) {
		return fetchedData
	} else {
		return []
	}
}
