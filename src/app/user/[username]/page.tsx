import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'

import styles from './page.module.scss'
import Posts from '@/components/Posts/Posts.component'
import { getUserByUsername } from '@/services/Prisma/getUserByUsername'
import { exists } from '@/functions/exists'
import SubmitButton from '../../../components/SubmitButton/SubmitButton.component';
import { subscribe } from '@/actions/subscribe.action'
import { checkSubscription } from '@/services/Prisma/checkSubscription'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const Body1 = dynamic(() => import('@/ui/components/Body1/Body1.component'))

const Welcome = async (props: { params: { username: string } }): Promise<ReactElement> => {
	const user = await getUserByUsername(props.params.username)

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
							<span className={styles.count}>0</span>
							<span className={styles.description}>записи</span>
						</div>
					</div>
				</div>
				<div className={styles.username}>
					{user?.username} <form action={subscribe}>
						<input type="text" name="channel-id" readOnly className={styles.channelId} value={user?.id} />
						<SubmitButton>
							{await checkSubscription(user?.id!) ? 'Описаться' : 'Подписаться'}
						</SubmitButton>
					</form>
				</div>
				<div className={styles.about}>
					<Body1 className={styles.bio}>
						{user?.bio}
					</Body1>
				</div>
			</div>
			<Posts authorId={exists(user?.id)} username={exists(user?.username)} />
		</Container>
	)
}

export default Welcome
