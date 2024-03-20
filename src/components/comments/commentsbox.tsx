import React, { useEffect, useState } from 'react';

//styles
import style from './commentsbox.module.css';

//context
import { IComment } from 'library/contextstuff';

//components
import { Comment } from 'components/comments/comment/comment';
import { NewCommentForm } from 'components/comments/newcomment/newcomment';

//api
import { fetchComments } from 'library/api/commentfetch';

//redux
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
