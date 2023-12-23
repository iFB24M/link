'use server'

import { prisma } from '@/services/Prisma.service'

interface IPost {
	publishDate?: Date | null
	id: number
	content: string
	title: string
	imageUrl?: string | null
	authortId?: number | null
}

export const getPostById = async (id: number): Promise<IPost | null> => {
	const post = await prisma.post.findUnique({
		where: { id }
	})

	return post
}
