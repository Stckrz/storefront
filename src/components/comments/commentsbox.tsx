import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { IComment } from 'library/contextstuff';
import { Comment } from 'components/comments/comment/comment';
import { NewCommentForm } from 'components/comments/newcomment/newcomment';
import style from './commentsbox.module.css';

import { fetchComments } from 'library/apifunctions';
import { LoggedInUser } from 'pages/layout/layout';

interface CommentsBoxProps {
	id: string
}

export const CommentsBox: React.FC<CommentsBoxProps> = ({ id }) => {
	const { loggedInUser } = useContext(LoggedInUser)
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
			{loggedInUser !== "default" &&
					<NewCommentForm id={id} onSubmit={updateCommentsFromApi} setComments={setComments} />
			}
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
