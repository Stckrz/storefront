import React from 'react';
import { useState } from 'react';
import { IComment } from 'library/contextstuff';
import style from './newcomment.module.css';

interface NewCommentFormProps {
	id: string
}

export const NewCommentForm: React.FC<NewCommentFormProps> = ({ id }) => {
	const [author, setAuthor] = useState<string>();
	const [body, setBody] = useState<string>();
	const [rating, setRating] = useState<string>();


	function handleAuthorChange(e: React.ChangeEvent<HTMLInputElement>) {
		setAuthor(e.target.value)
	}
	function handleBodyChange(e: React.ChangeEvent<HTMLInputElement>) {
		setBody(e.target.value)
	}
	function handleRatingChange(e: React.ChangeEvent<HTMLInputElement>) {
		setRating(e.target.value)
	}

	async function sendComment() {
		const date = new Date()
		try {
			const response = await fetch(`http://127.0.0.1:8000/sale-items/SaleItem/${id}/comments`, {
				headers: { "Content-Type": 'application/json' },
				method: 'POST',
				body: JSON.stringify({
					saleitem: id,
					author: author,
					body: body,
					rating: rating,
					created_on: date,
					active: true,
				})
			});

			const data = await response.json();
			console.log(data);

		} catch (error) { console.log(error) }

	}

	return (
		<>
			<div className={style.commentFormWrapper}>
				<p>Author:</p>
				<input onChange={handleAuthorChange} />
				<p>Body:</p>
				<input onChange={handleBodyChange} />
				<p>Rating:</p>
				<input onChange={handleRatingChange} />
				<button onClick={sendComment}>submit</button>
			</div>
		</>
	)
}
