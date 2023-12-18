import type { ReactElement } from 'react'
import styles from './Posts.module.scss'
import dynamic from 'next/dynamic'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import { exists } from '@/functions/exists'

const Post = dynamic(() => import('./Post/Post.component'))

const Posts = async (props: { authorId: number, username: string }): Promise<ReactElement> => {
	const posts = await getPostsByAuthorId([exists<number>(props.authorId)])

	return (
		<div className={styles.posts}>
			{posts?.map((post) =>
				<Post key={post.id} date={post?.publishDate} authorName={props.username} content={post?.content.split('\r\n').join('<br>')} />
			).reverse()}
		</div>
	)
}

export default Posts
