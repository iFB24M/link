import styles from './page.module.scss'
import dynamic from 'next/dynamic'
import { getUser } from '@/services/Prisma/getUser'
import { updatePost } from '@/actions/updatePost.action'
import { getPostById } from '@/services/Prisma/post/getById'
import type { ReactElement } from 'react'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const SubmitButton = dynamic(() => import('@/components/SubmitButton/SubmitButton.component'))

const exists = <T,>(obj: T | undefined | null): T => {
	if (obj !== null && typeof obj !== 'undefined') return obj
	else return 0 as T
}

const Post = async ({ params }: { params: { id: string } }): Promise<ReactElement> => {
	const post = await getPostById(+params.id)

	const user = await getUser()

	const now = post?.publishDate
	const date = `${now?.getDate()}.${exists(now?.getMonth()) + 1}.${now?.getFullYear()}`

	return (
		<main className={styles.main}>
			<Container className={styles.container}>
				<form action={updatePost} className={styles.form}>
					<input type="text" style={{ display: 'none' }} name="id" value={post?.id} />
					<div className={styles.post}>
						<textarea className={styles.textarea} name="content" id="" placeholder="Текст поста">{post?.content.split('<br>').join('\n')}</textarea>
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
						<details>
							<summary>Форматирование</summary>
							**<strong>жирный текст</strong>/&nbsp;** <br />
							__<i>курсивный текст</i>/__ <br />
							~~<del>зачеркнутый текст</del>/~~
						</details>
						<SubmitButton className={styles.button} icon="update">Изменить</SubmitButton>
					</div>
				</form>
			</Container>
		</main>
	)
}

export default Post
