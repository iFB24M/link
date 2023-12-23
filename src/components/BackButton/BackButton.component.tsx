'use client'

import Button from '@/ui/components/Button/Button.component'
import { ButtonProps } from '@/ui/components/Button/Button.props'
import { useRouter } from 'next/navigation'

const BackButton = (props: ButtonProps) => {
	const router = useRouter()

	return (
		<div onClick={router.back}>
			<Button {...props}></Button>
		</div>
	)
}

export default BackButton
