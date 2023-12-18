import type { ReactNode } from 'react'
import styles from './Post.module.scss'
import type { PostProps } from './Post.props'
import Button from '@/ui/components/Button/Button.component'

const months = [
	'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'новября', 'декабря'
]

const Post = (props: PostProps): ReactNode => {
	console.log(props.date)

	return (
		<div className={styles.post}>
			<div className={styles.author}>
				<div className={styles.avatar}></div>
				<span className={styles.name}>{props.authorName}</span>
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
