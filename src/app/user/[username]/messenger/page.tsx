import Container from "@/components/Container/Container.component"
import Button from "@/ui/components/Button/Button.component"
import Input from "@/ui/components/Input/Input"
import styles from './page.module.scss'
import { addMessage } from "@/actions/addMessage.action"
import { generateChatName } from "@/services/Prisma/generateChatName"
import { getUser } from "@/services/Prisma/getUser"
import { getMessages } from "@/services/Prisma/message/get"

const Messager = async ({ params }: { params: { username: string } }) => {
	const user = await getUser()
	const chatName = await generateChatName(params.username, user?.username!)
	const messages = await getMessages(chatName)

	return (
		<Container>
			{messages.map((message) => <>{message.author}: {message.content} <br /></>)}

			<form action={addMessage} className={styles.form}>
				<input style={{ display: 'none' }} readOnly value={params.username} name="companion-username" />
				<Input className={styles.input} placeholder="Напишите сообщение..." name="new-message" autoComplete="off" />
				<Button className={styles.button} icon="send" appearance="primary"></Button>
			</form>
		</Container>
	)
}

export default Messager
