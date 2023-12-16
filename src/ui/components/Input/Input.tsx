import type { ReactNode } from 'react'
import type { InputProps } from './Input.props'
import styles from './Input.module.scss'

const Input = (props: InputProps): ReactNode => {
	return (
		<div className={styles.wrapper}>
			<input type="text" {...props} className={styles.input} />
		</div>
	)
}

export default Input
