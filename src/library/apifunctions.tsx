import { IComment, ILogin, IRegister } from 'library/contextstuff';

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
		id: null,
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


///////////////////////////////////////////////
export async function sendCommentWithToken(id: string, author: string, body: string, rating: number, token: string) {
	const date = new Date()
	const newComment: IComment = {
		id: null,
		saleitem: parseInt(id),
		author: author,
		body: body,
		rating: rating,
		created_on: date.toString(),
		active: true,
	}
	try {
		const response = await fetch(`http://127.0.0.1:8000/sale-items/SaleItem/${id}/comments`, {
			headers: { "Content-Type": 'application/json', "Authorization": `Bearer ${token}` },
			method: 'POST',
			body: JSON.stringify(newComment)

		});
		const data = await response.json();
		console.log(data);


	} catch (error) {
		console.log(error);
	}


}
/////////////////////////////////////////////////


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



export async function sendAuth(sendData: IRegister) {
	try {

		const response = await fetch('http://127.0.0.1:8000/api/auth/register/', {
			headers: { "Content-Type": 'application/json' },
			method: 'POST',
			body: JSON.stringify(sendData)
		})
		const data = await response.json()
			console.log(data)
			return data
	} catch (error) { console.log(error) }
}



export async function sendLogin(login: ILogin) {
	try {
		const response = await fetch('http://127.0.0.1:8000/api/auth/api-token-auth/', {
			headers: { "Content-Type": 'application/json' },
			method: 'POST',
			body: JSON.stringify(login)
		})
		const data = await response.json()
		console.log(data)
		return data
	} catch (error) { console.log(error) }
}


