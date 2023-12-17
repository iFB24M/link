'use server'

import { getUser } from '@/services/Prisma/getUser'
import { updateUser } from '@/services/Prisma/updateUser'
import { revalidatePath } from 'next/cache'

export const updateBio = async (formData: FormData) => {
	const rawData = {
		newBio: formData.get('new-bio')! as string
	}

	const user = await getUser()

	const email = user?.email !== null ? user?.email : ''
	const password = user?.password !== null ? user?.password : ''

	await updateUser(email!, password!, { bio: rawData.newBio })

	revalidatePath('/profile')
}
