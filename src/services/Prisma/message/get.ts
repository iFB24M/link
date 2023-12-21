import { prisma } from "@/services/Prisma.service"

export const getMessages = async (chatName: string) => {
	const messages = await prisma.message.findMany({
		where: { chatName }
	})

	return messages
}