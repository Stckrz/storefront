import React from 'react';
import { useEffect, useState } from 'react';
import { IComment } from 'library/contextstuff';
import { Comment } from 'components/comments/comment/comment';
import { NewCommentForm } from 'components/comments/newcomment/newcomment';
import style from './commentsbox.module.css';


interface CommentsBoxProps {
	id: string
}

export const CommentsBox: React.FC<CommentsBoxProps> = ({ id }) => {
	const [comments, setComments] = useState<IComment[]>([])

	async function fetchComments() {
		const response = await fetch(`http://127.0.0.1:8000/sale-items/SaleItem/${id}/comments?format=json`);
		const fetchedData = await response.json();
		if (response.status === 200) {
			setComments(fetchedData)
		} else {
			setComments([])
		}
	}



	useEffect(() => {
		fetchComments()
	}, [id])
	console.log('b')
	return (
		<>
			<NewCommentForm id={id} onSubmit={fetchComments} />
			{comments.length > 0 &&
				<div className={style.commentsContainer}>
					{comments.map((comment) => {
						return (
							<Comment comment={comment} />
						)
					})}
				</div>
			}
		</>
	)
}
