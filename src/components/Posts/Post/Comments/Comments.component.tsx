import { addComment } from '@/actions/addComment.action'
import SubmitButton from '@/components/SubmitButton/SubmitButton.component'
import { prisma } from '@/services/Prisma.service'
import Input from '@/ui/components/Input/Input'
import type { ReactElement } from 'react'
import { Comment } from './Comment/Comment.component'
import type { IComment } from '@/interfaces/IComment.interface'
import styles from './Comments.module.scss'
import Card from '@/ui/components/Card/Card.component'
import Title1 from '@/ui/components/Title1/Title1.component'

export const Comments = async ({ postId }: { postId: number }): Promise<ReactElement> => {
	const comments = await prisma.comment.findMany({
		where: { postId }
	})

	return (
		<>
			<Title1 className={styles.title}>Комментарии</Title1>
			<Card className={styles.card} id="comments">
				<form action={addComment} className={styles.form}>
					<Input placeholder="Напишите комментарий..." className={styles.input} name="text" />
					<input name="post-id" value={postId} readOnly style={{ display: 'none' }} />
					<SubmitButton appearance="primary">Оставить комментарий</SubmitButton>
				</form>
			</Card>
			<div className={styles.comments}>
				{comments.length !== 0 ? comments?.map((comment) => <Comment key={comment.id} comment={comment as IComment} />).toReversed() : 'Ваш комментарий будет первым!'}
			</div>
		</>
	)
}
