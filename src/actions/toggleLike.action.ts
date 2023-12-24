'use server'

import { getPostById } from '@/services/Prisma/post/getById'
import { exists } from '../functions/exists'
import { getUser } from '@/services/Prisma/getUser'
import { prisma } from '@/services/Prisma.service'
import { revalidatePath } from 'next/cache'

export const toggleLike = async (formData: FormData): Promise<void> => {
	const rawData = {
		postId: +exists(formData.get('post-id'))
	}

	const post = await getPostById(rawData.postId)
	const user = await getUser()

	if (post?.liked?.includes(`/${user?.id}/`) === true) {
		await prisma.post.update({
			where: { id: post.id },
			data: {
				liked: post?.liked?.split(`/${user?.id}/`).join(''),
				likes: exists(post.likes) - 1
			}
		})
	} else {
		await prisma.post.update({
			where: { id: post?.id },
			data: {
				liked: post?.liked + (`/${user?.id}/`),
				likes: +exists(post?.liked) + 1
			}
		})
	}

	revalidatePath('/profile')
	revalidatePath('/user/[username]', 'page')
	revalidatePath('/')
}
