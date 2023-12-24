import type { ReactElement } from 'react'
import styles from './Profile.module.scss'
import { getUser } from '@/services/Prisma/getUser'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/ui/components/Button/Button.component'))

const Profile = async (): Promise<ReactElement> => {
	const user = await getUser(false)

	return (
		<Button appearance="transparent" icon="account_circle" href="/profile" className={styles.profile}>
			{user?.username}
		</Button>
	)
}

export default Profile
