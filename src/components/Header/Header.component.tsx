import type { ReactNode } from 'react'
import styles from './Header.module.scss'
import Container from '../Container/Container.component'
import Logo from '../Logo/Logo.component'
import Profile from './Profile/Profile.component';
import Link from 'next/link';

const Header = (): ReactNode => {
	return (
		<div className={styles.header}>
			<Container className={styles.container}>
				<Logo />
				<Profile />
			</Container>
		</div>
	)
}

export default Header
