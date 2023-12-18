import type { ReactElement } from 'react'
import styles from './Post.module.scss'
import type { PostProps } from './Post.props'
import Button from '@/ui/components/Button/Button.component'
import { getUserByUsername } from '@/services/Prisma/getUserByUsername'
import Link from 'next/link'
import { getUserById } from '@/services/Prisma/getUserById'

const months = [
	'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'новября', 'декабря'
]

const Post = async (props: PostProps): Promise<ReactElement> => {
	const user = await getUserById(props.authorId)

	return (
		<div className={styles.post}>
			<div className={styles.author}>
				<div className={styles.avatar}></div>
				<Link href={`/user/${user?.username}`} className={styles.name}>{user?.username}</Link>
				<span className={styles.date}>{props.date?.getDate()} {months[props.date?.getMonth()!]}, {props.date?.getFullYear()}</span>
				<div className={styles.actions}>
					<Button>Изменить</Button>
				</div>
			</div>
			<div className={styles.content} dangerouslySetInnerHTML={{ __html: props.content }}></div>
		</div>
	)
}

export default Post
