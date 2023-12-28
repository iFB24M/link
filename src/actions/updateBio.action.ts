'use server'

import { exists } from '@/functions/exists'
import { parseUser } from '@/functions/parseUser'
import { updateUser } from '@/services/Prisma/updateUser'
import { revalidatePath } from 'next/cache'

export const updateBio = async (formData: FormData): Promise<void> => {
	const rawData = {
		newBio: exists(formData.get('new-bio')) as string
	}

	const user = await parseUser()

	const email = user?.email !== null ? user?.email : ''
	const password = user?.password !== null ? user?.password : ''

	await updateUser(exists(email), exists(password), { bio: rawData.newBio })

	revalidatePath('/profile')
}
