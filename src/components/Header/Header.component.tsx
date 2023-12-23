import type { ReactNode } from 'react'
import styles from './Header.module.scss'
import Container from '../Container/Container.component'
import Logo from '../Logo/Logo.component'
import Profile from './Profile/Profile.component'
import Link from 'next/link'

const Header = (): ReactNode => {
	return (
		<>
			<div className={styles.subheader}>
				<Container className={styles.container}>
					<Link className={styles.fb24m} href="https://web.fb24m.ru?utm_source=next-link">
						<img className={styles.logo} src="https://www.fb24m.ru/fb24m/wp-content/uploads/2023/12/logo-1.png" alt="fb24m Logo" />
						fb24m | Pet
					</Link>
				</Container>
			</div >
			<div className={styles.header}>
				<Container className={styles.container}>
					<Logo />
					<ul className={styles.menu}>
						<li className={styles.menuItem}><Link href="/post" className={styles.link}>Новый пост</Link></li>
						<li className={styles.menuItem}><Link href="/messenger" className={styles.link}>Сообщения</Link></li>
					</ul>
					<Profile />
				</Container>
			</div>
		</>
	)
}

export default Header
