'use server'

import type { ReactElement } from 'react'

import { getUserByUsername } from '@/services/Prisma/getUserByUsername'
import { exists } from '@/functions/exists'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'

import type { IPost } from '@/interfaces/IPost.interface'
import type { Metadata } from 'next'
import { Container } from '@/components/Container/Container.component'
import { UserProfile } from '@/components/UserProfile/UserProfile.component'
import { Posts } from '@/components/Posts/Posts.component'

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
	const posts = await getPostsByAuthorId([exists(user?.id)])

	return (
		<Container>
			<UserProfile username={props.params.username} />
			<Posts posts={posts as IPost[]} />
		</Container>
	)
}

export default Welcome
