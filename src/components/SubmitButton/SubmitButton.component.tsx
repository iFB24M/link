'use client'

import type { ReactNode } from 'react'
import styles from './SubmitButton.module.scss'
import dynamic from 'next/dynamic'
import Spinner from '@/ui/components/Spinner/Spinner.component'
import { useFormStatus } from 'react-dom'
import type { ButtonProps } from '@/ui/components/Button/Button.props'

const Button = dynamic(() => import('@/ui/components/Button/Button.component'))

const SubmitButton = ({ children, className, ...props }: ButtonProps): ReactNode => {
	const formStatus = useFormStatus()

	return (
		<Button className={`${styles.button} ${className}`} appearance="primary" {...props}>
			{formStatus.pending ? <Spinner size={18} /> : ''}
			{children}
		</Button>
	)
}

export default SubmitButton
