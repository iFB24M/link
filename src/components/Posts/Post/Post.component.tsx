import type { ReactElement } from 'react'
import styles from './Post.module.scss'
import type { PostProps } from './Post.props'
import Link from 'next/link'
import { getUserById } from '@/services/Prisma/getUserById'
import { deletePost } from '@/actions/deletePost.action'
import dynamic from 'next/dynamic'
import { formatContent } from './formatContent'
import { formatDate } from './formatDate'
import { exists } from '@/functions/exists'

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
				{!exists(props.controls) || props.controls === false
					? <div className={styles.actions}>
						<Button appearance="transparent" icon="edit" href={`/edit/${props.id}`}></Button>
						<ActionButton appearance="transparent" icon="delete" fields={[{ name: 'post-id', value: `${props.id}` }]} action={deletePost}></ActionButton>
					</div>
					: ''}
			</div>
			<div className={styles.content} dangerouslySetInnerHTML={{ __html: content }}></div>
			{content.length >= 1000 && props.full === false &&
				<Link href={`/article/${props.id}`}>Читать далее</Link>}
		</div>
	)
}

export default Post
