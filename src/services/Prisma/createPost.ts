'use server'

import { exists } from '@/functions/exists'
import { prisma } from '../Prisma.service'
import { getUser } from './getUser'

export const createPost = async (content: string): Promise<void> => {
	const author = await getUser()

	await prisma.post.create({
		data: {
			content: content.split('\r\n').join('<br>'),
			authorId: exists<number>(author?.id)
		}
	})
}
