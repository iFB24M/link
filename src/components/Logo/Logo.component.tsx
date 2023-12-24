import type { ReactNode } from 'react'
import styles from './Logo.module.scss'
import Link from 'next/link'

const Logo = (): ReactNode => {
	return (
		<Link prefetch={false} href="/" className={styles.logo}>NextLink</Link>
	)
}

export default Logo
