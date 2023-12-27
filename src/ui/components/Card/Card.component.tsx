import type { ReactNode } from 'react'
import styles from './Card.module.scss'
import type { CardProps } from './Card.props'
import { clsx } from '@/functions/clsx'
import { exists } from '@/functions/exists'

export const Card = ({ className, ...props }: CardProps): ReactNode => {
	return (
		<div className={clsx(exists(className), styles.card)} {...props}></div>
	)
}
