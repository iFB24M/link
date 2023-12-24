import type { ReactElement } from 'react'
import styles from './Posts.module.scss'
import dynamic from 'next/dynamic'
import type { IPost } from '@/interfaces/IPost.interface'
import { exists } from '../../functions/exists'

const Post = dynamic(() => import('./Post/Post.component'))

const Posts = async (props: { posts: IPost[], controls?: boolean, restore?: boolean }): Promise<ReactElement> => {
	return (
		<div className={styles.posts}>
			{props.posts?.map((post) =>
				<Post key={post.id} id={post.id} restore={props.restore} controls={props.controls} publishDate={post?.publishDate} authorId={exists(post.authorId)} content={post?.content.split('\r\n').join('<br>')} />
			).reverse()}
		</div>
	)
}

export default Posts
