import type { ReactNode } from 'react'
import styles from './MainHeader.module.scss'
import Container from '@/components/Container/Container.component'
import Logo from '@/components/Logo/Logo.component'
import Link from 'next/link'
import Profile from '../Profile/Profile.component'
import { HeaderWrapper } from '../HeaderWrapper/HeaderWrapper.component'

const MainHeader = (): ReactNode => {
	return (
		<div className={styles.header}>
			<HeaderWrapper scrollClass={styles.scroll}>
				<Container className={styles.container}>
					<Logo />
					<ul className={styles.menu}>
						<li className={styles.menuItem}><Link href="/post" className={styles.link}>Новый пост</Link></li>
						<li className={styles.menuItem}><Link href="/messenger" className={styles.link}>Сообщения</Link></li>
					</ul>
					<Profile />
				</Container>
			</HeaderWrapper>
		</div>
	)
}

export default MainHeader
