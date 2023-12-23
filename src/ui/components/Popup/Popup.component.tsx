'use client'

import { useState, type HTMLAttributes, type ReactNode, createContext } from 'react'
import styles from './Popup.module.scss'

export const PopupContext = createContext({
	togglePopupClassList: (): void => { },
	popupClassList: '',
	wrapperClassName: ''
})

const Popup = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): ReactNode => {
	const [popupClassList, setPopupClassList] = useState('')

	const togglePopupClassList = (): void => {
		popupClassList === '' ? setPopupClassList(styles.opened) : setPopupClassList('')
	}

	return (
		<PopupContext.Provider value={{ togglePopupClassList, popupClassList, wrapperClassName: styles.wrapper }}>
			<div className={`${styles.popup} ${className} ${popupClassList}`} {...props}></div>
		</PopupContext.Provider>
	)
}

export default Popup
