import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Container.module.scss'

const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): ReactNode => {
	return (
		<div className={`${styles.container} ${className}`} {...props}></div>
	)
}

export default Container
