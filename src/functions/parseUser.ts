import type { IUser } from '@/interfaces/IUser.interface'
import { cookies } from 'next/headers'
import { exists } from './exists'
import { getUser } from '@/services/Prisma/getUser'

export const parseUser = async (redirectAfter = false): Promise<IUser> => {
	const str = cookies().get('session_user')?.value
	try {
		return JSON.parse(exists(str))
	} catch {
		console.log('Возможно, пользователь авторизован, но в Cookies его аккаунт не сохранен')
		const user = await getUser(redirectAfter)
		return user as IUser
	}
}
