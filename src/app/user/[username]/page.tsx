'use server'

import type { ReactElement } from 'react'

import { getUserByUsername } from '@/services/Prisma/getUserByUsername'
import { exists } from '@/functions/exists'

import type { IPost } from '@/interfaces/IPost.interface'
import type { Metadata } from 'next'
import { Container } from '@/components/Container/Container.component'
import { UserProfile } from '@/components/UserProfile/UserProfile.component'
import { Posts } from '@/components/Posts/Posts.component'
import type { IUser } from '@/interfaces/IUser.interface'
import { getPosts } from '@/services/Prisma/post/getPosts'

export const generateMetadata = async (props: { params: { username: string } }): Promise<Metadata> => {
	const user = await getUserByUsername(props.params.username)

	return {
		title: `Профиль ${user?.username} в NextLink`,
		description: `${exists(user?.bio) !== '' ? user?.bio : 'Описание отсутствует'}`,
		openGraph: {
			title: `Профиль ${user?.username} в NextLink`,
			description: `${exists(user?.bio) !== '' ? user?.bio : 'Описание отсутствует'}`
		}
	}
}

const Welcome = async (props: { params: { username: string } }): Promise<ReactElement> => {
	const user = await getUserByUsername(props.params.username)
	const posts = await getPosts({ authorId: [exists(user?.id)] })

	return (
		<Container>
			<UserProfile user={user as IUser} postsCount={posts.length} />
			<Posts posts={posts as IPost[]} />
		</Container>
	)
}

export default Welcome
