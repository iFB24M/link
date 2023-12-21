import { prisma } from '@/services/Prisma.service'
import { NextRequest } from 'next/server'

export const GET = async (request: NextRequest, { params }: { params: { ids: string } }) => {

	const idsArray = params.ids.split(',').map(item => +item)

	const posts = await prisma.post.findMany({
		where: {
			authorId: {
				in: idsArray
			}
		}
	})

	return Response.json({
		ok: true, message: 'success', code: 200,
		posts: posts
	})
}
