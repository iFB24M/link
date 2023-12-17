'use server'

import { prisma } from '@/services/Prisma.service'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const login = async (formData: FormData) => {
	const rawData = {
		email: formData.get('email')! as string,
		password: formData.get('password')! as string
	}

	const user = await prisma.user.findUnique({
		where: {
			email: rawData.email,
			password: rawData.password
		}
	})

	if (user === null) {
		console.log('user not found')
		return {}
	}

	cookies().set('link_saved_user', `${rawData.email}:${rawData.password}`)

	redirect('/profile')
}
