import type { ReactElement } from 'react'
import styles from './UserProfile.module.scss'
import { UserProfileProps } from './UserProfile.props'
import { getUserByUsername } from '@/services/Prisma/getUserByUsername'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import { exists } from '@/functions/exists'
import { checkSubscription } from '@/services/Prisma/checkSubscription'
import SubmitButton from '../SubmitButton/SubmitButton.component'
import Body1 from '@/ui/components/Body1/Body1.component'
import { subscribe } from '@/actions/subscribe.action'
import ChangeBioPopup from '@/popups/ChangeBioPopup'
import Button from '@/ui/components/Button/Button.component'

const UserProfile = async (props: UserProfileProps): Promise<ReactElement> => {
	const user = await getUserByUsername(props.username)
	const posts = await getPostsByAuthorId([exists(user?.id)])

	return (
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
						<span className={styles.description}>посты</span>
					</div>
				</div>
			</div>
			<div className={styles.username}>
				{user?.username} <span className={styles.badge}>{user?.badge}</span>
				{!props.selfProfile ? <>
					<form action={subscribe}>
						<input type="text" name="channel-id" readOnly className={styles.channelId} value={user?.id} />
						<SubmitButton>
							{await checkSubscription(user?.id!) ? 'Отписаться' : 'Подписаться'}
						</SubmitButton>
					</form>
					<Button appearance="secondary" icon="chat" href={`/user/${user?.username}/messenger`}></Button>
				</> : ''}
			</div>
			<div className={styles.about}>
				<Body1 className={styles.bio}>
					{user?.bio}
				</Body1>
				{props.selfProfile ?
					<ChangeBioPopup currentBio={user?.bio} buttonText={user?.bio === null || user?.bio === '' ? 'Добавить пару строк о себе' : 'Изменить'} />
					: ''}
			</div>
		</div>
	)
}

export default UserProfile
