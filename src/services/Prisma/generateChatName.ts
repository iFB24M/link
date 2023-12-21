import { getUserByUsername } from "./getUserByUsername"

export const generateChatName = async (username1: string, username2: string) => {
	const user1 = await getUserByUsername(username1)
	const user2 = await getUserByUsername(username2)

	if (user1?.id! < user2?.id!) return `${user1?.id}+${user2?.id}`
	else return `${user2?.id}+${user1?.id}`
}