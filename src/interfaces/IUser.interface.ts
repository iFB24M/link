export interface IUser {
	id: number
	username: string
	email: string
	bio?: string | null
	badge?: string | null
	password: string
	avatar?: string | null
	subscribedTo?: string | null
	subscribers?: number | null
	savedArticles?: string | null
}

export interface ISetUser extends Partial<IUser> { }
