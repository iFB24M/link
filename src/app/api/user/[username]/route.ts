import { prisma } from '@/services/Prisma.service'
import { NextApiRequest, NextApiResponse } from 'next'

export const GET = async (request: NextApiRequest, { params }: { params: { username: string } }) => {
	console.log(params.username)

	const user = await prisma.user.findUnique({
		where: { username: params.username }
	})

	const safeUser = { ...user, password: undefined }

	return Response.json({ ok: true, code: 200, message: 'success', user: safeUser })

	request.destroy()
}
