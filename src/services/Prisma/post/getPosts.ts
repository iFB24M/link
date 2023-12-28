'use server'

import type { IPost } from '@/interfaces/IPost.interface'
import { prisma } from '../../Prisma.service'

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
