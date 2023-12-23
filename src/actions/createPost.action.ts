'use server'

import { exists } from '@/functions/exists'
import { createPost as prisma_createPost } from '@/services/Prisma/createPost'
import { redirect } from 'next/navigation'

export const createPost = async (formData: FormData): Promise<void> => {
	const rawData = {
		content: exists(formData.get('content')) as string
	}

	if (rawData.content.includes('<script>') || rawData.content.includes('<style>')) return

	await prisma_createPost(rawData.content)
	redirect('/profile')
}
