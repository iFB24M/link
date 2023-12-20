'use server'

import { prisma } from "@/services/Prisma.service"

export const getPostById = async (id: number) => {
	const post = await prisma.post.findUnique({
		where: { id }
	})

	return post
}
