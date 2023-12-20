import type { ReactElement } from 'react'
import styles from './Post.module.scss'
import type { PostProps } from './Post.props'
import Button from '@/ui/components/Button/Button.component'
import Link from 'next/link'
import { getUserById } from '@/services/Prisma/getUserById'
import ActionButton from '@/components/ActionButton/ActionButton.component'
import { deletePost } from '@/actions/deletePost.action'

const months = [
	'янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'нояб', 'дек'
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

	return (
		<div className={styles.post}>
			<div className={styles.author}>
				<div className={styles.avatar}></div>
				<div className={styles.userdata}>
					<Link href={`/user/${user?.username}`} className={styles.name}>{user?.username}</Link>
					<span className={styles.date}>
						{props.date?.getDate()} {months[props.date?.getMonth()!]} {props.date?.getFullYear()} {props.date?.getHours()}:{props.date?.getMinutes() && props.date?.getMinutes() <= 9 ? `0${props.date?.getMinutes()}` : props.date?.getMinutes()}
					</span>
				</div>
				{props.controls ?
					<div className={styles.actions}>
						<ActionButton appearance="transparent" icon="delete" fields={[{ name: 'post-id', value: `${props.id}` }]} action={deletePost}></ActionButton>
						<Button appearance="transparent" icon="edit" href={`/edit/${props.id}`}></Button>
					</div> : ''}
			</div>
			<div className={styles.content} dangerouslySetInnerHTML={{ __html: content }}></div>
		</div >
	)
}

export default Post
