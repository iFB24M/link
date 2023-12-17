'use client'

import type { ReactNode } from 'react'
import styles from './ChangeBioPopup.module.scss'
import dynamic from 'next/dynamic'
import Textarea from '@/ui/components/Textarea/Textarea.component'
import { updateBio } from '@/actions/updateBio.action'

const Popup = dynamic(() => import('@/ui/components/Popup/Popup.component'))
const PopupFooter = dynamic(() => import('@/ui/components/PopupFooter/PopupFooter.component'))
const PopupTrigger = dynamic(() => import('@/ui/components/PopupTrigger/PopupTrigger.component'))
const PopupWrapper = dynamic(() => import('@/ui/components/PopupWrapper/PopupWrapper.component'))

const Button = dynamic(() => import('@/ui/components/Button/Button.component'))

export interface CustomPopupProps {
	buttonText: string
	currentBio: string | null | undefined
}

const ChangeBioPopup = (props: CustomPopupProps): ReactNode => {
	return (
		<Popup className={styles.popup}>
			<PopupWrapper>
				<form action={updateBio}>
					<Textarea name="new-bio" defaultValue={props.currentBio !== null ? props.currentBio : ''}></Textarea>
					<PopupFooter>
						<Button appearance="primary">Сохранить</Button>
					</PopupFooter>
				</form>
			</PopupWrapper>
			<PopupTrigger>
				<Button className={styles.changeButton}>{props.buttonText}</Button>
			</PopupTrigger>
		</Popup>
	)
}

export default ChangeBioPopup
