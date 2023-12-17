'use server'

import { prisma } from '@/services/Prisma.service'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const confirmEmail = async (formData: FormData) => {
	const rawData = {
		code: formData.get('code')! as string
	}

	if (cookies().get('confirm_code')?.value === rawData.code.trim()) {
		await prisma.user.create({
			data: {
				email: cookies().get('temp_email')!.value,
				password: cookies().get('temp_password')!.value,
				username: cookies().get('temp_username')!.value
			}
		})

		redirect('/login')
	}
}
