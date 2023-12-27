'use client'

import { useMarked } from '@/hooks/useMarked'
import type { ReactElement } from 'react'

import styles from './Markdown.module.scss'

export const Markdown = ({ children }: { children: string }): ReactElement => {
	const marked = useMarked(children)

	return (
		<div className={styles.markdown} dangerouslySetInnerHTML={{ __html: marked }}></div>
	)
}
