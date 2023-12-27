'use server'

import { prisma } from '../Prisma.service'

interface IPost {
	publishDate?: Date | null
	id: number
	content: string
	title: string
	imageUrl?: string | null
	authortId?: number | null
}

export const getPostsByAuthorId = async (id: number[], maxPosts: number = 100): Promise<IPost[]> => {
	const posts: IPost[] = await prisma.post.findMany({
		where: {
			authorId: {
				in: id
			},
			deleted: false
		},
		take: 100,
		orderBy: {
			publishDate: 'asc'
		}
	})

	return posts
}
