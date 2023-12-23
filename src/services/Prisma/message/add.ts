import type { IMessage } from '@/interfaces/Message.interface'
import { prisma } from '@/services/Prisma.service'

export const addMessage = async (data: IMessage): Promise<void> => {
	await prisma.message.create({ data })
}
