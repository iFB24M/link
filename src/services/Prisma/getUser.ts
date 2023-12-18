'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { prisma } from '../Prisma.service'

export const getUser = async (redirectAfter: boolean = true) => {
	if (!cookies().has('link_saved_user') && redirectAfter) redirect('/login')

	const savedData = {
		email: cookies().get('link_saved_user')?.value.split(':')[0],
		password: cookies().get('link_saved_user')?.value.split(':')[1]
	}

	try {

		const user = await prisma.user.findUnique({
			where: savedData
		})
		return user
	}
	catch {
		return undefined
	}
}
