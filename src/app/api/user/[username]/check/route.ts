import { prisma } from '@/services/Prisma.service'
import { NextRequest } from 'next/server'

export const GET = async (request: NextRequest, { params }: { params: { username: string } }) => {
	const searchParams = new URL(request.url).searchParams
	const gettedPassword = searchParams.get('password')

	const user = await prisma.user.findUnique({
		where: { username: params.username }
	})

	if (!gettedPassword) return Response.json({ ok: false, code: 400, message: 'password not received' })
	if (!user) return Response.json({ ok: false, code: 404, message: `user not found` })

	return Response.json({ ok: true, code: 200, message: 'success', match_password: user.password === gettedPassword })
}