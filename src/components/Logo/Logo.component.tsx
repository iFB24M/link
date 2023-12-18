import type { ReactNode } from 'react'
import styles from './Logo.module.scss'
import Link from 'next/link'

const Logo = (): ReactNode => {
	return (
		<Link href="/" className={styles.logo}>Link</Link>
	)
}

export default Logo
