import dynamic from 'next/dynamic'
import type { ReactNode } from 'react'

import styles from './page.module.scss'
import { Box } from '@/ui/components/Box/Box.component'

const Container = dynamic(() => import('@/components/Container/Container.component'))
const Input = dynamic(() => import('@/ui/components/Input/Input'))
// const Box = dynamic(() => import('@/ui/components/Box/Box.component'))
const Button = dynamic(() => import('@/ui/components/Button/Button.component'))
const Title1 = dynamic(() => import('@/ui/components/Title1/Title1.component'))

const Welcome = (): ReactNode => {
	return (
		<Container className={styles.container}>
			<Box className={styles.box} alignItems="center" gap={16}>
				<Title1 className={styles.title}>Войти</Title1>
				<Box alignItems="stretch">
					<Input placeholder="Эл. почта" name="username" autoComplete="login" />
					<Input placeholder="Пароль" name="password" autoComplete="current-password" />
					<Button appearance="primary" type="submit">Войти</Button>
				</Box>
				<Box direction="row" justifyContent="space-between">
					<Button appearance="link">Регистрация</Button>
					<Button appearance="link">Забыли пароль?</Button>
				</Box>
			</Box>
		</Container>
	)
}

export default Welcome
