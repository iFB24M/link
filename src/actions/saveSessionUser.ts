'use server'

import { getSelf } from '@/services/Prisma/getSelf'
import { cookies } from 'next/headers'

export const saveSessionUser = async (): Promise<void> => {
	const user = await getSelf()

	cookies().set('session_user', JSON.stringify(user))
}
