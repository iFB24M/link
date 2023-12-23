import { getPostById } from '@/services/Prisma/post/getById'
import dynamic from 'next/dynamic'

import styles from './page.module.scss'

import { PostProps } from '@/components/Posts/Post/Post.props'
import BackButton from '../../../components/BackButton/BackButton.component';

const Post = dynamic(() => import('@/components/Posts/Post/Post.component'))
const Container = dynamic(() => import('@/components/Container/Container.component'))

const Article = async ({ params }: { params: { id: string } }) => {
	const id = +params.id
	const post = await getPostById(id)

	return (
		<Container>
			<BackButton appearance="transparent" icon="arrow_back" className={styles.button}>Назад</BackButton>
			<Post full {...post as PostProps}></Post>
		</Container>
	)
}

export default Article
