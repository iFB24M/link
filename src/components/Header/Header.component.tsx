// 'use client'

import { type ReactNode } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const Container = dynamic(() => import('../Container/Container.component'))
const MainHeader = dynamic(() => import('./MainHeader/MainHeader.component'))

const Header = (): ReactNode => {
	return (
		<>
			<div className={styles.subheader}>
				<Container className={styles.container}>
					<Link className={styles.fb24m} href="https://web.fb24m.ru?utm_source=next-link">
						<Image width={36} height={32} className={styles.logo} src="https://www.fb24m.ru/fb24m/wp-content/uploads/2023/12/logo-1.png" alt="fb24m Logo" />
						fb24m | Pet
					</Link>
				</Container>
			</div>
			<MainHeader />
		</>
	)
}

export default Header
