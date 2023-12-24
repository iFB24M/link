'use server'

import { exists } from '@/functions/exists'
import { prisma } from '../Prisma.service'

interface IPost {
	publishDate?: Date | null
	id: number
	content: string
	title: string
	imageUrl?: string | null
	authortId?: number | null
}

export const getDeletedPostsByAuthorId = async (id: number[], maxPosts: number | false = false): Promise<IPost[]> => {
	const posts: IPost[] = await prisma.post.findMany({
		where: {
			authorId: {
				in: id
			},
			deleted: true
		},
		take: exists(maxPosts) === 0 ? +exists(maxPosts) : 100
	})

	return posts
}
