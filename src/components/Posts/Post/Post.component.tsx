import type { ReactElement } from 'react'
import styles from './Post.module.scss'
import type { PostProps } from './Post.props'
import Link from 'next/link'
import { getUserById } from '@/services/Prisma/getUserById'
import dynamic from 'next/dynamic'
import { formatContent } from './formatContent'
import { formatDate } from './formatDate'
import { exists } from '@/functions/exists'
import { movePostToDeleted } from '@/actions/movePostToDeleted.action'
import { restorePost } from '@/actions/restorePost'

const ActionButton = dynamic(() => import('@/components/ActionButton/ActionButton.component'))
const Button = dynamic(() => import('@/ui/components/Button/Button.component'))

const Post = async (props: PostProps): Promise<ReactElement> => {
	const user = await getUserById(props.authorId)

	let content = formatContent(props.content)

	if (content.includes('<script') || content.includes('<style') || content.includes('<head')) {
		content = `<span class="${styles.warning}">Этот пост создает угрозу работе сайта. Поэтому он был удален</span>`
	}

	if (content.length >= 1000 && !exists(props.full)) {
		content = content.substring(0, 1000) + '...'
	}

	content = content.split('style="').join('data-style="')

	return (
		<div className={styles.post}>
			<div className={styles.author}>
				<div className={styles.avatar}></div>
				<div className={styles.userdata}>
					<Link href={`/user/${user?.username}`} className={styles.name}>{user?.username}</Link>
					<span className={styles.date}>{formatDate(props.publishDate)}</span>
				</div>
				{exists(props.controls) || props.controls === true
					? <div className={styles.actions}>
						<Button appearance="transparent" icon="edit" href={`/edit/${props.id}`}></Button>
						{props.restore !== true
							? <ActionButton appearance="transparent" icon="delete" fields={[{ name: 'post-id', value: `${props.id}` }]} action={movePostToDeleted}></ActionButton>
							: <ActionButton appearance="primary" icon="restore_from_trash" fields={[{ name: 'post-id', value: `${props.id}` }]} action={restorePost}></ActionButton>}
					</div>
					: ''}
			</div>
			<div className={styles.content} dangerouslySetInnerHTML={{ __html: content }}></div>
			{content.length >= 1000 && props.full !== true &&
				<Link className={styles.readMore} href={`/article/${props.id}`}>Читать далее</Link>}
		</div>
	)
}

export default Post
