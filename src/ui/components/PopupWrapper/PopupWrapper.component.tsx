'use client'

import { useContext, type HTMLAttributes, type ReactNode } from 'react'
import styles from './PopupWrapper.module.scss'
import { PopupContext } from '../Popup/Popup.component'

const PopupWrapper = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): ReactNode => {
	const popup = useContext(PopupContext)

	return (
		<div className={`${styles.popup} ${className} ${popup.wrapperClassName}`}>
			<div className={styles.window} {...props}>

			</div>
		</div>
	)
}

export default PopupWrapper
