import type { ReactElement } from 'react'

import styles from '../page.module.scss'
import { Box } from '@/ui/components/Box/Box.component'
import { exists } from '@/functions/exists'
import { getDeletedPostsByAuthorId } from '@/services/Prisma/getDeletedPostsByAuthorId'
import { Container } from '@/components/Container/Container.component'
import { UserProfile } from '@/components/UserProfile/UserProfile.component'
import { Button } from '@/ui/components/Button/Button.component'
import { Posts } from '@/components/Posts/Posts.component'
import { parseUser } from '@/functions/parseUser'

const Welcome = async (): Promise<ReactElement> => {
	const user = await parseUser()
	const posts = await getDeletedPostsByAuthorId([exists(user?.id)])

	return (
		<Container>
			<UserProfile selfProfile user={user} postsCount={posts.length} />
			<Box direction="row" alignItems="start" gap={8} className={styles.box}>
				<Button icon="arrow_back" appearance="transparent" href="/profile">Назад в профиль</Button>
				<Button appearance="primary" icon="add_circle" href="/post">Новый пост</Button>
			</Box>
			<Posts restore controls posts={posts} />
		</Container>
	)
}

export default Welcome
