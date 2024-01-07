import React from 'react';
import { IComment } from 'library/contextstuff';
import style from './comment.module.css';


interface CommentProps {
	comment: IComment
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
	const post_date = new Date(comment.created_on).toLocaleDateString()

	return (
		<>
			<div className={style.commentWrapper}>
				<div className={style.titlewrap}>
					<p>{comment.author}</p>
					<p>{post_date.toString()}</p>
				</div>
				<p>{comment.rating}</p>
				<p>{comment.body}</p>
			</div>
		</>
	)
}
