'use server'

import { addMessage as prisma_addMessage } from '@/services/Prisma/message/add'
import { revalidatePath } from 'next/cache'
import { exists } from '../functions/exists'
import { parseUser } from '@/functions/parseUser'
import { getUser } from '@/services/Prisma/getUser'

export const addMessage = async (formData: FormData): Promise<void> => {
	const rawData = {
		companion: exists(formData.get('companion-username')) as string,
		message: exists(formData.get('new-message')) as string
	}

	const companion = await getUser({ username: rawData.companion })
	const user = await parseUser()

	const chatName = exists(companion?.data?.id) < exists(user?.id) ? `${companion?.data?.id}+${user?.id}` : `${user?.id}+${companion?.data?.id}`

	await prisma_addMessage({
		chatName,
		author: exists(user?.username),
		content: rawData.message
	})

	revalidatePath('/user/[username]/messenger')
}
