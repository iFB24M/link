'use client'

import type { ReactNode } from 'react'
import styles from './ChangeBioPopup.module.scss'
import dynamic from 'next/dynamic'

const Popup = dynamic(() => import('@/ui/components/Popup/Popup.component'))
const PopupFooter = dynamic(() => import('@/ui/components/PopupFooter/PopupFooter.component'))
const PopupTrigger = dynamic(() => import('@/ui/components/PopupTrigger/PopupTrigger.component'))
const PopupWrapper = dynamic(() => import('@/ui/components/PopupWrapper/PopupWrapper.component'))

const Button = dynamic(() => import('@/ui/components/Button/Button.component'))

export interface CustomPopupProps {
	buttonContent: ReactNode
}

const ChangeAvatarPopup = (props: CustomPopupProps): ReactNode => {
	return (
		<Popup className={styles.popup}>
			<PopupWrapper>
				<form>
					<input type="file" name="new-avatar" />
					<PopupFooter>
						<Button appearance="primary">Сохранить</Button>
					</PopupFooter>
				</form>
			</PopupWrapper>
			<PopupTrigger>
				<Button className={styles.changeButton}>{props.buttonContent}</Button>
			</PopupTrigger>
		</Popup>
	)
}

export default ChangeAvatarPopup
