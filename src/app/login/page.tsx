import type { ReactNode } from 'react'

import styles from '@/scss/forms.module.scss'
import { Box } from '@/ui/components/Box/Box.component'
import { login } from '@/actions/login.action'
import type { Metadata } from 'next'
import { Container } from '@/components/Container/Container.component'
import { Card } from '@/ui/components/Card/Card.component'
import { Title1 } from '@/ui/components/Title1/Title1.component'
import { Input } from '@/ui/components/Input/Input'
import { SubmitButton } from '@/components/SubmitButton/SubmitButton.component'
import { Button } from '@/ui/components/Button/Button.component'

export const metadata: Metadata = {
	title: 'Вход - NextLink',
	description: 'Войдите в аккаунт на NextLink, чтобы смотреть читать посты и подписываться на друзей',
	openGraph: {
		title: 'Вход - NextLink',
		description: 'Войдите в аккаунт на NextLink, чтобы смотреть читать посты и подписываться на друзей'
	}
}

const Welcome = (): ReactNode => {
	return (
		<Container className={styles.container}>
			<Card className={styles.card}>
				<Box alignItems="center" gap={16}>
					<Title1 className={styles.title}>Войти</Title1>
					<form className={styles.box} action={login}>
						<Box alignItems="stretch">
							<Input type="email" placeholder="Эл. почта" name="email" autoComplete="email" />
							<Input type="password" placeholder="Пароль" name="password" autoComplete="current-password" />
							<SubmitButton icon="login">Войти</SubmitButton>
						</Box>
					</form>
					<Box className={styles.box} direction="row" justifyContent="space-between">
						<Button appearance="link" href="/signup">Регистрация</Button>
						<Button appearance="link" href="/restore">Забыли пароль?</Button>
					</Box>
				</Box>
			</Card>
		</Container>
	)
}

export default Welcome
