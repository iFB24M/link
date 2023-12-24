import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'

import styles from './page.module.scss'
import { getUser } from '@/services/Prisma/getUser'
import { Box } from '@/ui/components/Box/Box.component'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import type { IPost } from '@/interfaces/IPost.interface'
import { exists } from '@/functions/exists'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const Button = dynamic(() => import('@/ui/components/Button/Button.component'))
const Posts = dynamic(() => import('@/components/Posts/Posts.component'))
const UserProfile = dynamic(() => import('@/components/UserProfile/UserProfile.component'))

const Welcome = async (): Promise<ReactElement> => {
	const user = await getUser()
	const posts = await getPostsByAuthorId([exists(user?.id)])

	return (
		<Container className={styles.container}>
			<UserProfile selfProfile username={exists(user?.username)} />
			<Box direction="row" alignItems="start" gap={8}>
				<Button appearance="primary" icon="add_circle" className={styles.addPostButton} href="/post">Новый пост</Button>
				<Button appearance="secondary" icon="delete" className={styles.addPostButton} href="/profile/deleted">Удаленные</Button>
			</Box>
			<Posts controls posts={posts as IPost[]} />
		</Container>
	)
}

export default Welcome
