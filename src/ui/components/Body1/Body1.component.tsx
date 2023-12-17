import type { ReactNode } from 'react'
import styles from './Body1.module.scss'
import type { TextComponentProps } from '../../interfaces/TextComponent.props'

const Body1 = ({ className, ...props }: TextComponentProps): ReactNode => {
	return (
		<p className={`${className} ${styles.body1}`} {...props}></p>
	)
}

export default Body1
