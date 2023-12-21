import { prisma } from '@/services/Prisma.service'
import { NextRequest } from 'next/server'

export const GET = async (request: NextRequest, { params }: { params: { username: string } }) => {
	console.log(params.username)

	const user = await prisma.user.findUnique({
		where: { username: params.username }
	})

	const safeUser = { ...user, password: undefined }

	return Response.json({ ok: true, code: 200, message: 'success', user: safeUser })
}
