'use client'

import dynamic from 'next/dynamic'

const Spinner = dynamic(() => import('@/ui/components/Spinner/Spinner.component'))

const Loading = () => {
	return (
		<div>
			<Spinner></Spinner>
		</div>
	)
}

export default Loading
