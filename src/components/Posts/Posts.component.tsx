import type { ReactNode } from 'react'
import styles from './Posts.module.scss'
import dynamic from 'next/dynamic'

const Post = dynamic(() => import('./Post/Post.component'))

const Posts = (): ReactNode => {
	return (
		<div className={styles.posts}>
			<Post authorName="fb24m" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, odit nihil saepe eveniet ipsa minima dolor beatae provident aspernatur eaque laboriosam reprehenderit, odio repudiandae nesciunt, illum obcaecati officiis at consectetur?" />
			<Post authorName="fb24m" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, odit nihil saepe eveniet ipsa minima dolor beatae provident aspernatur eaque laboriosam reprehenderit, odio repudiandae nesciunt, illum obcaecati officiis at consectetur?" />
			<Post authorName="fb24m" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, odit nihil saepe eveniet ipsa minima dolor beatae provident aspernatur eaque laboriosam reprehenderit, odio repudiandae nesciunt, illum obcaecati officiis at consectetur?" />
			<Post authorName="fb24m" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, odit nihil saepe eveniet ipsa minima dolor beatae provident aspernatur eaque laboriosam reprehenderit, odio repudiandae nesciunt, illum obcaecati officiis at consectetur?" />
		</div>
	)
}

export default Posts
