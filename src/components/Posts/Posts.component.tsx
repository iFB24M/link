import type { ReactElement } from 'react'
import styles from './Posts.module.scss'
import dynamic from 'next/dynamic'
import { getUser } from '@/services/Prisma/getUser'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import { exists } from '@/functions/exists'

const Post = dynamic(() => import('./Post/Post.component'))

const Posts = async (): Promise<ReactElement> => {
	const user = await getUser()
	const posts = await getPostsByAuthorId(exists<number>(user?.id))

	return (
		<div className={styles.posts}>
			{posts.map((post) =>
				<Post key={post.id} authorName={exists(user?.username)} content={post?.content.split('\r\n').join('<br>')} />
			)}
		</div>
	)
}

export default Posts
