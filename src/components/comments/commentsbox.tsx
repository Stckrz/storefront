import React from 'react';
import { useEffect, useState } from 'react';
import { IComment } from 'library/contextstuff';
import { Comment } from 'components/comments/comment/comment';
import { NewCommentForm } from 'components/comments/newcomment/newcomment';
import style from './commentsbox.module.css';

import { fetchComments } from 'library/api/commentfetch';

import { useSelector } from 'react-redux';

interface CommentsBoxProps {
	id: string
}

export const CommentsBox: React.FC<CommentsBoxProps> = ({ id }) => {
	const user = useSelector((state: any) => state.user.value)
	const [comments, setComments] = useState<IComment[]>([])

	async function updateCommentsFromApi() {
		setComments(
			await fetchComments(id)
		)
	}

	useEffect(() => {
		updateCommentsFromApi()
	}, [id])

	return (
		<>
			{user.username &&
				<NewCommentForm id={id} onSubmit={updateCommentsFromApi} setComments={setComments} />
			}
			{comments.length > 0 &&
				<div className={style.commentsContainer}>
					{comments.map((comment) => {
						return (
							<Comment key={comment._id} comment={comment} />
						)
					})}
				</div>
			}
		</>
	)
}
