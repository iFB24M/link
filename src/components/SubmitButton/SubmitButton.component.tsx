'use client'

import type { ReactNode } from 'react'
import styles from './SubmitButton.module.scss'
import dynamic from 'next/dynamic'
import Spinner from '@/ui/components/Spinner/Spinner.component'
import { useFormStatus } from 'react-dom'

const Button = dynamic(() => import('@/ui/components/Button/Button.component'))

const SubmitButton = ({ children }: { children: ReactNode }): ReactNode => {
	const formStatus = useFormStatus()

	return (
		<>
			<Button className={styles.button} appearance="primary">
				{formStatus.pending ? <Spinner size={18} /> : ''}
				{children}
			</Button>
		</>
	)
}

export default SubmitButton
