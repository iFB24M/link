'use server'

import type { IPost } from '@/interfaces/IPost.interface'
import { prisma } from '../../Prisma.service'
import type { IResponse } from '@/interfaces/IResponse.interface'

interface IPostWhere {
	authorId?: number[]
	id?: number
}

export const getPosts = async (where: IPostWhere, maxPosts: number = 100): Promise<IResponse<IPost[]>> => {
	try {
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

		return { ok: true, message: 'success', code: 200, data: posts }
	} catch {
		return { ok: false, message: 'user not found', code: 404 }
	}
}
