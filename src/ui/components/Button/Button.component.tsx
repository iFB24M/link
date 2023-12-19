'use client'

import type { ReactNode } from 'react'
import styles from './Button.module.scss'
import type { ButtonProps } from './Button.props'
import Icon from '../Icon/Icon.component'

const Button = ({ appearance, className, href, icon, children, ...props }: ButtonProps): ReactNode => {
	const defaultProps = {
		className: `${styles.button} ${typeof appearance !== 'undefined' ? styles[appearance] : ''} ${className} ${icon ? styles.icon : ''}`,
		children: <>{icon ? <Icon icon={icon} /> : ''} {children}</>,
		...props
	}

	if (typeof href !== 'undefined') {
		return <a href={href} {...defaultProps}></a>
	} else {
		return <button {...defaultProps}></button>
	}
}

export default Button
