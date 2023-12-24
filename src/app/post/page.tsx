import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'
const Editor = dynamic(() => import('@/components/Editor/Editor.component'))

const Post = async (): Promise<ReactElement> => {
	const now = new Date()

	return (
		<Editor publishDate={now} new />
	)
}

export default Post
