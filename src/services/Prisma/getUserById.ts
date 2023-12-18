'use server'

import { prisma } from '../Prisma.service'

export const getUserById = async (id: number) => {
	const user = await prisma.user.findUnique({
		where: { id }
	})

	if (user === null) {
		return undefined
	}

	return user
}
