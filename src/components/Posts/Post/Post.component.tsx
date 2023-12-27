import type { ReactElement } from 'react'
import styles from './Post.module.scss'
import type { PostProps } from './Post.props'
import Link from 'next/link'
import { getUserById } from '@/services/Prisma/getUserById'
import dynamic from 'next/dynamic'
import { formatDate } from './formatDate'
import { exists } from '@/functions/exists'
import { movePostToDeleted } from '@/actions/movePostToDeleted.action'
import { restorePost } from '@/actions/restorePost'
import { Comments } from './Comments/Comments.component'
import { prisma } from '@/services/Prisma.service'
import CopyButton from '@/components/CopyButton/CopyButton.component'
import { Box } from '@/ui/components/Box/Box.component'
import { Markdown } from '@/components/Markdown/Markdown.component'

const ActionButton = dynamic(() => import('@/components/ActionButton/ActionButton.component'))
const Button = dynamic(() => import('@/ui/components/Button/Button.component'))
const Card = dynamic(() => import('@/ui/components/Card/Card.component'))

const Post = async (props: PostProps): Promise<ReactElement> => {
	const author = await getUserById(props.authorId)

	// let content = props.content
	let content = props.content.split('<br>').join('\n')
	const comments = await prisma.comment.findMany({ where: { postId: props.id } })

	if (content.includes('<script') || content.includes('<style') || content.includes('<head')) {
		content = `<span class="${styles.warning}">Этот пост создает угрозу работе сайта. Поэтому он был удален</span>`
	}

	if (content.length >= 500 && !exists(props.full)) {
		content = content.substring(0, 500) + '...'
	}

	content = content.split('style="').join('data-style="')

	return (
		<>
			<Card className={styles.post}>
				<div className={styles.author}>
					<div className={styles.avatar}></div>
					<div className={styles.userdata}>
						<Link href={`/user/${author?.username}`} className={styles.name}>{author?.username}</Link>
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
				<Markdown>
					{content}
				</Markdown>
				{content.length >= 500 && props.full !== true &&
					<Link className={styles.readMore} href={`/article/${props.id}`}>Читать далее</Link>
				}

				{props.full !== true && <div className={styles.interaction}>
					<Box gap={8} direction="row">
						<Button icon="chat" appearance="secondary" href={`/article/${props.id}#comments`}>Комментарии ({comments.length})</Button>
						<CopyButton success="Ссылка на пост скопирована" text={`https://link.fb24m.ru/article/${props.id}`} icon="share" appearance="secondary">Поделиться</CopyButton>
					</Box>
				</div>
				}
			</Card>
			{props.full === true &&
				<Comments postId={props.id} />
			}
		</>
	)
}

export default Post
