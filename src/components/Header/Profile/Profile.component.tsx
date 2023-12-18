import type { ReactElement } from 'react'
import styles from './Profile.module.scss'
import Link from 'next/link'
import { getUser } from '@/services/Prisma/getUser'

const Profile = async (): Promise<ReactElement> => {
	const user = await getUser(false)

	return (
		<Link href="/profile" className={styles.profile}>
			{user?.username}
		</Link>
	)
}

export default Profile
