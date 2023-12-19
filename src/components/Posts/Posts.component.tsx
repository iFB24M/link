import type { ReactElement } from 'react'
import styles from './Posts.module.scss'
import dynamic from 'next/dynamic'
import { IPost } from '@/interfaces/IPost.interface'

const Post = dynamic(() => import('./Post/Post.component'))

const Posts = async (props: { posts: IPost[], controls?: boolean }): Promise<ReactElement> => {
	return (
		<div className={styles.posts}>
			{props.posts?.map((post) =>
				<Post key={post.id} id={post.id} controls={props.controls} date={post?.publishDate} authorId={post.authorId!} content={post?.content.split('\r\n').join('<br>')} />
			).reverse()}
		</div>
	)
}

export default Posts
