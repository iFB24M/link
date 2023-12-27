import type { ReactElement } from 'react'
import styles from './UserProfile.module.scss'
import type { UserProfileProps } from './UserProfile.props'
import { getUserByUsername } from '@/services/Prisma/getUserByUsername'
import { getPostsByAuthorId } from '@/services/Prisma/getPostsByAuthorId'
import { exists } from '@/functions/exists'
import { checkSubscription } from '@/services/Prisma/checkSubscription'
import { subscribe } from '@/actions/subscribe.action'
import { SubmitButton } from '../SubmitButton/SubmitButton.component'
import { Button } from '@/ui/components/Button/Button.component'
import { CopyButton } from '../CopyButton/CopyButton.component'
import { Body1 } from '@/ui/components/Body1/Body1.component'
import { ChangeBioPopup } from '@/popups/ChangeBioPopup'
import { cookies } from 'next/headers'

export const UserProfile = async (props: UserProfileProps): Promise<ReactElement> => {
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
						<span className={styles.count}>{+exists(user?.subscribers)}</span>
						<span className={styles.description}>подписчики</span>
					</div>
					<div className={styles.counter}>
						<span className={styles.count}>{posts.length}</span>
						<span className={styles.description}>посты</span>
					</div>
				</div>
			</div>
			<div className={styles.username}>
				<div className={styles.userInfo}>
					{user?.username} {user?.badge !== null ? <span className={styles.badge}>{user?.badge}</span> : ''}
				</div>
				<div className={styles.buttons}>
					{props.selfProfile !== true && cookies().has('link_saved_user')
						? <><form action={subscribe}>
							<input type="text" name="channel-id" readOnly className={styles.channelId} value={user?.id} />
							<SubmitButton>
								{await checkSubscription(exists(user?.id)) === true ? 'Отписаться' : 'Подписаться'}
							</SubmitButton>
						</form>
							<Button appearance="secondary" icon="chat" href={`/user/${user?.username}/messenger`}></Button>
						</>
						: ''}
					<CopyButton success="Ссылка на профиль ($0) скопирована" appearance="secondary" icon="share" text={`https://link.fb24m.ru/user/${user?.username}`}>Поделится</CopyButton>
				</div>
			</div>
			<div className={styles.about}>
				<Body1 className={styles.bio}>
					{user?.bio}
				</Body1>
				{props.selfProfile === true
					? <ChangeBioPopup currentBio={user?.bio} buttonText={user?.bio === null || user?.bio === '' ? 'Добавить пару строк о себе' : 'Изменить'} />
					: ''}
			</div>
		</div>
	)
}
