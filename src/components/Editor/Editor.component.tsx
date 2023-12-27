import styles from './Editor.module.scss'
import { getUser } from '@/services/Prisma/getUser'
import { updatePost } from '@/actions/updatePost.action'
import type { ReactElement, ReactNode } from 'react'
import type { IPost } from '@/interfaces/IPost.interface'
import { createPost } from '../../actions/createPost.action'
import { exists } from '@/functions/exists'
import { Container } from '@/components/Container/Container.component'
import { SubmitButton } from '@/components/SubmitButton/SubmitButton.component'

export interface EditorProps {
	post?: IPost
	button?: ReactNode
	publishDate?: Date
	new?: boolean
}

export const Editor = async (props: EditorProps): Promise<ReactElement> => {
	const user = await getUser()

	const now = typeof props.post?.publishDate !== 'undefined' ? props.post?.publishDate : props.publishDate
	const date = `${now?.getDate()}.${exists(now?.getMonth()) + 1}.${now?.getFullYear()}`

	return (
		<Container className={styles.container}>
			<form action={props.new === true ? createPost : updatePost} className={styles.form}>
				<input type="text" style={{ display: 'none' }} name="id" readOnly value={props.post?.id} />
				<div className={styles.post}>
					<textarea
						className={styles.textarea}
						name="content"
						id=""
						placeholder="Текст поста"
						defaultValue={props.post?.content.split('<br>').join('\n')}
					/>
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
						**<strong>жирный текст</strong>** <br />
						*<i>курсивный текст</i>* <br />
						~~<del>зачеркнутый текст</del>~~
					</details>
					<SubmitButton className={styles.button} icon={props.new === true ? 'add_circle' : 'update'}>
						{props.new === true ? 'Создать' : 'Изменить'}
					</SubmitButton>
				</div>
			</form>
		</Container>
	)
}
