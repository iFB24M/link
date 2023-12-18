import type { ReactNode } from 'react'
import styles from './Profile.module.scss'
import Link from 'next/link'

const Profile = (): ReactNode => {
	return (
		<Link href="/profile" className={styles.profile}>
			fb24m
		</Link>
	)
}

export default Profile
