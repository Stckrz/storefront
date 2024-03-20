import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//styles
import style from './newcomment.module.css';
import formStyles from 'library/formStyles.module.css';

//context
import { IComment } from 'library/contextstuff';

//api
import { sendComment, fetchComments } from 'library/api/commentfetch';

//components
import { RatingStarsPicker } from 'components/star-rating/star-picker';

interface NewCommentFormProps {
	id: string,
	onSubmit?: (newComment: IComment | undefined) => void,
	setComments: any
}

export const NewCommentForm: React.FC<NewCommentFormProps> = ({ id, onSubmit, setComments }) => {
	const [showForm, setShowForm] = useState(false);
	const [body, setBody] = useState<string>(" ");
	const [rating, setRating] = useState<number>(0);

	//redux
	const user = useSelector((state: any) => state.user.value);

	function handleBodyChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setBody(e.target.value)
	}

	function sendCommentCallbackHandler() {
		const newComment: IComment = {
			author: user.username,
			body: body,
			rating: rating,
			sale_item_id: id
		}
		sendComment(newComment)
		fetchComments(id).then((item: any) => setComments(item))
		onSubmit?.(newComment)
	}

	return (
		<>
			{showForm
				? <div className={style.commentFormWrapper}>
					<div className={style.ratingForm} >Rating:
						<RatingStarsPicker setRating={setRating} />
					</div>
					<div className={style.bodyForm}>
						Body:
						{user.username}
						<textarea className={style.inputBody} onChange={handleBodyChange} />
					</div>
					<div className={style.buttonBox} >
						<button className={formStyles.formButton} onClick={sendCommentCallbackHandler}>submit</button>
						<button className={formStyles.formButton} onClick={() => { setShowForm(!showForm) }}>cancel</button>
					</div>
				</div>
				: <div className={style.newCommentButtonBox} >
					<button className={formStyles.formButton} onClick={() => { setShowForm(!showForm) }}>add comment</button>
				</div>
			}
		</>
	)
}
