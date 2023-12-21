'use server'

import { getUser } from "@/services/Prisma/getUser"
import { getUserByUsername } from "@/services/Prisma/getUserByUsername"

import { addMessage as prisma_addMessage } from "@/services/Prisma/message/add"
import { revalidatePath } from "next/cache"

export const addMessage = async (formData: FormData) => {
	const rawData = {
		companion: formData.get('companion-username')! as string,
		message: formData.get('new-message')! as string
	}

	const companion = await getUserByUsername(rawData.companion)
	const user = await getUser()

	const chatName = companion?.id! < user?.id! ? `${companion?.id}+${user?.id}` : `${user?.id}+${companion?.id}`

	await prisma_addMessage({
		chatName,
		author: user?.username!,
		content: rawData.message
	})

	revalidatePath('/user/[username]/messenger')
}
