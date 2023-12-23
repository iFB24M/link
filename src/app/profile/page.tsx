import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'

import styles from './page.module.scss'
import { getUser } from '@/services/Prisma/getUser'
import Posts from '@/components/Posts/Posts.component'
import { Box } from '@/ui/components/Box/Box.component'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import type { IPost } from '@/interfaces/IPost.interface'
import UserProfile from '@/components/UserProfile/UserProfile.component'
import { exists } from '@/functions/exists'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const Button = dynamic(() => import('@/ui/components/Button/Button.component'))

const Welcome = async (): Promise<ReactElement> => {
	const user = await getUser()
	const posts = await getPostsByAuthorId([exists(user?.id)])

	return (
		<Container className={styles.container}>
			<UserProfile selfProfile username={exists(user?.username)} />
			<Box>
				<Button appearance="primary" icon="add_circle" className={styles.addPostButton} href="/post">Новый пост</Button>
			</Box>
			<Posts controls posts={posts as IPost[]} />
		</Container>
	)
}

export default Welcome
