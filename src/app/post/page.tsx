import styles from './page.module.scss'
import dynamic from 'next/dynamic'
import { createPost } from '@/actions/createPost.action'
import { getUser } from '@/services/Prisma/getUser'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const SubmitButton = dynamic(() => import('@/components/SubmitButton/SubmitButton.component'))

const Post = async () => {
	const user = await getUser()

	const now = new Date()
	const date = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`

	return (
		<main className={styles.main}>
			<Container className={styles.container}>
				<form action={createPost} className={styles.form}>
					<div className={styles.post}>
						<textarea className={styles.textarea} name="content" id="" placeholder="Текст поста"></textarea>
					</div>
					<div className={styles.sidebar}>
						<div className={styles.sidebarBlock}>
							<span className={styles.title}>Новый пост</span>
						</div>
						<div className={styles.sidebarBlock}>
							Автор: {user?.username}
						</div>
						<div className={styles.sidebarBlock}>
							Дата публикации: {date}
						</div>

						<details>
							<summary>Форматирование</summary>
							**<strong>жирный текст</strong>/** <br />
							__<i>курсивный текст</i>/__ <br />
							~~<del>зачеркнутый текст</del>/~~
						</details>
						<SubmitButton className={styles.button} icon="post_add">Опубликовать</SubmitButton>
					</div>
				</form>
			</Container>
		</main>
	)
}

export default Post
