import { IComment } from 'library/contextstuff';

//fetches all comments for the item with the id
export async function fetchComments(id: string) {
	try {
		const response = await fetch(`http://127.0.0.1:5000/comments/findBySaleItem/${id}`);
		const fetchedData = await response.json();
		return fetchedData
	} catch (error) { console.log(error) }
}

//sends a new comment to the database
export async function sendComment(commentData: IComment) {
	try {
		const response = await fetch(`http://127.0.0.1:5000/comments/post`, {
			headers: { "Content-Type": 'application/json' },
			method: 'POST',
			body: JSON.stringify(commentData)
		});
		const data = await response.json();
		console.log(data);
	} catch (error) { console.log(error) }
}
