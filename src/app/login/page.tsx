import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

import styles from './page.module.scss'
import { Box } from '@/ui/components/Box/Box.component'
import { login } from '@/actions/login.action'
import { Metadata } from 'next'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const Input = dynamic(() => import('@/ui/components/Input/Input'))
// const Box = dynamic(() => import('@/ui/components/Box/Box.component'))
const Button = dynamic(() => import('@/ui/components/Button/Button.component'))
const SubmitButton = dynamic(() => import('@/components/SubmitButton/SubmitButton.component'))
const Title1 = dynamic(() => import('@/ui/components/Title1/Title1.component'))

export const metadata: Metadata = {
	title: 'Вход - NextLink',
	description: 'Войдите в аккаунт на NextLink, чтобы смотреть читать посты и подписываться на друзей',
	openGraph: {
		title: 'Вход - NextLink',
		description: 'Войдите в аккаунт на NextLink, чтобы смотреть читать посты и подписываться на друзей',
	}
}

const Welcome = (): ReactNode => {
	return (
		<Container className={styles.container}>
			<Box className={styles.box} alignItems="center" gap={16}>
				<Title1 className={styles.title}>Войти</Title1>
				<form action={login}>
					<Box alignItems="stretch">
						<Input type="email" placeholder="Эл. почта" name="email" autoComplete="email" />
						<Input type="password" placeholder="Пароль" name="password" autoComplete="current-password" />
						<SubmitButton>Войти</SubmitButton>
					</Box>
				</form>
				<Box direction="row" justifyContent="space-between">
					<Button appearance="link" href="/signup">Регистрация</Button>
					<Button appearance="link" href="/restore">Забыли пароль?</Button>
				</Box>
			</Box>
		</Container>
	)
}

export default Welcome
