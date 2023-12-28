import type { IUser } from '@/interfaces/IUser.interface'

export interface UserProfileProps {
	addPostButton?: boolean
	subscribeButton?: boolean
	selfProfile?: boolean
	postsCount: number
	user: IUser
}
