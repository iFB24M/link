'use client'

import type { ReactElement } from 'react'

import { Spinner } from '@/ui/components/Spinner/Spinner.component'
import { Container } from '@/components/Container/Container.component'

const Loading = (): ReactElement => {
	return (
		<Container>
			<Spinner stroke="var(--accent-color)"></Spinner>
		</Container>
	)
}

export default Loading
