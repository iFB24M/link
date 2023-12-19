'use server'

import { deletePost as deletePostById } from '@/services/Prisma/post/delete'
import { revalidatePath } from 'next/cache'

export const deletePost = async (formData: FormData) => {
	const id = +formData.get('post-id')!

	await deletePostById(id)
	revalidatePath('/profile')
}
