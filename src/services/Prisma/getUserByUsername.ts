'use server'

import { prisma } from '../Prisma.service'

export const getUserByUsername = async (username: string) => {
	const user = await prisma.user.findUnique({
		where: { username }
	})

	if (user === null) {
		return undefined
	}

	return user
}
