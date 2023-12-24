'use server'

import { exists } from '@/functions/exists'
import { prisma } from '@/services/Prisma.service'
import { getUser } from '@/services/Prisma/getUser'
import { revalidatePath } from 'next/cache'

export const addComment = async (formData: FormData): Promise<void> => {
	const rawData = {
		text: exists(formData.get('text')) as string,
		post: exists(formData.get('post-id'))
	}

	const user = await getUser()

	await prisma.comment.create({
		data: {
			postId: +rawData.post,
			authorId: exists(user?.id),
			content: rawData.text
		}
	})

	revalidatePath(`/article/${+rawData.post}`)
}
