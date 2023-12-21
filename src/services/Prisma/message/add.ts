import type { IMessage } from "@/interfaces/Message.interface"
import { prisma } from "@/services/Prisma.service"

export const addMessage = async (data: IMessage) => {
	const newMessage = await prisma.message.create({ data })

	return newMessage
}
