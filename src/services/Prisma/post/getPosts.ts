'use server'

import { prisma } from '../../Prisma.service'

interface IPost {
	publishDate?: Date | null
	id: number
	content: string
	title: string
	imageUrl?: string | null
	authortId?: number | null
}

interface IPostWhere {
	authorId?: number[]
	id?: number
}

export const getPosts = async (where: IPostWhere, maxPosts: number = 100): Promise<IPost[]> => {
	const posts: IPost[] = await prisma.post.findMany({
		where: {
			authorId: { in: where.authorId },
			id: where.id,
			deleted: false
		},
		take: 100,
		orderBy: {
			publishDate: 'asc'
		}
	})

	return posts
}
