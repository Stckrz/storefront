import React from 'react';
import { useState } from 'react';
import { IComment } from 'library/contextstuff';
import style from './newcomment.module.css';

import { sendComment, fetchComments } from 'library/apifunctions';

import { RatingStarsPicker } from 'components/star-rating/star-picker';

interface NewCommentFormProps {
	id: string,
	onSubmit?: (newComment: IComment | undefined) => void,
	setComments: any
}

export const NewCommentForm: React.FC<NewCommentFormProps> = ({ id, onSubmit, setComments }) => {
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

	function sendCommentCallbackHandler(){
		const date = new Date()
		const newComment: IComment = {
			saleitem: parseInt(id),
			author: author,
			body: body,
			rating: rating,
			created_on: date.toString(),
			active: true,
		}
		sendComment(id, author, body, rating)
		fetchComments(id).then((item:any)=>setComments(item))
		onSubmit?.(newComment)

	}

	return (
		<>
			{showForm ?
				<div className={style.commentFormWrapper}>
					<div className={style.ratingForm} >Rating:
						<RatingStarsPicker setRating={setRating} />
					</div>
					<div className={style.authorForm}>Author:
						<input className={style.inputAuthor} onChange={handleAuthorChange} />
					</div>
					<div className={style.bodyForm}>
						Body:
						<textarea className={style.inputBody} onChange={handleBodyChange} />
					</div>
					<button onClick={sendCommentCallbackHandler}>submit</button>
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
