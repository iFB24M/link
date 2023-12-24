'use client'

import dynamic from 'next/dynamic'

import type { CopyButtonProps } from './CopyButton.props'
import { type ReactElement } from 'react'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'

const Popup = dynamic(() => import('@/ui/components/Popup/Popup.component'))
const PopupWrapper = dynamic(() => import('@/ui/components/PopupWrapper/PopupWrapper.component'))
const PopupFooter = dynamic(() => import('@/ui/components/PopupFooter/PopupFooter.component'))
const PopupTrigger = dynamic(() => import('@/ui/components/PopupTrigger/PopupTrigger.component'))
const Button = dynamic(() => import('@/ui/components/Button/Button.component'))

const CopyButton = ({ text, ...props }: CopyButtonProps): ReactElement => {
	const copy = useCopyToClipboard(text)

	return (
		<Popup>
			<PopupWrapper>
				Ссылка на профиль ({text}) скопирована
				<PopupFooter></PopupFooter>
			</PopupWrapper>
			<PopupTrigger>
				<div onClick={() => { copy() }}>
					<Button {...props} />
				</div>
			</PopupTrigger>
		</Popup>
	)
}

export default CopyButton
