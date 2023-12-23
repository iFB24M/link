'use server'

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

export const getUserById = async (id: number): Promise<IUser | undefined> => {
	const user = await prisma.user.findUnique({
		where: { id }
	})

	if (user === null) {
		return undefined
	}

	return user
}
