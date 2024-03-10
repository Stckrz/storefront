import React from 'react';
import { IComment } from 'library/contextstuff';
import { RatingStars } from 'components/star-rating/star-rating';
import style from './comment.module.css';


interface CommentProps {
	comment: IComment
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
	const parsedDate = new Date(comment.created_on!)
	return (
		<>
			<div className={style.commentWrapper}>
				<div className={style.authorContainer}>
					<p>{comment.author}</p>
				</div>
				<div className={style.bodyWrap}>
					<RatingStars rating={comment.rating} />
					<p className={style.commentBody} >{comment.body}</p>
				</div>
				<div className={style.dateContainer}>
					<p>{parsedDate.toLocaleDateString()}</p>
				</div>
			</div>
		</>
	)
}
