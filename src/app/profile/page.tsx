import type { ReactElement } from 'react'
import styles from './page.module.scss'

import { getUser } from '@/services/Prisma/getUser'
import { Box } from '@/ui/components/Box/Box.component'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import type { IPost } from '@/interfaces/IPost.interface'
import { exists } from '@/functions/exists'
import { UserProfile } from '@/components/UserProfile/UserProfile.component'
import { Container } from '@/components/Container/Container.component'
import { Button } from '@/ui/components/Button/Button.component'
import { Posts } from '@/components/Posts/Posts.component'

const Welcome = async (): Promise<ReactElement> => {
	const user = await getUser()
	const posts = await getPostsByAuthorId([exists(user?.id)])

	return (
		<Container>
			<UserProfile selfProfile username={exists(user?.username)} />
			<Box direction="row" alignItems="start" gap={8} className={styles.box}>
				<Button appearance="primary" icon="add_circle" href="/post">Новый пост</Button>
				<Button appearance="secondary" icon="delete" href="/profile/deleted">Удаленные</Button>
			</Box>
			<Posts controls posts={posts as IPost[]} />
		</Container>
	)
}

export default Welcome
