'use client'

import dynamic from 'next/dynamic'

import type { CopyButtonProps } from './CopyButton.props'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Popup from '@/ui/components/Popup/Popup.component'
import PopupWrapper from '@/ui/components/PopupWrapper/PopupWrapper.component'
import PopupFooter from '@/ui/components/PopupFooter/PopupFooter.component'
import PopupTrigger from '@/ui/components/PopupTrigger/PopupTrigger.component'
const Button = dynamic(() => import('@/ui/components/Button/Button.component'))

const useCopyToClipboard = (textToCopy: string) => {
	const [copied, setCopied] = useState(false)

	useEffect(() => {
		if (copied && typeof navigator !== 'undefined') {
			navigator.clipboard.writeText(textToCopy)
			setCopied(false)
		}
	}, [copied])

	return () => { setCopied(true) }
}

const CopyButton = ({ text, ...props }: CopyButtonProps) => {
	const copy = useCopyToClipboard(text)

	return (
		<Popup>
			<PopupWrapper>
				Ссылка на профиль ({text}) скопирована
				<PopupFooter></PopupFooter>
			</PopupWrapper>
			<PopupTrigger>
				<div onClick={copy}>
					<Button {...props} />
				</div>
			</PopupTrigger>
		</Popup>
	)
}

export default CopyButton
