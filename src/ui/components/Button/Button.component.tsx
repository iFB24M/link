'use client'

import type { ReactNode } from 'react'
import styles from './Button.module.scss'
import type { ButtonProps } from './Button.props'
import Icon from '../Icon/Icon.component'
import { exists } from '@/functions/exists'

const Button = ({ appearance, className, href, icon, children, ...props }: ButtonProps): ReactNode => {
	const defaultProps = {
		className: `${styles.button} ${typeof appearance !== 'undefined' ? styles[appearance] : ''} ${className} ${exists(icon) !== '' ? styles.icon : ''}`,
		children: <>{exists(icon) !== '' ? <Icon icon={exists(icon)} /> : ''} {children}</>,
		...props
	}

	if (typeof href !== 'undefined') {
		return <a href={href} {...defaultProps}></a>
	} else {
		return <button {...defaultProps}></button>
	}
}

export default Button
