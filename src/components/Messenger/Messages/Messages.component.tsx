'use client'

import { MessagesProps } from './Messages.props'
import styles from './Messages.module.scss'
import { useEffect } from 'react'

export const Messages = (props: MessagesProps) => {
	useEffect(() => {
		document.documentElement.scrollIntoView({
			'behavior': 'smooth',
			block: 'end'
		})
	}, [props.messages])

	console.log('update')

	return (
		<div className={styles.messages}>
			{props.messages.map((message) =>
				<div className={`${styles.messageWrapper} ${message.author === props.user?.username ? styles.self : ''}`}>
					<div className={styles.message}>
						{message.content}
						<span className={styles.date}>{message.date.getHours()}:{message.date.getMinutes() <= 9 ? '0' + message.date.getMinutes() : message.date.getMinutes()}</span> <br />
					</div>
				</div>
			)}
		</div>
	)
}