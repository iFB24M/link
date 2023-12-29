'use server'

import type { ISetUser } from '@/interfaces/IUser.interface'
import { prisma } from '@/services/Prisma.service'

export const updateUser = async (email: string, password: string, data: ISetUser): Promise<void> => {
	await prisma.user.update({
		where: { email, password },
		data
	})
}
