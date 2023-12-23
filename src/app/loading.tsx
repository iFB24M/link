'use client'

import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'

const Spinner = dynamic(() => import('@/ui/components/Spinner/Spinner.component'))

const Loading = (): ReactElement => {
	return (
		<div>
			<Spinner></Spinner>
		</div>
	)
}

export default Loading
