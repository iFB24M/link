export interface PostProps {
	authorId: number
	authorAvatarUrl?: string
	imageUrl?: string
	content: string
	publishDate?: Date | null
	controls?: boolean
	id: number
	full?: boolean
	title?: string
	restore?: boolean
	likes?: number
}
