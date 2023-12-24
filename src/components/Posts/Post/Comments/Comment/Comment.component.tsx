import type { ReactElement } from 'react'
import type { CommentProps } from './Comment.props'
import Card from '@/ui/components/Card/Card.component'
import { getUserById } from '@/services/Prisma/getUserById'
import styles from './Comment.module.scss'
import { formatContent } from '../../formatContent'

export const Comment = async (props: CommentProps): Promise<ReactElement> => {
	const user = await getUserById(props.comment.authorId)

	return (
		<Card>
			<strong className={styles.username}>
				{user?.username}
			</strong>
			<p className={styles.content} dangerouslySetInnerHTML={{ __html: formatContent(props.comment.content) }}></p>
		</Card>
	)
}
