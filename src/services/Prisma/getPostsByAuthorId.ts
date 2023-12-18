'use server'

import { prisma } from '../Prisma.service'

export const getPostsByAuthorId = async (id: number[]) => {
	const posts = await prisma.post.findMany({
		where: {
			authorId: {
				in: id
			}
		}
	})

	return posts
}
