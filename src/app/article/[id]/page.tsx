import { getPostById } from '@/services/Prisma/post/getById'
import dynamic from 'next/dynamic'

import styles from './page.module.scss'

import { type PostProps } from '@/components/Posts/Post/Post.props'
import type { ReactElement } from 'react'
import type { Metadata } from 'next'
import { getUserById } from '@/services/Prisma/getUserById'
import { exists } from '@/functions/exists'

const Post = dynamic(async () => await import('@/components/Posts/Post/Post.component'))
const Container = dynamic(async () => await import('@/components/Container/Container.component'))
const BackButton = dynamic(async () => await import('@/components/BackButton/BackButton.component'))

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
	const post = await getPostById(+params.id)
	const author = await getUserById(+exists(post?.authorId))

	return {
		title: `Пост ${author?.username} на NextLink`,
		description: `${post?.content.slice(0, 100).split('\n').join('')}...`,
		openGraph: {
			title: `Пост ${author?.username} на NextLink`,
			description: `${post?.content.slice(0, 100).split('\n').join('')}...`
		}
	}
}

const Article = async ({ params }: { params: { id: string } }): Promise<ReactElement> => {
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
