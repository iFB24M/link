'use server'

import { getUser } from '@/services/Prisma/getUser'
import { cookies } from 'next/headers'

export const saveSessionUser = async (): Promise<void> => {
	const user = await getUser()

	cookies().set('session_user', JSON.stringify(user))
}
