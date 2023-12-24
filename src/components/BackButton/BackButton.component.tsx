'use client'

import type { ButtonProps } from '@/ui/components/Button/Button.props'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import type { ReactElement } from 'react'

const Button = dynamic(() => import('@/ui/components/Button/Button.component'))

const BackButton = (props: ButtonProps): ReactElement => {
	const router = useRouter()

	return (
		<div onClick={() => { router.back() }}>
			<Button {...props}></Button>
		</div>
	)
}

export default BackButton
