'use server'

import { prisma } from "@/services/Prisma.service"

export const updatePost = async (id: number, newContent: string) => {
	await prisma.post.update({
		where: { id },
		data: { content: newContent }
	})
}
