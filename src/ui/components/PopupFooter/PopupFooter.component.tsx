'use client'

import { useContext, type HTMLAttributes, type ReactNode } from 'react'
import styles from './PopupFooter.module.scss'
import { PopupContext } from '../Popup/Popup.component'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/ui/components/Button/Button.component'))

const PopupFooter = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>): ReactNode => {
	const popup = useContext(PopupContext)

	return (
		<div className={`${className} ${styles.footer}`} {...props}>
			<div onClick={() => { popup.togglePopupClassList() }}>
				<Button appearance="secondary">Закрыть</Button>
			</div>
			{children}
		</div>
	)
}

export default PopupFooter
