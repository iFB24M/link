import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'

import styles from './page.module.scss'
import { getUser } from '@/services/Prisma/getUser'
import ChangeBioPopup from '@/popups/ChangeBioPopup'
import Posts from '@/components/Posts/Posts.component'
import ChangeAvatarPopup from '../../popups/ChangeAvatarPopup'
import { Box } from '@/ui/components/Box/Box.component'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import { IPost } from '@/interfaces/IPost.interface'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const Body1 = dynamic(() => import('@/ui/components/Body1/Body1.component'))
const Button = dynamic(() => import('@/ui/components/Button/Button.component'))

const Welcome = async (): Promise<ReactElement> => {
	const user = await getUser()
	const posts = await getPostsByAuthorId([user?.id!])

	return (
		<Container className={styles.container}>
			<div className={styles.profile}>
				<div className={styles.user}>
					<ChangeAvatarPopup buttonContent={
						<div className={styles.avatar}></div>
					} />
					<div className={styles.counters}>
						<div className={styles.counter}>
							<span className={styles.count}>0</span>
							<span className={styles.description}>друзья</span>
						</div>
						<div className={styles.counter}>
							<span className={styles.count}>{+user?.subscribers!}</span>
							<span className={styles.description}>подписчики</span>
						</div>
						<div className={styles.counter}>
							<span className={styles.count}>{posts.length}</span>
							<span className={styles.description}>записи</span>
						</div>
					</div>
				</div>
				<div className={styles.username}>
					{user?.username} <span className={styles.badge}>{user?.badge}</span>
				</div>
				<div className={styles.about}>
					<Body1 className={styles.bio}>
						{user?.bio}
					</Body1>
					<ChangeBioPopup currentBio={user?.bio} buttonText={user?.bio === null || user?.bio === '' ? 'Добавить пару строк о себе' : 'Изменить'} />
				</div>
			</div>
			<Box>
				<Button appearance="primary" className={styles.addPostButton} href="/post">Добавить запись</Button>
			</Box>
			<Posts controls posts={posts as IPost[]} />
		</Container>
	)
}

export default Welcome
