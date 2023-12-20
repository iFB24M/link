'use server'

import { prisma } from '../Prisma.service'

export const getPostsByAuthorId = async (id: number[], maxPosts: number | false = false) => {
	const posts = await prisma.post.findMany({
		where: {
			authorId: {
				in: id
			}
		},
		take: maxPosts ? maxPosts : 100
	})

	return posts
}
