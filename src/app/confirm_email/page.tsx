import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

import styles from './page.module.scss'
import { Box } from '@/ui/components/Box/Box.component'
import { confirmEmail } from '@/actions/confirmEmail.action'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const Input = dynamic(() => import('@/ui/components/Input/Input'))
const Button = dynamic(() => import('@/ui/components/Button/Button.component'))
const SubmitButton = dynamic(() => import('@/components/SubmitButton/SubmitButton.component'))
const Title1 = dynamic(() => import('@/ui/components/Title1/Title1.component'))

const ConfirmEmail = (): ReactNode => {
	return (
		<Container className={styles.container}>
			<Box className={styles.box} alignItems="center" gap={16}>
				<Title1 className={styles.title}>Подтверждение почты</Title1>
				<p>На почту был отправлен шестизначный код подтверждения. Укажите его, чтобы подтвердить что указанная почта действительно принадлежит вам</p>
				<form action={confirmEmail}>
					<Box alignItems="stretch">
						<Input placeholder="Код подтверждения" name="code" autoComplete="off" />
						<SubmitButton>Подтвердить</SubmitButton>
					</Box>
				</form>
				<Box direction="row" justifyContent="space-between">
					<Button appearance="link">Регистрация</Button>
					<Button appearance="link">Забыли пароль?</Button>
				</Box>
			</Box>
		</Container>
	)
}

export default ConfirmEmail
