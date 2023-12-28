'use server'

import { exists } from '@/functions/exists'
import { parseUser } from '@/functions/parseUser'
import { prisma } from '@/services/Prisma.service'
import { revalidatePath } from 'next/cache'

export const addComment = async (formData: FormData): Promise<void> => {
	const rawData = {
		text: exists(formData.get('text')) as string,
		post: exists(formData.get('post-id'))
	}

	const user = await parseUser()

	await prisma.comment.create({
		data: {
			postId: +rawData.post,
			authorId: exists(user?.id),
			content: rawData.text
		}
	})

	revalidatePath(`/article/${+rawData.post}`)
}
