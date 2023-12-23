'use server'

import { exists } from '@/functions/exists'
import { updatePost as prisma_updatePost } from '@/services/Prisma/post/update'
import { redirect } from 'next/navigation'

export const updatePost = async (formData: FormData): Promise<void> => {
	const rawData = {
		content: exists(formData.get('content')) as string,
		id: +exists(formData.get('id'))
	}

	if (rawData.content.includes('<script>') || rawData.content.includes('<style>')) return

	await prisma_updatePost(rawData.id, rawData.content)
	redirect('/profile')
}
