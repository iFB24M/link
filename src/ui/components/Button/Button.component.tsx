'use client'

import type { ReactNode } from 'react'
import styles from './Button.module.scss'
import type { ButtonProps } from './Button.props'

const Button = ({ appearance, className, href, ...props }: ButtonProps): ReactNode => {
	const defaultProps = {
		className: `${styles.button} ${typeof appearance !== 'undefined' ? styles[appearance] : ''} ${className}`,
		...props
	}

	if (typeof href !== 'undefined') {
		return <a href={href} {...defaultProps}></a>
	} else {
		return <button {...defaultProps}></button>
	}
}

export default Button
