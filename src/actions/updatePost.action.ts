'use server'

import { updatePost as prisma_updatePost } from '@/services/Prisma/post/update'
import { redirect } from 'next/navigation'

export const updatePost = async (formData: FormData) => {
	const rawData = {
		content: formData.get('content')! as string,
		id: +formData.get('id')! as number,
	}

	await prisma_updatePost(rawData.id, rawData.content)
	redirect('/profile')
}
