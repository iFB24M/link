'use client'

import { MessagesProps } from './Messages.props'
import styles from './Messages.module.scss'
import { useEffect } from 'react'

export const Messages = (props: MessagesProps) => {
	useEffect(() => {
		console.log('update')
	}, [props.messages])

	console.log('update')

	return (
		<div className={styles.messages}>
			{props.messages.map((message) =>
				<div className={`${styles.messageWrapper} ${message.author === props.user?.username ? styles.self : ''}`}>
					<div className={styles.message}> {message.content} <br />
					</div>
				</div>
			)}
		</div>
	)
}