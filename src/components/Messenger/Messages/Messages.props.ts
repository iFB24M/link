import { IUser } from "@/interfaces/IUser.interface"
import { IDisplayMessage } from "./DisplayMessage.interface"

export interface MessagesProps {
	messages: IDisplayMessage[]
	user: IUser
}