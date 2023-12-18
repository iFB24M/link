'use server'

import { createPost as prisma_createPost } from '@/services/Prisma/createPost'
import { redirect } from 'next/navigation'

export const createPost = async (formData: FormData) => {
	const rawData = {
		content: formData.get('content')! as string
	}

	await prisma_createPost(rawData.content)
	redirect('/profile')
}
