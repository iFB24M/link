'use server'

import { cookies } from 'next/headers'
import { getUser } from './getUser'

export const revalidateSelf = async (): Promise<void> => {
	const user = await getUser()

	cookies().set('session_user', JSON.stringify(user))
}
