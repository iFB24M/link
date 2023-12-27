import type { ReactNode } from 'react'
import styles from './Logo.module.scss'
import Link from 'next/link'

export const Logo = (): ReactNode => {
	return (
		<Link prefetch={false} href="/" className={styles.logo}>NextLink</Link>
	)
}
