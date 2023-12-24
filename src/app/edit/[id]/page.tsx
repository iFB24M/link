import { getPostById } from '@/services/Prisma/post/getById'
import type { ReactElement } from 'react'
import type { IPost } from '@/interfaces/IPost.interface'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('@/components/Editor/Editor.component'))

const Post = async ({ params }: { params: { id: string } }): Promise<ReactElement> => {
	const post = await getPostById(+params.id)

	return (
		<Editor post={post as IPost} />
	)
}

export default Post
