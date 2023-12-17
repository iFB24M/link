import type { ReactNode } from 'react'
import styles from './Post.module.scss'
import type { PostProps } from './Post.props'

const Post = (props: PostProps): ReactNode => {
	return (
		<div className={styles.post}>
			<div className={styles.author}>
				<div className={styles.avatar}></div>
				<span className={styles.name}>{props.authorName}</span>
			</div>
			<div className={styles.content} dangerouslySetInnerHTML={{ __html: props.content }}></div>
		</div>
	)
}

export default Post
