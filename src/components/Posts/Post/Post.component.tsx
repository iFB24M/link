import type { ReactElement } from 'react'
import styles from './Post.module.scss'
import type { PostProps } from './Post.props'
import Button from '@/ui/components/Button/Button.component'
import Link from 'next/link'
import { getUserById } from '@/services/Prisma/getUserById'
import ActionButton from '@/components/ActionButton/ActionButton.component'
import { deletePost } from '@/actions/deletePost.action'

const months = [
	'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'новября', 'декабря'
]

const Post = async (props: PostProps): Promise<ReactElement> => {
	const user = await getUserById(props.authorId)

	let content = props.content

	props.content.match(/\*\*[а-яA-Яa-zA-Z0-9!"№;%:?()_+@#$^&-= ]+\*\*/gm)?.forEach((inside) => {
		content = content.replace(inside, `<strong>${inside.split('**').join('')}</strong>`)
	})

	props.content.match(/__[а-яA-Яa-zA-Z0-9!"№;%:?*()+@#$^&-= ]+__/gm)?.forEach((inside) => {
		content = content.replace(inside, `<i>${inside.split('__').join('')}</i>`)
	})

	props.content.match(/~~[а-яA-Яa-zA-Z0-9!"№;%:?*()_+@#$^&-= ]+~~/gm)?.forEach((inside) => {
		content = content.replace(inside, `<del>${inside.split('~~').join('')}</del>`)
	})

	console.log(content)

	return (
		<div className={styles.post}>
			<div className={styles.author}>
				<div className={styles.avatar}></div>
				<Link href={`/user/${user?.username}`} className={styles.name}>{user?.username}</Link> <span className={styles.badge}>{user?.badge}</span>
				<span className={styles.date}>{props.date?.getDate()} {months[props.date?.getMonth()!]}, {props.date?.getFullYear()}</span>
				{props.controls ?
					<div className={styles.actions}>
						<ActionButton appearance="transparent" icon="search" fields={[{ name: 'post-id', value: `${props.id}` }]} action={deletePost}></ActionButton>
						<Button appearance="primary">change</Button>
					</div> : ''}
			</div>
			<div className={styles.content} dangerouslySetInnerHTML={{ __html: content }}></div>
		</div >
	)
}

export default Post
