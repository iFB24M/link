import styles from './page.module.scss'
import dynamic from 'next/dynamic'
import { getUser } from '@/services/Prisma/getUser'
import { updatePost } from '@/actions/updatePost.action'
import { getPostById } from '@/services/Prisma/post/getById'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const SubmitButton = dynamic(() => import('@/components/SubmitButton/SubmitButton.component'))

const Post = async ({ params }: { params: { id: string } }) => {
	const post = await getPostById(+params.id)

	const user = await getUser()

	const now = post?.publishDate
	const date = `${now?.getDate()}.${now?.getMonth()! + 1}.${now?.getFullYear()}`

	return (
		<main className={styles.main}>
			<Container className={styles.container}>
				<form action={updatePost} className={styles.form}>
					<input type="text" style={{ display: 'none' }} name="id" value={post?.id} />
					<div className={styles.post}>
						<textarea className={styles.textarea} name="content" id="" placeholder="Текст поста">{post?.content}</textarea>
					</div>
					<div className={styles.sidebar}>
						<div className={styles.sidebarBlock}>
							<span className={styles.title}>Изменить пост</span>
						</div>
						<div className={styles.sidebarBlock}>
							Автор: {user?.username}
						</div>
						<div className={styles.sidebarBlock}>
							Дата публикации: {date}
						</div>
						<SubmitButton className={styles.button} icon="update">Изменить</SubmitButton>
					</div>
				</form>
			</Container>
		</main>
	)
}

export default Post
