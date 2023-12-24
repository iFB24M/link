import type { ReactNode } from 'react'
import styles from './MainHeader.module.scss'
import Link from 'next/link'
import { HeaderWrapper } from '../HeaderWrapper/HeaderWrapper.component'
import dynamic from 'next/dynamic'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const Logo = dynamic(() => import('@/components/Logo/Logo.component'))
const Profile = dynamic(() => import('../Profile/Profile.component'))

const MainHeader = (): ReactNode => {
	return (
		<div className={styles.header}>
			<HeaderWrapper scrollClass={styles.scroll}>
				<Container className={styles.container}>
					<Logo />
					<ul className={styles.menu}>
						<li className={styles.menuItem}><Link prefetch={false} href="/post" className={styles.link}>Новый пост</Link></li>
					</ul>
					<Profile />
				</Container>
			</HeaderWrapper>
		</div>
	)
}

export default MainHeader
