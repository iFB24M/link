import type { ReactNode } from 'react'
import styles from './Card.module.scss'
import { CardProps } from './Card.props'
import { clsx } from '@/functions/clsx'

const Card = ({ className, ...props }: CardProps): ReactNode => {
	return (
		<div className={clsx(className!, styles.card)} {...props}></div>
	)
}

export default Card
