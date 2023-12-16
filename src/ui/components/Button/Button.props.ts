import type { ReactNode } from 'react'

export interface ButtonProps {
	appearance?: 'primary' | 'secondary' | 'link'
	href?: string
	className?: string
	children?: ReactNode
	type?: 'submit' | 'button'
}
