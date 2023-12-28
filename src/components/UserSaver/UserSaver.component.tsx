'use client'

import { saveSessionUser } from '@/actions/saveSessionUser'
import { useEffect, type ReactElement } from 'react'

export const UserSaver = (): ReactElement => {
	useEffect(() => {
		const saveSession = async (): Promise<void> => {
			await saveSessionUser()
		}
		saveSession().catch((e) => { console.log(e) })
	}, [])

	return (<></>)
}
