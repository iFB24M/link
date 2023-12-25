import type { ReactNode } from 'react'
import styles from './MainHeader.module.scss'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Burger from '../Burger/Burger.component'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const Logo = dynamic(() => import('@/components/Logo/Logo.component'))
const Profile = dynamic(() => import('../Profile/Profile.component'))

const MainHeader = (): ReactNode => {
	return (
		<div className={styles.header}>
			<Container className={styles.container}>
				<Logo />
				<div className={styles.wrapper}>
					<ul className={styles.menu}>
						<li className={styles.menuItem}><Link prefetch={false} href="/post" className={styles.link}>Новый пост</Link></li>
					</ul>
					<Profile />
				</div>
				<Burger openedClass={styles.opened} />
			</Container>
		</div>
	)
}

export default MainHeader
