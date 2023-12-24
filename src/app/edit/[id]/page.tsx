import { getPostById } from '@/services/Prisma/post/getById'
import type { ReactElement } from 'react'
import dynamic from 'next/dynamic'
import { exists } from '@/functions/exists'

const Editor = dynamic(() => import('@/components/Editor/Editor.component'))

const Post = async ({ params }: { params: { id: string } }): Promise<ReactElement> => {
	const post = await getPostById(+params.id)

	return (
		<Editor post={exists(post)} />
	)
}

export default Post
