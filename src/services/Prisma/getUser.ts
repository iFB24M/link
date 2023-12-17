'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { prisma } from '../Prisma.service'

export const getUser = async () => {
	if (!cookies().has('link_saved_user')) redirect('/login')

	const savedData = {
		email: cookies().get('link_saved_user')?.value.split(':')[0],
		password: cookies().get('link_saved_user')?.value.split(':')[1]
	}

	const user = await prisma.user.findUnique({
		where: savedData
	})

	if (user === null) {
		return undefined
	}

	return user
}
