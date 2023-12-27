'use client'

import type { ReactElement } from 'react'

import { Spinner } from '@/ui/components/Spinner/Spinner.component'

const Loading = (): ReactElement => {
	return (
		<div>
			<Spinner></Spinner>
		</div>
	)
}

export default Loading
