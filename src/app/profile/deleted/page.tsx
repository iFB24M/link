import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'

import styles from '../page.module.scss'
import { getUser } from '@/services/Prisma/getUser'
import { Box } from '@/ui/components/Box/Box.component'
import { exists } from '@/functions/exists'
import { getDeletedPostsByAuthorId } from '@/services/Prisma/getDeletedPostsByAuthorId'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const Button = dynamic(() => import('@/ui/components/Button/Button.component'))
const Posts = dynamic(() => import('@/components/Posts/Posts.component'))
const UserProfile = dynamic(() => import('@/components/UserProfile/UserProfile.component'))

const Welcome = async (): Promise<ReactElement> => {
	const user = await getUser()
	const posts = await getDeletedPostsByAuthorId([exists(user?.id)])

	return (
		<Container>
			<UserProfile selfProfile username={exists(user?.username)} />
			<Box direction="row" alignItems="start" gap={8} className={styles.box}>
				<Button icon="arrow_back" appearance="transparent" href="/profile">Назад в профиль</Button>
				<Button appearance="primary" icon="add_circle" href="/post">Новый пост</Button>
			</Box>
			<Posts restore controls posts={posts} />
		</Container>
	)
}

export default Welcome
