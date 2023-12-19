'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

const getRandomInt = (min: number, max: number): number => {
	const num = Math.floor(Math.random() * max)

	if (num >= min) return num
	else return getRandomInt(min, max)
}

export const signup = async (formData: FormData) => {
	const rawData = {
		email: formData.get('email')! as string,
		username: formData.get('username')! as string,
		password: formData.get('password')! as string,
		repeatPassword: formData.get('repeat-password')! as string
	}

	if (rawData.password !== rawData.repeatPassword) {
		return { ok: false, message: 'Пароли не совпадают' }
	}

	const code = `${getRandomInt(100000, 999999)}`

	cookies().set('temp_email', rawData.email)
	cookies().set('temp_password', rawData.password)
	cookies().set('temp_username', rawData.username)
	cookies().set('confirm_code', code)

	fetch(`https://fb24m.ru/mail.php?to=${rawData.email}&subject=Подтверждение почты&message=Ваш код подтверждения: ${code}`)
		.then((data) => data.text())
		.then((text) => { console.log(text) })
		.catch((error) => { console.log(error) })

	redirect('/confirm_email')
}
