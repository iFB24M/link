import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'

import styles from './page.module.scss'
import Posts from '@/components/Posts/Posts.component'
import { getUserByUsername } from '@/services/Prisma/getUserByUsername'
import { exists } from '@/functions/exists'
import SubmitButton from '../../../components/SubmitButton/SubmitButton.component';
import { subscribe } from '@/actions/subscribe.action'
import { checkSubscription } from '@/services/Prisma/checkSubscription'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import { IPost } from '@/interfaces/IPost.interface'
import { Metadata } from 'next'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const Body1 = dynamic(() => import('@/ui/components/Body1/Body1.component'))

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
		<Container className={styles.container}>
			<div className={styles.profile}>
				<div className={styles.user}>
					<div className={styles.avatar}></div>
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
					{user?.username} <span className={styles.badge}>{user?.badge}</span> <form action={subscribe}>
						<input type="text" name="channel-id" readOnly className={styles.channelId} value={user?.id} />
						<SubmitButton>
							{await checkSubscription(user?.id!) ? 'Отписаться' : 'Подписаться'}
						</SubmitButton>
					</form>
				</div>
				<div className={styles.about}>
					<Body1 className={styles.bio}>
						{user?.bio}
					</Body1>
				</div>
			</div>
			<Posts posts={posts as IPost[]} />
		</Container>
	)
}

export default Welcome
