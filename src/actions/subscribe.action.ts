'use server'

import { checkSubscription } from "@/services/Prisma/checkSubscription"
import { getUser } from "@/services/Prisma/getUser"
import { getUserById } from "@/services/Prisma/getUserById"
import { updateUser } from "@/services/Prisma/updateUser"
import { revalidatePath } from "next/cache"

export const subscribe = async (formData: FormData) => {
	const channelId = formData.get('channel-id')! as string
	const channel = await getUserById(+channelId)
	const user = await getUser()

	console.log(channelId, user)

	if (await checkSubscription(+channelId)) {
		await updateUser(channel?.email!, channel?.password!, {
			subscribers: channel?.subscribers! - 1
		})

		await updateUser(user?.email!, user?.password!, {
			subscribedTo: user?.subscribedTo?.split(`,${channelId},`).join('')
		})
	}
	else {
		await updateUser(user?.email!, user?.password!, {
			subscribedTo: user?.subscribedTo + `,${channelId},`
		})

		await updateUser(channel?.email!, channel?.password!, {
			subscribers: channel?.subscribers! + 1
		})
	}

	revalidatePath('/user')
}
