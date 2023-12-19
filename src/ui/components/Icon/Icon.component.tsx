import type { ReactNode } from 'react'
import styles from './Icon.module.scss'
import { iconFont } from '@/fonts'

const Icon = ({ icon }: { icon: string }): ReactNode => {
	return (
		<i className={`${styles.icon} ${iconFont.className}`}>{icon}</i>
	)
}

export default Icon
