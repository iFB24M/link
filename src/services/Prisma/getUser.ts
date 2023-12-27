'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { prisma } from '../Prisma.service'

interface IUser {
	id: number
	avatar?: string | null
	email: string
	username: string
	password: string
	bio?: string | null
	subscribedTo?: string | null
	subscribers?: number | null
	badge?: string | null
}

export const getUser = async (redirectAfter: boolean = true): Promise<IUser | undefined | null> => {
	if (!cookies().has('link_saved_user') && redirectAfter) {
		redirect('/login')
	}

	const savedData = {
		email: cookies().get('link_saved_user')?.value.split(':')[0],
		password: cookies().get('link_saved_user')?.value.split(':')[1]
	}

	try {
		const user: IUser | null = await prisma.user.findUnique({
			where: savedData
		})
		return user
	} catch {
		return undefined
	}
}
