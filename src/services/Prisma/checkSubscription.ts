'use server'

import { getSelf } from './getSelf'

export const checkSubscription = async (channedId: number): Promise<boolean | undefined> => {
	const user = await getSelf(false)

	return user?.data?.subscribedTo?.includes(`,${channedId},`)
}
