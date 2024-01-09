import React from 'react';
import { useState } from 'react';
import { IComment } from 'library/contextstuff';
import style from './newcomment.module.css';

import { RatingStarsPicker } from 'components/star-rating/star-picker';

interface NewCommentFormProps {
	id: string,
	onSubmit?: (newComment: IComment | undefined) => {}
}

export const NewCommentForm: React.FC<NewCommentFormProps> = ({ id, onSubmit }) => {
	const [showForm, setShowForm] = useState(false)
	const [author, setAuthor] = useState<string>(" ");
	const [body, setBody] = useState<string>(" ");
	const [rating, setRating] = useState<number>(0);


	function handleAuthorChange(e: React.ChangeEvent<HTMLInputElement>) {
		setAuthor(e.target.value)
	}
	function handleBodyChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setBody(e.target.value)
	}


	async function sendComment() {
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
			onSubmit?.(newComment)
			console.log(data);

		} catch (error) { console.log(error) }

	}

	return (
		<>
			{showForm ?
				<div className={style.commentFormWrapper}>
					<p>Author:</p>
					<input onChange={handleAuthorChange} />
					<p>Body:</p>
					<textarea className={style.inputBody} onChange={handleBodyChange} />
					<p>Rating:</p>
					<RatingStarsPicker setRating={setRating} />
					<button onClick={sendComment}>submit</button>
					<button onClick={() => { setShowForm(!showForm) }}>cancel</button>
				</div>
				:
				<div>
					<button onClick={() => { setShowForm(!showForm) }}>add comment</button>
				</div>
			}
		</>
	)
}
