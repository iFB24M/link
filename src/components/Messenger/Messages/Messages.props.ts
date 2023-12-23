import type { IUser } from '@/interfaces/IUser.interface'
import type { IDisplayMessage } from './DisplayMessage.interface'

export interface MessagesProps {
	messages: IDisplayMessage[]
	user: IUser
}
