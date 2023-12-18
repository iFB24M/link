import type { ReactNode } from 'react'
import styles from './page.module.scss'
import dynamic from 'next/dynamic'
import Title1 from '@/ui/components/Title1/Title1.component'
import { createPost } from '@/actions/createPost.action'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const SubmitButton = dynamic(() => import('@/components/SubmitButton/SubmitButton.component'))

const Post = (): ReactNode => {
	return (
		<Container className={styles.container}>
			<Title1 className={styles.title}>Новый пост</Title1>
			<form action={createPost} className={styles.form}>
				<textarea className={styles.textarea} name="content" id="" placeholder="Текст поста"></textarea>
				<SubmitButton>Добавить</SubmitButton>
			</form>
		</Container>
	)
}

export default Post
