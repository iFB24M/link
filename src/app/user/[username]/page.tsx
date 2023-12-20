import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'

import Posts from '@/components/Posts/Posts.component'
import { getUserByUsername } from '@/services/Prisma/getUserByUsername'
import { exists } from '@/functions/exists'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import { IPost } from '@/interfaces/IPost.interface'
import { Metadata } from 'next'
import UserProfile from '@/components/UserProfile/UserProfile.component'

const Container = dynamic(() => import('@/components/Container/Container.component'))

export const generateMetadata = async (props: { params: { username: string } }): Promise<Metadata> => {
	const user = await getUserByUsername(props.params.username)

	return {
		title: `Профиль ${user?.username} в NextLink`,
		description: `${user?.bio ? user.bio : 'Описание отсутствует'}`,
		openGraph: {
			title: `Профиль ${user?.username} в NextLink`,
			description: `${user?.bio ? user.bio : 'Описание отсутствует'}`,
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
