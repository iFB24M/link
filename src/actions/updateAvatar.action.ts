'use server'

import { prisma } from '@/services/Prisma.service'
import { getUser } from '@/services/Prisma/getUser'
import { updateUser } from '@/services/Prisma/updateUser'
import { revalidatePath } from 'next/cache'

const toDataURL = url => fetch(url)
	.then(response => response.blob())
	.then(blob => new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onloadend = () => resolve(reader.result)
		reader.onerror = reject
		reader.readAsDataURL(blob)
	}))

export const updateAvatar = async (formData: FormData) => {
	const rawData = {
		newAvatar: formData.get('new-avatar')
	}

	console.log(rawData.newAvatar)

	const reader = new window.FileReader()

	reader.onloadend = () => {
		console.log(reader.result)
	}

	reader.readAsDataURL(rawData.newAvatar)

	const user = await getUser()

	const email = user?.email !== null ? user?.email : ''
	const password = user?.password !== null ? user?.password : ''

	await updateUser(
		email!, password!, { avatar: URL.createObjectURL(rawData.newAvatar) }
	)

	revalidatePath('/profile')
}
