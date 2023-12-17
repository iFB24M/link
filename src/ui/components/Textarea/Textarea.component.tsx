import type { ReactNode } from 'react'
import styles from './Textarea.module.scss'
import type { TextareaProps } from './Textarea.props'

const Textarea = (props: TextareaProps): ReactNode => {
	return (
		<div className={styles.wrapper}>
			<textarea {...props} className={styles.textarea}></textarea>
		</div>
	)
}

export default Textarea
