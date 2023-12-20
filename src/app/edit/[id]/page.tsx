import type { ReactElement } from 'react'
import styles from './page.module.scss'
import dynamic from 'next/dynamic'
import Title1 from '@/ui/components/Title1/Title1.component'
import { getPostById } from '@/services/Prisma/post/getById'
import { updatePost } from '@/actions/updatePost.action'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const SubmitButton = dynamic(() => import('@/components/SubmitButton/SubmitButton.component'))

const Post = async (props: { params: { id: number } }): Promise<ReactElement> => {
	const post = await getPostById(+props.params.id)

	return (
		<Container className={styles.container}>
			<Title1 className={styles.title}>Изменить пост</Title1>
			<form action={updatePost} className={styles.form}>
				<input style={{ display: 'none' }} readOnly name="id" value={post?.id} />
				<textarea className={styles.textarea} name="content" placeholder="Текст поста" defaultValue={post?.content.replace(/<br>/g, '\n')}>
				</textarea>
				<SubmitButton icon="keyboard_return">Сохранить</SubmitButton>
			</form>
		</Container>
	)
}

export default Post
