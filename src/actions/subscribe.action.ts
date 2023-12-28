'use server'

import { exists } from '@/functions/exists'
import { parseUser } from '@/functions/parseUser'
import { checkSubscription } from '@/services/Prisma/checkSubscription'
import { getUserById } from '@/services/Prisma/getUserById'
import { updateUser } from '@/services/Prisma/updateUser'
import { revalidatePath } from 'next/cache'

export const subscribe = async (formData: FormData): Promise<void> => {
	const channelId = exists(formData.get('channel-id')) as string
	const channel = await getUserById(+channelId)
	const user = await parseUser(false)

	if (await checkSubscription(+channelId) === true) {
		await updateUser(exists(channel?.email), exists<string>(channel?.password), {
			subscribers: exists(channel?.subscribers) - 1
		})

		await updateUser(exists(user?.email), exists<string>(user?.password), {
			subscribedTo: user?.subscribedTo?.split(`,${channelId},`).join('')
		})
	} else {
		await updateUser(exists(user?.email), exists<string>(user?.password), {
			subscribedTo: user?.subscribedTo + `,${channelId},`
		})

		await updateUser(exists(channel?.email), exists<string>(channel?.password), {
			subscribers: exists(channel?.subscribers) + 1
		})
	}

	revalidatePath('/user')
}
